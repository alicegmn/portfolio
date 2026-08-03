import Link from "next/link";
import styles from "./Footer.module.css";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export function Footer() {
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
					aria-label="See my GitHub projects"
				>
					<GitHubLogoIcon />
				</Link>

				<Link
					href="https://www.linkedin.com/in/alice-eriksson-malmo/"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.socialLink}
					aria-label="Connect on LinkedIn"
				>
					<LinkedInLogoIcon />
				</Link>

				<Link
					href="mailto:alice.eriksson.561@gmail.com"
					className={styles.socialLink}
					aria-label="Email me"
				>
					<EnvelopeClosedIcon />
				</Link>
			</div>
		</footer>
	);
}
