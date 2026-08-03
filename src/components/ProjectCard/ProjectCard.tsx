import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/content";
import { routes } from "@/content/content";
import type { Project, ProjectSlug } from "@/content/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
	project: Project;
	slug: ProjectSlug;
	locale: Locale;
};

export function ProjectCard({ project, slug, locale }: ProjectCardProps) {
	const href = `${routes[locale].projects}/${slug}`;

	return (
		<article className={styles.card}>
			<Link href={href} className={styles.link}>
				<div className={styles.imageWrapper}>
					<Image
						src={project.image.src}
						alt={project.image.alt}
						width={1200}
						height={750}
						className={styles.image}
					/>
				</div>

				<div className={styles.content}>
					<p className={styles.category}>{project.category}</p>
					<h2>{project.title}</h2>
					<p>{project.summary}</p>

					<ul className={styles.technologies}>
						{project.technologies.slice(0, 5).map((technology) => (
							<li key={technology}>{technology}</li>
						))}
					</ul>

					<span>{locale === "sv" ? "Visa projekt" : "View project"} →</span>
				</div>
			</Link>
		</article>
	);
}
