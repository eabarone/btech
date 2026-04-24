/* BTech — YouTube Data API v3 */

const YT_API_BASE = 'https://www.googleapis.com/youtube/v3/search';

/**
 * Search YouTube videos for a given query.
 * Requires a free API key from Google Cloud Console.
 * Returns an empty array (graceful degradation) if key not set.
 */
export async function searchYouTubeVideos(query, apiKey, maxResults = 4) {
  if (!apiKey) return [];

  try {
    const params = new URLSearchParams({
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults,
      relevanceLanguage: 'es',
      key: apiKey,
    });

    const res = await fetch(`${YT_API_BASE}?${params}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    return (data.items || []).map(item => ({
      id:        item.id.videoId,
      title:     item.snippet.title,
      channel:   item.snippet.channelTitle,
      thumb:     item.snippet.thumbnails.medium.url,
      url:       `https://www.youtube.com/watch?v=${item.id.videoId}`,
      embedUrl:  `https://www.youtube.com/embed/${item.id.videoId}`,
    }));
  } catch {
    return [];
  }
}

/** Builds a YouTube search URL as fallback when API key is not set */
export function getYouTubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}
