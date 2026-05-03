import { content, type Locale } from "@/content";

type ProjectsPageProps = Readonly<{
	locale: Locale;
}>;

export function ProjectsPage({ locale }: ProjectsPageProps) {
	const projects = content[locale].projects;

	return (
		<section>
			<h1>Projects</h1>
			<p>Om min projects</p>
		</section>
	);
}
