import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p className={styles.copyright}>alicegmn {new Date().getFullYear()}</p>

				<div className={styles.socialLinks}>
					<Link
						href="https://github.com/alicegmn"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialLink}
						aria-label="GitHub"
					>
						<Github size={24} />
					</Link>

					<Link
						href="https://www.linkedin.com/in/alice-eriksson-malmo/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.socialLink}
						aria-label="LinkedIn"
					>
						<Linkedin size={24} />
					</Link>

					<Link
						href="mailto:alice.eriksson.561@gmail.com"
						className={styles.socialLink}
						aria-label="Email"
					>
						<Mail size={24} />
					</Link>
				</div>
			</div>
		</footer>
	);
}
