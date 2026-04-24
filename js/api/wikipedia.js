/* BTech — Wikipedia REST API */

const WIKI_API = 'https://es.wikipedia.org/api/rest_v1/page/summary/';

/**
 * Fetches a summary for the given Wikipedia page title.
 * Falls back gracefully if the article is not found.
 */
export async function getWikiSummary(query) {
  try {
    const encoded = encodeURIComponent(query);
    const res = await fetch(`${WIKI_API}${encoded}`, {
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    return {
      title:    data.title        || query,
      extract:  data.extract      || '',
      imageUrl: data.thumbnail?.source || null,
      pageUrl:  data.content_urls?.desktop?.page || null,
    };
  } catch {
    return {
      title:    query,
      extract:  '',
      imageUrl: null,
      pageUrl:  null,
    };
  }
}
