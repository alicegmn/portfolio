import Image from "next/image";
import Link from "next/link";
import { content, type Locale } from "@/content/content";
import { IntroSection } from "@/components/IntroSection/IntroSection";
import styles from "./AboutPage.module.css";

type AboutPageProps = Readonly<{
	locale: Locale;
}>;

export function AboutPage({ locale }: AboutPageProps) {
	const about = content[locale].about;

	return (
		<section className={styles.about}>
			<div className={styles.content}>
				<IntroSection
					eyebrow={`/ ${locale === "sv" ? "om" : "about"}`}
					title={about.title}
					description={about.intro}
				/>

				<div className={styles.sections}>
					{about.sections.map((section) => (
						<section key={section.title} className={styles.section}>
							<h2>{section.title}</h2>
							<p>{section.text}</p>
							<Link href={section.href} className={styles.sectionLink}>
								{section.linkText}
							</Link>
						</section>
					))}
				</div>

				<figure className={styles.photo}>
					<Image
						src="/alice.jpg"
						alt={
							locale === "sv"
								? "Porträtt av Alice Eriksson"
								: "Portrait of Alice Eriksson"
						}
						width={2334}
						height={1556}
						className={styles.photoImage}
					/>
				</figure>
			</div>
		</section>
	);
}
