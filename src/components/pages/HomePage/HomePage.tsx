import { content, type Locale } from "@/content/content";
import { routes } from "@/content/content";
import {
	experience as experienceContent,
	selectedExperienceCompanies,
} from "@/content/experience";
import { Hero } from "@/components/Hero/Hero";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { projects, selectedProjectSlugs } from "@/content/projects";
import Link from "next/link";
import {
	CodeIcon,
	EnvelopeClosedIcon,
	IdCardIcon,
	PersonIcon,
	StarFilledIcon,
} from "@radix-ui/react-icons";
import styles from "./HomePage.module.css";

type HomePageProps = Readonly<{
	currentLocale: Locale;
}>;
export function HomePage({ currentLocale }: HomePageProps) {
	const pageContent = content[currentLocale];
	const home = pageContent.home;
	const sections = home.sections;
	const about = pageContent.about;
	const selectedExperiences = selectedExperienceCompanies.flatMap((company) =>
		experienceContent[currentLocale].experience.items.filter(
			(item) => item.company === company,
		),
	);
	return (
		<section className={styles.page}>
			<Hero
				eyebrow={currentLocale === "sv" ? "/ hem" : "/ home"}
				headline={home.headline}
				description={home.description}
			/>

			<section className={styles.section} aria-labelledby="featured-projects">
				<header className={styles.sectionHeader}>
					<div>
						<p className={styles.eyebrow}>
							<StarFilledIcon className={styles.sectionIcon} aria-hidden="true" />
						</p>
						<h2 id="featured-projects">{sections.selectedProjects.heading}</h2>
						<p>{sections.selectedProjects.intro}</p>
					</div>
					<Link className={styles.sectionLink} href={routes[currentLocale].projects}>
						{sections.selectedProjects.linkText} →
					</Link>
				</header>
				<div className={styles.projectGrid}>
					{selectedProjectSlugs.map((slug) => (
						<ProjectCard
							key={slug}
							slug={slug}
							locale={currentLocale}
							project={projects[currentLocale][slug]}
							variant="grid"
						/>
					))}
				</div>
			</section>

			<section className={styles.section} aria-labelledby="skills">
				<header className={styles.sectionHeader}>
					<div>
						<p className={styles.eyebrow}>
							<CodeIcon className={styles.sectionIcon} aria-hidden="true" />
						</p>
						<h2 id="skills">{sections.skills.heading}</h2>
					</div>
				</header>
				<div className={styles.skillsGrid}>
					{sections.skills.items.map((item) => (
						<article key={item.title} className={styles.skillCard}>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</article>
					))}
				</div>
			</section>

			<section className={styles.section} aria-labelledby="about">
				<header className={styles.sectionHeader}>
					<div className={styles.sectionHeading}>
					<p className={styles.eyebrow}>
						<PersonIcon className={styles.sectionIcon} aria-hidden="true" />
					</p>
					<h2 id="about">{sections.about.heading}</h2>
					</div>
					<Link className={styles.sectionLink} href={routes[currentLocale].about}>
						{sections.about.linkText} →
					</Link>
				</header>
				<div className={styles.textBlock}>
					<h3>{about.title}</h3>
					<p>{about.intro}</p>
				</div>
			</section>

			<section className={styles.section} aria-labelledby="experience">
				<header className={styles.sectionHeader}>
					<div>
						<p className={styles.eyebrow}>
							<IdCardIcon className={styles.sectionIcon} aria-hidden="true" />
						</p>
						<h2 id="experience">{sections.experience.heading}</h2>
					</div>
					<Link className={styles.sectionLink} href={routes[currentLocale].experience}>
						{sections.experience.linkText} →
					</Link>
				</header>
				<div className={styles.experienceList}>
					{selectedExperiences.map((item) => (
						<article key={item.company} className={styles.experienceItem}>
							<div>
								<p className={styles.duration}>{item.duration}</p>
								<h3>{item.role}</h3>
							</div>
							<p>{item.company}</p>
						</article>
					))}
				</div>
			</section>

			<section className={styles.contact} aria-labelledby="contact">
				<p className={styles.eyebrow}>
					<EnvelopeClosedIcon className={styles.sectionIcon} aria-hidden="true" />
				</p>
				<h2 id="contact">{sections.contact.heading}</h2>
				<p>{sections.contact.text}</p>
				<Link className={styles.contactLink} href={routes[currentLocale].contact}>
					{sections.contact.linkText} ↗
				</Link>
			</section>
		</section>
	);
}
