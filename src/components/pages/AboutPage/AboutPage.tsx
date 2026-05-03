import { content, type Locale } from "@/content";
import styles from "./AboutPage.module.css";

type AboutPageProps = Readonly<{
	locale: Locale;
}>;

export function AboutPage({ locale }: AboutPageProps) {
	const about = content[locale].about;

	return (
		<section className={styles.about}>
			<div className={styles.content}>
				<h1 className={styles.title}>{about.title}</h1>
				<p className={styles.intro}>{about.intro}</p>

				<div className={styles.sections}>
					{about.sections.map((section) => (
						<section key={section.title} className={styles.section}>
							<h2>{section.title}</h2>
							<p>{section.text}</p>
						</section>
					))}
				</div>
			</div>
		</section>
	);
}
