import { content, type Locale } from "@/content/content";
import styles from "./ExperiencePage.module.css";

type ExperiencePageProps = Readonly<{
	locale: Locale;
}>;

export function ExperiencePage({ locale }: ExperiencePageProps) {
	const experience = content[locale].experience;

	return (
		<section className={styles.page}>
			<header className={styles.header}>
				<p className={styles.eyebrow}>
					/ {locale === "sv" ? "cv" : "experience"}
				</p>
				<h1>{experience.heading}</h1>
			</header>

			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<h2>{experience.experience.heading}</h2>
					<span>01</span>
				</div>
				<div className={styles.experienceList}>
				{experience.experience.items.map((item) => (
					<article key={item.company} className={styles.experienceItem}>
						<div className={styles.itemMeta}>
							<p className={styles.duration}>{item.duration}</p>
							<p>{item.company}</p>
						</div>
						<div className={styles.itemContent}>
							<h3>{item.role}</h3>
							<p>{item.description}</p>
						</div>
					</article>
				))}
				</div>
			</section>

			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<h2>{experience.education.heading}</h2>
					<span>02</span>
				</div>
				<div className={styles.cardGrid}>
				{experience.education.items.map((item) => (
					<article key={item.institution} className={styles.card}>
						<p className={styles.duration}>{item.duration}</p>
						<h3>{item.degree}</h3>
						<p>{item.institution}</p>
					</article>
				))}
				</div>
			</section>

			<section className={styles.section}>
				<div className={styles.sectionHeader}>
					<h2>{experience.courses.heading}</h2>
					<span>03</span>
				</div>
				<div className={styles.cardGrid}>
				{experience.courses.items.map((item) => (
					<article key={item.title} className={styles.card}>
						<p className={styles.duration}>{item.duration}</p>
						<h3>{item.title}</h3>
						<p>{item.provider}</p>
					</article>
				))}
				</div>
			</section>
		</section>
	);
}
