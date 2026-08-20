import { content, type Locale } from "@/content/content";
import Link from "next/link";
import { IntroSection } from "@/components/IntroSection/IntroSection";
import styles from "./ContactPage.module.css";

type ContactPageProps = Readonly<{
	locale: Locale;
}>;

export function ContactPage({ locale }: ContactPageProps) {
	const contact = content[locale].contact;
	const isSwedish = locale === "sv";
	const links = [
		{
			label: "Email",
			detail: content.shared.email,
			href: `mailto:${content.shared.email}`,
		},
		{
			label: "GitHub",
			detail: "github.com/alicegmn",
			href: content.shared.github,
		},
		{
			label: "LinkedIn",
			detail: "linkedin.com/in/alice-eriksson-malmo",
			href: content.shared.linkedin,
		},
	] as const;

	return (
		<section className={styles.page}>
			<IntroSection
				eyebrow={`/ ${isSwedish ? "kontakt" : "contact"}`}
				title={contact.heading}
				description={contact.description}
			/>

			<nav
				className={styles.links}
				aria-label={isSwedish ? "Kontaktlänkar" : "Contact links"}
			>
				{links.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						className={styles.link}
						target={link.href.startsWith("mailto:") ? undefined : "_blank"}
						rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
					>
						<span className={styles.linkContent}>
							<strong>/{link.label.toLowerCase()}</strong>
							<span>{link.detail}</span>
						</span>
						<span className={styles.arrow} aria-hidden="true">
							↗
						</span>
					</Link>
				))}
			</nav>
		</section>
	);
}
