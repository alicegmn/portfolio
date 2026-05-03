import { notFound } from "next/navigation";
import { getLocale, getPageKey } from "@/content";
import { ProjectsPage } from "@/components/pages/ProjectsPage/ProjectsPage";
import { AboutPage } from "@/components/pages/AboutPage/AboutPage";

type PageProps = {
	params: Promise<{
		locale: string;
		slug: string[];
	}>;
};

export default async function DynamicPage({ params }: PageProps) {
	const { locale, slug } = await params;
	const currentLocale = getLocale(locale);

	if (slug.length !== 1) {
		notFound();
	}

	const pageKey = getPageKey(currentLocale, slug[0]);

	if (!pageKey) {
		notFound();
	}
	switch (pageKey) {
		case "projects":
			return <ProjectsPage locale={currentLocale} />;

		case "about":
			return <AboutPage locale={currentLocale} />;

		default:
			notFound();
	}
}
