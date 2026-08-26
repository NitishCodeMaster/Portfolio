/**
 * CODING PROFILES & COMPETITIVE PROGRAMMING API SERVICE
 * ----------------------------------------------------------------------------
 * Fetches real, live public statistics for LeetCode & CodeChef with caching.
 * Zero hardcoded fake metrics.
 */

const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes cache

export async function fetchLeetCodeStats(username) {
  if (!username) return null;

  const cacheKey = `leetcode_stats_${username}`;
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
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
    if (!res.ok) return null;

    const data = await res.json();
    const cleanData = {
      totalSolved: data.totalSolved ?? 0,
      easySolved: data.easySolved ?? 0,
      mediumSolved: data.mediumSolved ?? 0,
      hardSolved: data.hardSolved ?? 0,
      ranking: data.ranking ? `#${Number(data.ranking).toLocaleString()}` : null,
      acceptanceRate: data.acceptanceRate ?? null,
      contributionPoints: data.contributionPoint ?? null,
      recentSubmissions: (data.recentSubmissions || []).slice(0, 5)
    };

    localStorage.setItem(
      cacheKey,
      JSON.stringify({ timestamp: Date.now(), data: cleanData })
    );

    return cleanData;
  } catch (error) {
    console.warn(`LeetCode dynamic fetch fallback for ${username}:`, error);
    return null;
  }
}

export async function fetchCodeChefStats(username) {
  if (!username) return null;

  const cacheKey = `codechef_stats_${username}`;
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
    const res = await fetch(`https://codechef-api.vercel.app/handle/${username}`);
    if (!res.ok) return null;

    const data = await res.json();
    if (!data || data.success === false) return null;

    const cleanData = {
      currentRating: data.currentRating ?? data.rating ?? null,
      highestRating: data.highestRating ?? null,
      stars: data.stars ?? null,
      globalRank: data.globalRank ? `#${Number(data.globalRank).toLocaleString()}` : null,
      countryRank: data.countryRank ? `#${Number(data.countryRank).toLocaleString()}` : null,
      fullySolved: data.fullySolved ?? data.totalSolved ?? null
    };

    localStorage.setItem(
      cacheKey,
      JSON.stringify({ timestamp: Date.now(), data: cleanData })
    );

    return cleanData;
  } catch (error) {
    console.warn(`CodeChef dynamic fetch fallback for ${username}:`, error);
    return null;
  }
}
