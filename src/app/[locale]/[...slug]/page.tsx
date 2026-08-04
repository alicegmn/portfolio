import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPageKey, isLocale, locales, pageSlugs } from "@/content/content";
import { getProject, projectSlugs } from "@/content/projects";

import { AboutPage } from "@/components/pages/AboutPage/AboutPage";
import { ContactPage } from "@/components/pages/ContactPage/ContactPage";
import { ProjectPage } from "@/components/pages/ProjectPage/ProjectPage";
import { ProjectsPage } from "@/components/pages/ProjectsPage/ProjectsPage";
import { ExperiencePage } from "@/components/pages/ExperiencePage/ExperiencePage";

type PageProps = {
	params: Promise<{
		locale: string;
		slug: string[];
	}>;
};

export function generateStaticParams() {
	return locales.flatMap((locale) => {
		const regularPages = Object.keys(pageSlugs[locale]).map((pageSlug) => ({
			locale,
			slug: [pageSlug],
		}));

		const projectsPageSlug = locale === "sv" ? "projekt" : "projects";

		const projectPages = projectSlugs.map((projectSlug) => ({
			locale,
			slug: [projectsPageSlug, projectSlug],
		}));

		return [...regularPages, ...projectPages];
	});
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { locale, slug } = await params;

	if (!isLocale(locale)) {
		return {};
	}

	const [pageSlug, projectSlug] = slug;

	if (!pageSlug) {
		return {};
	}

	const pageKey = getPageKey(locale, pageSlug);

	if (slug.length === 2 && pageKey === "projects" && projectSlug) {
		const project = getProject(locale, projectSlug);

		if (!project) {
			return {};
		}

		return {
			title: `${project.title} | Alice Eriksson`,
			description: project.summary,
			openGraph: {
				title: project.title,
				description: project.summary,
				images: [
					{
						url: project.image.src,
						alt: project.image.alt,
					},
				],
			},
		};
	}

	return {};
}

export default async function DynamicPage({ params }: PageProps) {
	const { locale, slug } = await params;

	if (!isLocale(locale)) {
		notFound();
	}

	const [pageSlug, projectSlug] = slug;

	if (!pageSlug) {
		notFound();
	}

	const pageKey = getPageKey(locale, pageSlug);

	if (slug.length === 1) {
		switch (pageKey) {
			case "projects":
				return <ProjectsPage locale={locale} />;

			case "about":
				return <AboutPage locale={locale} />;

			case "experience":
				return <ExperiencePage locale={locale} />;

			case "contact":
				return <ContactPage locale={locale} />;

			default:
				notFound();
		}
	}

	if (slug.length === 2 && pageKey === "projects" && projectSlug) {
		const project = getProject(locale, projectSlug);

		if (!project) {
			notFound();
		}

		return <ProjectPage project={project} locale={locale} />;
	}

	notFound();
}
