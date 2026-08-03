import { content, type Locale } from "@/content/content";
import { projectSlugs, projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import styles from "./ProjectsPage.module.css";

type ProjectsPageProps = {
	locale: Locale;
};

export function ProjectsPage({ locale }: ProjectsPageProps) {
	const pageContent = content[locale].projects;

	return (
		<section className={styles.page}>
			<header className={styles.header}>
				<h1>{pageContent.title}</h1>
				<p>{pageContent.intro}</p>
			</header>

			<div className={styles.grid}>
				{projectSlugs.map((slug) => (
					<ProjectCard
						key={slug}
						slug={slug}
						locale={locale}
						project={projects[locale][slug]}
					/>
				))}
			</div>
		</section>
	);
}
