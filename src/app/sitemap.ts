import type { MetadataRoute } from "next";
import { projectSlugs } from "@/content/projects";

const siteUrl = "https://aliceeriksson.se";

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = [
		"/sv",
		"/sv/projekt",
		"/sv/om",
		"/sv/cv",
		"/sv/kontakt",
		"/en",
		"/en/projects",
		"/en/about",
		"/en/experience",
		"/en/contact",
	];

	const projects = projectSlugs.flatMap((slug) => [
		`/sv/projekt/${slug}`,
		`/en/projects/${slug}`,
	]);

	return [...pages, ...projects].map((path) => ({
		url: `${siteUrl}${path}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: path === "/sv" || path === "/en" ? 1 : 0.8,
	}));
}
