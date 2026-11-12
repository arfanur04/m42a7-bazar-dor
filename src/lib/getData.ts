// lib/getData.ts
// Safe fetch for the BazarDor API.
// - tries the main URL, then the two backup URLs
// - never throws, so the layout does not crash if the network fails
// - caches the result for 1 hour so the navbar does not refetch on every request

const BASE_URLS = [
	"https://openapi.programming-hero.com/api/bazardor",
	"https://api.api-store.workers.dev/api/bazardor",
	"https://api.abcz.workers.dev/api/bazardor",
];

export async function getData<T>(path: string, fallback: T): Promise<T> {
	for (const base of BASE_URLS) {
		try {
			const res = await fetch(`${base}${path}`, {
				next: { revalidate: 3600 },
			});
			if (res.ok) return (await res.json()) as T;
		} catch (error) {
			console.error(`fetch failed: ${base}${path}`, error);
			// try the next URL
		}
	}
	return fallback;
}
