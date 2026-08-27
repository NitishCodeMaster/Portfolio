import { useState } from "react";
import { Copy, Check, ExternalLink, FileCode, CheckSquare, Square } from "lucide-react";

/**
 * Resolves relative URLs (e.g. "./screenshots/Banner.png") to GitHub raw or blob URLs
 */
function resolveUrl(url, repoIdentifier, isImage = false) {
  if (!url) return "";
  if (/^(https?:|\/\/|data:|mailto:)/i.test(url)) {
    return url;
  }
  if (!repoIdentifier) return url;

  const cleanRepo = repoIdentifier
    .replace(/^https?:\/\/github\.com\//, "")
    .replace(/\/$/, "");

  const cleanPath = url.replace(/^\.\//, "").replace(/^\//, "");

  if (isImage) {
    return `https://raw.githubusercontent.com/${cleanRepo}/main/${cleanPath}`;
  }
  return `https://github.com/${cleanRepo}/blob/main/${cleanPath}`;
}

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-xl border border-white/[0.08] bg-[#050508] overflow-hidden group/code">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
          <FileCode className="w-3.5 h-3.5 text-purple-400" />
          <span>{language || "code"}</span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-400 hover:text-white hover:border-white/20 transition-all interactive"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-zinc-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre className="p-4 text-xs font-mono text-zinc-200 overflow-x-auto leading-relaxed selection:bg-purple-500/30">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/**
 * Render inline markdown tokens (bold, italic, code, links, images)
 */
function renderInline(text, repoIdentifier, keyPrefix = "") {
  if (!text) return null;

  // Split and match tokens: code, links, images, bold, italic
  const parts = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    // 1. Inline Image: ![alt](url)
    const imgMatch = remaining.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
    if (imgMatch) {
      const [, alt, url] = imgMatch;
      const resolved = resolveUrl(url, repoIdentifier, true);
      parts.push(
        <span key={`${keyPrefix}-img-${keyIndex++}`} className="inline-block my-2 max-w-full">
          <img
            src={resolved}
            alt={alt || "Documentation image"}
            className="max-h-96 rounded-xl border border-white/[0.08] bg-black/40 object-contain"
            loading="lazy"
            onError={(e) => {
              // Hide broken images gracefully if path doesn't exist on remote
              e.currentTarget.style.display = "none";
            }}
          />
        </span>
      );
      remaining = remaining.slice(imgMatch[0].length);
      continue;
    }

    // 2. Inline Link: [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      const resolved = resolveUrl(url, repoIdentifier, false);
      const isExternal = /^https?:\/\//i.test(resolved);
      parts.push(
        <a
          key={`${keyPrefix}-link-${keyIndex++}`}
          href={resolved}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-purple-300 hover:text-purple-200 underline decoration-purple-500/40 hover:decoration-purple-300 transition-colors inline-flex items-center gap-0.5 mx-0.5"
        >
          <span>{renderInline(label, repoIdentifier, `${keyPrefix}-sub-${keyIndex}`)}</span>
          {isExternal && <ExternalLink className="w-2.5 h-2.5 opacity-60 inline" />}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // 3. Inline Code: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      const [, codeText] = codeMatch;
      parts.push(
        <code
          key={`${keyPrefix}-code-${keyIndex++}`}
          className="font-mono text-[11px] text-purple-200 bg-purple-950/40 border border-purple-500/20 px-1.5 py-0.5 rounded"
        >
          {codeText}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // 4. Bold / Italic: ***text***
    const boldItalicMatch = remaining.match(/^(\*\*\*|___)(.*?)\1/);
    if (boldItalicMatch) {
      parts.push(
        <strong key={`${keyPrefix}-bi-${keyIndex++}`} className="font-bold italic text-white">
          {renderInline(boldItalicMatch[2], repoIdentifier, `${keyPrefix}-bi-sub-${keyIndex}`)}
        </strong>
      );
      remaining = remaining.slice(boldItalicMatch[0].length);
      continue;
    }

    // 5. Bold: **text** or __text__
    const boldMatch = remaining.match(/^(\*\*|__)(.*?)\1/);
    if (boldMatch) {
      parts.push(
        <strong key={`${keyPrefix}-b-${keyIndex++}`} className="font-bold text-white">
          {renderInline(boldMatch[2], repoIdentifier, `${keyPrefix}-b-sub-${keyIndex}`)}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // 6. Italic: *text* or _text_
    const italicMatch = remaining.match(/^(\*|_)(.*?)\1/);
    if (italicMatch) {
      parts.push(
        <em key={`${keyPrefix}-i-${keyIndex++}`} className="italic text-zinc-200">
          {renderInline(italicMatch[2], repoIdentifier, `${keyPrefix}-i-sub-${keyIndex}`)}
        </em>
      );
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // 7. Strikethrough: ~~text~~
    const strikeMatch = remaining.match(/^~~(.*?)~~/);
    if (strikeMatch) {
      parts.push(
        <del key={`${keyPrefix}-del-${keyIndex++}`} className="line-through text-zinc-500">
          {renderInline(strikeMatch[1], repoIdentifier, `${keyPrefix}-del-sub-${keyIndex}`)}
        </del>
      );
      remaining = remaining.slice(strikeMatch[0].length);
      continue;
    }

    // 8. Plain text slice until next markdown trigger
    const nextTrigger = remaining.search(/[`!\[*_~]/);
    if (nextTrigger === -1) {
      parts.push(remaining);
      break;
    } else if (nextTrigger === 0) {
      // If trigger wasn't a valid token, push first character and continue
      parts.push(remaining[0]);
      remaining = remaining.slice(1);
    } else {
      parts.push(remaining.slice(0, nextTrigger));
      remaining = remaining.slice(nextTrigger);
    }
  }

  return parts;
}

export function MarkdownRenderer({ content, repoIdentifier }) {
  if (!content) return null;

  // Normalize newlines
  const rawText = content.replace(/\r\n/g, "\n");

  // Step 1: Split into blocks by fenced code blocks
  const blocks = [];
  const lines = rawText.split("\n");
  let inCodeBlock = false;
  let codeLang = "";
  let codeBuffer = [];
  let textBuffer = [];

  const flushTextBuffer = () => {
    if (textBuffer.length > 0) {
      blocks.push({ type: "text", content: textBuffer.join("\n") });
      textBuffer = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const codeFenceMatch = line.match(/^```(\w*)/);

    if (codeFenceMatch) {
      if (!inCodeBlock) {
        flushTextBuffer();
        inCodeBlock = true;
        codeLang = codeFenceMatch[1] || "";
        codeBuffer = [];
      } else {
        inCodeBlock = false;
        blocks.push({ type: "code", code: codeBuffer.join("\n"), language: codeLang });
        codeBuffer = [];
      }
    } else if (inCodeBlock) {
      codeBuffer.push(line);
    } else {
      textBuffer.push(line);
    }
  }

  // Flush any remaining
  if (inCodeBlock && codeBuffer.length > 0) {
    blocks.push({ type: "code", code: codeBuffer.join("\n"), language: codeLang });
  } else {
    flushTextBuffer();
  }

  return (
    <div className="space-y-4 text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
      {blocks.map((block, blockIdx) => {
        if (block.type === "code") {
          return <CodeBlock key={`block-${blockIdx}`} code={block.code} language={block.language} />;
        }

        // Parse text block lines (headings, lists, blockquotes, tables, paragraphs)
        const blockLines = block.content.split("\n");
        const renderedElements = [];
        let i = 0;

        while (i < blockLines.length) {
          const line = blockLines[i];
          const trimmed = line.trim();

          // 1. Empty lines
          if (!trimmed) {
            i++;
            continue;
          }

          // 2. Horizontal Rules: ---, ***, ___
          if (/^(\*{3,}|-{3,}|_{3,})$/.test(trimmed)) {
            renderedElements.push(
              <hr key={`hr-${blockIdx}-${i}`} className="my-6 border-white/[0.08]" />
            );
            i++;
            continue;
          }

          // 3. Headings
          const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
          if (headingMatch) {
            const level = headingMatch[1].length;
            const headingText = headingMatch[2];

            if (level === 1) {
              renderedElements.push(
                <h1
                  key={`h1-${blockIdx}-${i}`}
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-7 mb-3 pb-2 border-b border-white/[0.08] font-display"
                >
                  {renderInline(headingText, repoIdentifier, `h1-${blockIdx}-${i}`)}
                </h1>
              );
            } else if (level === 2) {
              renderedElements.push(
                <h2
                  key={`h2-${blockIdx}-${i}`}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mt-6 mb-3 pb-1.5 border-b border-white/[0.05] font-display"
                >
                  {renderInline(headingText, repoIdentifier, `h2-${blockIdx}-${i}`)}
                </h2>
              );
            } else if (level === 3) {
              renderedElements.push(
                <h3
                  key={`h3-${blockIdx}-${i}`}
                  className="text-base sm:text-lg font-bold text-zinc-100 mt-5 mb-2 font-display"
                >
                  {renderInline(headingText, repoIdentifier, `h3-${blockIdx}-${i}`)}
                </h3>
              );
            } else {
              renderedElements.push(
                <h4
                  key={`h4-${blockIdx}-${i}`}
                  className="text-sm sm:text-base font-semibold text-zinc-200 mt-4 mb-1.5 font-display"
                >
                  {renderInline(headingText, repoIdentifier, `h4-${blockIdx}-${i}`)}
                </h4>
              );
            }
            i++;
            continue;
          }

          // 4. Blockquotes: > text
          if (trimmed.startsWith(">")) {
            const quoteLines = [];
            while (i < blockLines.length && blockLines[i].trim().startsWith(">")) {
              quoteLines.push(blockLines[i].replace(/^>\s?/, ""));
              i++;
            }
            renderedElements.push(
              <blockquote
                key={`quote-${blockIdx}-${i}`}
                className="my-3 pl-4 py-2 border-l-2 border-purple-500/60 bg-purple-950/10 rounded-r-xl text-zinc-300 italic text-xs sm:text-sm"
              >
                {quoteLines.map((qLine, qIdx) => (
                  <p key={`ql-${qIdx}`}>
                    {renderInline(qLine, repoIdentifier, `q-${blockIdx}-${i}-${qIdx}`)}
                  </p>
                ))}
              </blockquote>
            );
            continue;
          }

          // 5. Tables: | ... |
          if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
            const tableRows = [];
            while (i < blockLines.length && blockLines[i].trim().startsWith("|") && blockLines[i].trim().endsWith("|")) {
              const rowContent = blockLines[i].trim();
              // Check if it's separator row |---|---|
              if (!/^\|(\s*:?-+:?\s*\|)+$/.test(rowContent)) {
                const cells = rowContent
                  .slice(1, -1)
                  .split("|")
                  .map((c) => c.trim());
                tableRows.push(cells);
              }
              i++;
            }

            if (tableRows.length > 0) {
              const [header, ...body] = tableRows;
              renderedElements.push(
                <div key={`table-${blockIdx}-${i}`} className="my-4 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#050508]">
                  <table className="w-full text-left border-collapse text-xs">
                    {header && (
                      <thead className="bg-white/[0.04] text-zinc-200 border-b border-white/[0.08]">
                        <tr>
                          {header.map((cell, cIdx) => (
                            <th key={`th-${cIdx}`} className="py-2.5 px-3 font-semibold">
                              {renderInline(cell, repoIdentifier, `th-${blockIdx}-${i}-${cIdx}`)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody className="divide-y divide-white/[0.05]">
                      {body.map((row, rIdx) => (
                        <tr key={`tr-${rIdx}`} className="hover:bg-white/[0.02] transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={`td-${rIdx}-${cIdx}`} className="py-2 px-3 text-zinc-300">
                              {renderInline(cell, repoIdentifier, `td-${blockIdx}-${rIdx}-${cIdx}`)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            continue;
          }

          // 6. Unordered Lists: - or *
          if (/^[-*+]\s+/.test(trimmed)) {
            const listItems = [];
            while (i < blockLines.length && /^[-*+]\s+/.test(blockLines[i].trim())) {
              const itemText = blockLines[i].trim().replace(/^[-*+]\s+/, "");
              listItems.push(itemText);
              i++;
            }
            renderedElements.push(
              <ul key={`ul-${blockIdx}-${i}`} className="my-2 space-y-1.5 pl-2">
                {listItems.map((item, itemIdx) => {
                  // Task list check [x] or [ ]
                  const isTaskChecked = /^\[x\]\s+/i.test(item);
                  const isTaskUnchecked = /^\[ \]\s+/.test(item);

                  if (isTaskChecked || isTaskUnchecked) {
                    const taskText = item.replace(/^\[[ x]\]\s+/i, "");
                    return (
                      <li key={`task-${itemIdx}`} className="flex items-start gap-2 text-zinc-300">
                        {isTaskChecked ? (
                          <CheckSquare className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                        )}
                        <span>{renderInline(taskText, repoIdentifier, `task-${blockIdx}-${itemIdx}`)}</span>
                      </li>
                    );
                  }

                  return (
                    <li key={`li-${itemIdx}`} className="flex items-start gap-2 text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>{renderInline(item, repoIdentifier, `li-${blockIdx}-${itemIdx}`)}</span>
                    </li>
                  );
                })}
              </ul>
            );
            continue;
          }

          // 7. Ordered Lists: 1. 2. 3.
          if (/^\d+\.\s+/.test(trimmed)) {
            const listItems = [];
            while (i < blockLines.length && /^\d+\.\s+/.test(blockLines[i].trim())) {
              const itemText = blockLines[i].trim().replace(/^\d+\.\s+/, "");
              listItems.push(itemText);
              i++;
            }
            renderedElements.push(
              <ol key={`ol-${blockIdx}-${i}`} className="my-2 space-y-1.5 pl-2">
                {listItems.map((item, itemIdx) => (
                  <li key={`oli-${itemIdx}`} className="flex items-start gap-2.5 text-zinc-300">
                    <span className="text-[10px] font-mono font-bold text-purple-400 px-1.5 py-0.5 rounded bg-purple-950/50 border border-purple-500/20 shrink-0">
                      {itemIdx + 1}
                    </span>
                    <span className="pt-0.5">{renderInline(item, repoIdentifier, `oli-${blockIdx}-${itemIdx}`)}</span>
                  </li>
                ))}
              </ol>
            );
            continue;
          }

          // 8. Standalone Image block
          const standaloneImg = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
          if (standaloneImg) {
            const [, alt, url] = standaloneImg;
            const resolved = resolveUrl(url, repoIdentifier, true);
            renderedElements.push(
              <div key={`img-${blockIdx}-${i}`} className="my-5 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050508]/80 p-2 shadow-lg">
                <img
                  src={resolved}
                  alt={alt || "Project documentation visual"}
                  className="w-full max-h-[480px] rounded-xl object-contain bg-black/50"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {alt && (
                  <p className="text-[11px] font-mono text-zinc-500 text-center pt-2">
                    {alt}
                  </p>
                )}
              </div>
            );
            i++;
            continue;
          }

          // 9. Standard Paragraph
          renderedElements.push(
            <p key={`p-${blockIdx}-${i}`} className="my-2 text-zinc-300 leading-relaxed font-light">
              {renderInline(line, repoIdentifier, `p-${blockIdx}-${i}`)}
            </p>
          );
          i++;
        }

        return <div key={`text-block-${blockIdx}`}>{renderedElements}</div>;
      })}
    </div>
  );
}
