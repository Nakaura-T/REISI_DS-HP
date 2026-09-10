import { writeFile } from "node:fs/promises";

const authorId = "A5057900219";
const outputPath = new URL("../data/research-metrics.json", import.meta.url);
const works = [];
let cursor = "*";

while (cursor) {
  const url = new URL("https://api.openalex.org/works");
  url.searchParams.set("filter", `author.id:${authorId}`);
  url.searchParams.set("per-page", "200");
  url.searchParams.set("cursor", cursor);
  url.searchParams.set("select", "id,cited_by_count");

  const response = await fetch(url, {
    headers: { "User-Agent": "Nakaura-Lab-Metrics/1.0 (https://github.com/)" },
  });
  if (!response.ok) throw new Error(`OpenAlex request failed: ${response.status} ${response.statusText}`);

  const page = await response.json();
  works.push(...page.results);
  cursor = page.meta.next_cursor;
}

const citationCounts = works.map((work) => work.cited_by_count).sort((a, b) => b - a);
const hIndex = citationCounts.reduce((h, count, index) => count >= index + 1 ? index + 1 : h, 0);
const citedByCount = citationCounts.reduce((total, count) => total + count, 0);

if (!works.length || !Number.isInteger(hIndex) || !Number.isInteger(citedByCount)) {
  throw new Error("OpenAlex returned incomplete metrics; the published data was not updated.");
}

const metrics = {
  source: "OpenAlex",
  author: {
    id: authorId,
    name: "Takeshi Nakaura",
    url: `https://openalex.org/${authorId}`,
  },
  works_count: works.length,
  cited_by_count: citedByCount,
  h_index: hIndex,
  updated_at: new Date().toISOString(),
};

await writeFile(outputPath, `${JSON.stringify(metrics, null, 2)}\n`);
console.log(`Updated OpenAlex metrics: ${metrics.cited_by_count} citations, h-index ${metrics.h_index}, ${metrics.works_count} works.`);
