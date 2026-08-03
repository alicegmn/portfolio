import { notFound } from "next/navigation";
import { getPageKey, isLocale } from "@/content/content";
import { getProject } from "@/content/projects";
import { ProjectPage } from "@/components/pages/ProjectPage/ProjectPage";
import { ProjectsPage } from "@/components/pages/ProjectsPage/ProjectsPage";
import { AboutPage } from "@/components/pages/AboutPage/AboutPage";
import { ContactPage } from "@/components/pages/ContactPage/ContactPage";
import { ResumePage } from "@/components/pages/ResumePage/ResumePage";

type PageProps = {
	params: Promise<{
		locale: string;
		slug: string[];
	}>;
};

export default async function DynamicPage({ params }: PageProps) {
	const { locale, slug } = await params;

	if (!isLocale(locale)) {
		notFound();
	}
	const [pageSlug, projectSlug] = slug;
	const pageKey = getPageKey(locale, pageSlug);

	if (slug.length === 1) {
		switch (pageKey) {
			case "projects":
				return <ProjectsPage locale={locale} />;

			case "about":
				return <AboutPage locale={locale} />;

			case "resume":
				return <ResumePage locale={locale} />;

			case "contact":
				return <ContactPage locale={locale} />;

			default:
				notFound();
		}
	}

	if (slug.length === 2 && pageKey === "projects") {
		const project = getProject(locale, projectSlug);

		if (!project) {
			notFound();
		}

		return <ProjectPage project={project} locale={locale} />;
	}

	notFound();
}
