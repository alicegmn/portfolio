import Link from "next/link";
import type { Locale } from "@/content/content";
import styles from "./Footer.module.css";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

type FooterProps = Readonly<{
	locale: Locale;
}>;

export function Footer({ locale }: FooterProps) {
	const labels =
		locale === "sv"
			? {
					github: "Se mina projekt på GitHub",
					linkedin: "Kontakta mig på LinkedIn",
					email: "Skicka e-post",
				}
			: {
					github: "See my GitHub projects",
					linkedin: "Connect on LinkedIn",
					email: "Email me",
				};

	return (
		<footer className={styles.footer}>
			<p className={styles.copyright}>
				alicegmn &copy; {new Date().getFullYear()}
			</p>
			<div className={styles.socialLinks}>
				<Link
					href="https://github.com/alicegmn"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.socialLink}
					aria-label={labels.github}
				>
					<GitHubLogoIcon />
				</Link>

				<Link
					href="https://www.linkedin.com/in/alice-eriksson-malmo/"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.socialLink}
					aria-label={labels.linkedin}
				>
					<LinkedInLogoIcon />
				</Link>

				<Link
					href="mailto:alice.eriksson.561@gmail.com"
					className={styles.socialLink}
					aria-label={labels.email}
				>
					<EnvelopeClosedIcon />
				</Link>
			</div>
		</footer>
	);
}
