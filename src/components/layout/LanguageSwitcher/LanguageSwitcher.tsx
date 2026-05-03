import Link from "next/link";
import { routes, type Locale } from "@/content";
import styles from "./LanguageSwitcher.module.css";

type LanguageSwitcherProps = {
	currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
	return (
		<nav className={styles.languageSwitcher} aria-label="Language">
			<Link
				href={routes.sv.home}
				className={currentLocale === "sv" ? styles.active : undefined}
				aria-current={currentLocale === "sv" ? "page" : undefined}
			>
				sv
			</Link>

			<span>/</span>

			<Link
				href={routes.en.home}
				className={currentLocale === "en" ? styles.active : undefined}
				aria-current={currentLocale === "en" ? "page" : undefined}
			>
				en
			</Link>
		</nav>
	);
}
