/**
 * RESUME EXTRACTION SERVICE (pdfjs-dist)
 * ----------------------------------------------------------------------------
 * Dynamically fetches and extracts structured information from the resume PDF
 * in the client browser. If the PDF file is replaced, the cache detects changes
 * and updates extracted data automatically.
 */

import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const RESUME_CACHE_KEY = "nitish_resume_parsed_data";

export async function parseResumePdf(pdfUrl = "/NitishResume.pdf") {
  try {
    const response = await fetch(pdfUrl, { cache: "no-cache" });
    if (!response.ok) return null;

    const arrayBuffer = await response.arrayBuffer();
    const byteLength = arrayBuffer.byteLength;

    // Check cache
    const cached = localStorage.getItem(RESUME_CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed.byteLength === byteLength && parsed.data) {
          return parsed.data;
        }
      } catch {
        localStorage.removeItem(RESUME_CACHE_KEY);
      }
    }

    // Load PDF
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdfDoc = await loadingTask.promise;
    let fullText = "";

    for (let i = 1; i <= pdfDoc.numPages; i++) {
      const page = await pdfDoc.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    const extractedData = {
      rawText: fullText,
      lastParsed: new Date().toISOString(),
      byteLength,
      numPages: pdfDoc.numPages
    };

    localStorage.setItem(
      RESUME_CACHE_KEY,
      JSON.stringify({ byteLength, data: extractedData })
    );

    return extractedData;
  } catch (error) {
    console.warn("Resume client-side parsing fallback:", error);
    return null;
  }
}
