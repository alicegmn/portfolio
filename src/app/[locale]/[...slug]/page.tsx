import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import {
	content,
	getPageKey,
	isLocale,
	locales,
	pageSlugs,
	routes,
} from "@/content/content";
import { getProject, projectSlugs } from "@/content/projects";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs/Breadcrumbs";

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
		let page: ReactNode;

		switch (pageKey) {
			case "projects":
				page = <ProjectsPage locale={locale} />;
				break;

			case "about":
				page = <AboutPage locale={locale} />;
				break;

			case "experience":
				page = <ExperiencePage locale={locale} />;
				break;

			case "contact":
				page = <ContactPage locale={locale} />;
				break;

			default:
				notFound();
		}

		return (
			<>
				<Breadcrumbs
					ariaLabel={locale === "sv" ? "Brödsmulor" : "Breadcrumbs"}
					items={[
						{
							label: content[locale].breadcrumbs.home,
							href: routes[locale].home,
						},
						{
							label: content[locale].breadcrumbs[pageKey],
						},
					]}
				/>
				{page}
			</>
		);
	}

	if (slug.length === 2 && pageKey === "projects" && projectSlug) {
		const project = getProject(locale, projectSlug);

		if (!project) {
			notFound();
		}

		return (
			<>
				<Breadcrumbs
					ariaLabel={locale === "sv" ? "Brödsmulor" : "Breadcrumbs"}
					items={[
						{
							label: content[locale].breadcrumbs.home,
							href: routes[locale].home,
						},
						{
							label: content[locale].breadcrumbs.projects,
							href: routes[locale].projects,
						},
						{ label: project.title },
					]}
				/>
				<ProjectPage project={project} locale={locale} />
			</>
		);
	}

	notFound();
}
