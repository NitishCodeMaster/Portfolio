/**
 * GITHUB & REPOSITORY DYNAMIC API SERVICE
 * ----------------------------------------------------------------------------
 * Gracefully retrieves live repository metadata, stars, forks, languages,
 * topics, and calculates language percentages.
 * 
 * Includes local client-side caching to respect GitHub API rate limits.
 */

const CACHE_TTL_MS = 1000 * 60 * 60; // 1 Hour Cache TTL

export async function getRepoData(repoIdentifier) {
  if (!repoIdentifier || repoIdentifier === "#") {
    return null;
  }

  // Clean repo format e.g. "https://github.com/user/repo" -> "user/repo"
  const cleanRepo = repoIdentifier
    .replace(/^https?:\/\/github\.com\//, "")
    .replace(/\/$/, "");

  const cacheKey = `gh_repo_${cleanRepo}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
        return parsed.data;
      }
    } catch {
      localStorage.removeItem(cacheKey);
    }
  }

  try {
    // 1. Fetch Repository Details
    const repoRes = await fetch(`https://api.github.com/repos/${cleanRepo}`, {
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    });

    if (!repoRes.ok) {
      return null;
    }

    const repoJson = await repoRes.json();

    // 2. Fetch Repository Languages Breakdown
    let languages = [];
    try {
      const langRes = await fetch(repoJson.languages_url);
      if (langRes.ok) {
        const langData = await langRes.json();
        const totalBytes = Object.values(langData).reduce((acc, b) => acc + b, 0);

        if (totalBytes > 0) {
          languages = Object.entries(langData).map(([name, bytes]) => ({
            name,
            percentage: ((bytes / totalBytes) * 100).toFixed(1),
            bytes
          }));
        }
      }
    } catch (e) {
      console.warn("Language fetch warning:", e);
    }

    const compiledData = {
      name: repoJson.name,
      fullName: repoJson.full_name,
      description: repoJson.description || "",
      stars: repoJson.stargazers_count ?? 0,
      forks: repoJson.forks_count ?? 0,
      watchers: repoJson.watchers_count ?? 0,
      openIssues: repoJson.open_issues_count ?? 0,
      primaryLanguage: repoJson.language || "TypeScript",
      languages,
      topics: repoJson.topics || [],
      updatedAt: repoJson.updated_at ? new Date(repoJson.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "",
      htmlUrl: repoJson.html_url,
      homepage: repoJson.homepage || "",
      license: repoJson.license?.name || "MIT"
    };

    // Save to Cache
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ timestamp: Date.now(), data: compiledData })
    );

    return compiledData;
  } catch (error) {
    console.warn(`GitHub API graceful fallback for ${cleanRepo}:`, error);
    return null;
  }
}

/**
 * Aggregate detected technologies across all projects with GitHub repos
 */
export function aggregateProjectTech(projects, liveRepoMap = {}) {
  const techSet = new Map();

  projects.forEach((proj) => {
    // 1. Add manual technologies
    if (proj.manualTech) {
      proj.manualTech.forEach((t) => techSet.set(t, (techSet.get(t) || 0) + 1));
    }

    // 2. Add live detected languages from GitHub
    const liveData = liveRepoMap[proj.id];
    if (liveData && liveData.languages) {
      liveData.languages.forEach((lang) => {
        if (parseFloat(lang.percentage) > 3) {
          techSet.set(lang.name, (techSet.get(lang.name) || 0) + 1);
        }
      });
    }

    // 3. Add topics/tags from GitHub
    if (liveData && liveData.topics) {
      liveData.topics.forEach((topic) => {
        const formatted = topic.charAt(0).toUpperCase() + topic.slice(1);
        techSet.set(formatted, (techSet.get(formatted) || 0) + 1);
      });
    }
  });

  return Array.from(techSet.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
}
