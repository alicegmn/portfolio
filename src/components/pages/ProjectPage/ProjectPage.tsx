import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/content";
import type { Project } from "@/content/projects";
import styles from "./ProjectPage.module.css";

type ProjectPageProps = {
	project: Project;
	locale: Locale;
};

export function ProjectPage({ project, locale }: ProjectPageProps) {
	return (
		<article className={styles.project}>
			<header className={styles.hero}>
				<p className={styles.category}>{project.category}</p>
				<h1 className={styles.title}>{project.title}</h1>
				<p className={styles.summary}>{project.summary}</p>

				<div className={styles.links}>
					{project.links.live && (
						<Link href={project.links.live} className={styles.primaryLink}>
							{locale === "sv" ? "Besök projektet" : "View live"}
						</Link>
					)}

					{project.links.github && (
						<Link href={project.links.github} className={styles.secondaryLink}>
							GitHub
						</Link>
					)}
				</div>

				<Image
					src={project.image.src}
					alt={project.image.alt}
					width={1600}
					height={1000}
					priority
					className={styles.heroImage}
				/>
			</header>

			<section className={styles.facts}>
				<div>
					<h2>{locale === "sv" ? "Min roll" : "My role"}</h2>
					<p>{project.role}</p>
				</div>

				<div>
					<h2>{locale === "sv" ? "Period" : "Period"}</h2>
					<p>{project.period}</p>
				</div>

				{project.team && (
					<div>
						<h2>{locale === "sv" ? "Team" : "Team"}</h2>
						<p>{project.team}</p>
					</div>
				)}
			</section>

			<section className={styles.section}>
				<h2>{locale === "sv" ? "Problemet" : "The problem"}</h2>
				<p>{project.problem}</p>
			</section>

			<section className={styles.section}>
				<h2>{locale === "sv" ? "Lösningen" : "The solution"}</h2>
				<p>{project.solution}</p>
			</section>

			<section className={styles.section}>
				<h2>{locale === "sv" ? "Mitt ansvar" : "My responsibilities"}</h2>

				<ul>
					{project.responsibilities.map((responsibility) => (
						<li key={responsibility}>{responsibility}</li>
					))}
				</ul>
			</section>

			<section className={styles.section}>
				<h2>
					{locale === "sv" ? "Teknisk lösning" : "Technical implementation"}
				</h2>

				<ul>
					{project.technicalHighlights.map((highlight) => (
						<li key={highlight}>{highlight}</li>
					))}
				</ul>
			</section>

			{project.challenges.map((challenge) => (
				<section key={challenge.title} className={styles.section}>
					<h2>{challenge.title}</h2>
					<p>{challenge.description}</p>

					<h3>{locale === "sv" ? "Så löste jag det" : "Solution"}</h3>
					<p>{challenge.solution}</p>
				</section>
			))}

			<section className={styles.section}>
				<h2>{locale === "sv" ? "Resultat" : "Result"}</h2>
				<p>{project.result}</p>
			</section>

			<section className={styles.section}>
				<h2>{locale === "sv" ? "Lärdomar" : "What I learned"}</h2>

				<ul>
					{project.learnings.map((learning) => (
						<li key={learning}>{learning}</li>
					))}
				</ul>
			</section>

			<section className={styles.section}>
				<h2>{locale === "sv" ? "Teknik" : "Technologies"}</h2>

				<ul className={styles.technologies}>
					{project.technologies.map((technology) => (
						<li key={technology}>{technology}</li>
					))}
				</ul>
			</section>
		</article>
	);
}
