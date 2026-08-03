import { content, type Locale } from "@/content/content";
import Link from "next/link";
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
		{
			label: "Discord",
			detail: isSwedish ? "Skriv till mig på Discord" : "Message me on Discord",
			href: content.shared.discord,
		},
	] as const;

	return (
		<section className={styles.page}>
			<div className={styles.intro}>
				<p className={styles.eyebrow}>
					/ {isSwedish ? "kontakt" : "contact"}
				</p>
				<h1>{contact.heading}</h1>
				<p className={styles.description}>
					{isSwedish
						? "Jag hör gärna om intressanta idéer, samarbeten och möjligheter."
						: "I'm always happy to hear about interesting ideas, collaborations, and opportunities."}
				</p>
			</div>

			<nav
				className={styles.links}
				aria-label={isSwedish ? "Kontaktlänkar" : "Contact links"}
			>
				{links.map((link, index) => (
					<Link
						key={link.label}
						href={link.href}
						className={styles.link}
						target={link.href.startsWith("mailto:") ? undefined : "_blank"}
						rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
					>
						<span className={styles.number}>0{index + 1}</span>
						<span className={styles.linkContent}>
							<strong>{link.label}</strong>
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
