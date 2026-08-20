import { content, type Locale } from "@/content/content";
import { projectSlugs, projects } from "@/content/projects";
import { IntroSection } from "@/components/IntroSection/IntroSection";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import styles from "./ProjectsPage.module.css";

type ProjectsPageProps = {
	locale: Locale;
};

export function ProjectsPage({ locale }: ProjectsPageProps) {
	const pageContent = content[locale].projects;

	return (
		<section className={styles.page}>
			<IntroSection
				eyebrow={`/ ${locale === "sv" ? "projekt" : "projects"}`}
				title={pageContent.title}
				description={pageContent.intro}
			/>

			<div className={styles.grid}>
				{projectSlugs.map((slug) => (
					<ProjectCard
						key={slug}
						slug={slug}
						locale={locale}
						project={projects[locale][slug]}
						variant="grid"
					/>
				))}
			</div>
		</section>
	);
}
