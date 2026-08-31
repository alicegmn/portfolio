import Link from "next/link";
import { content, type Locale } from "@/content/content";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher/LanguageSwitcher";
import { MainNav } from "../MainNav/MainNav";
import styles from "./Header.module.css";

type HeaderProps = {
	name: string;
	currentLocale: Locale;
	homeHref: string;
};

export function Header({ name, currentLocale, homeHref }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<Link href={homeHref} className={styles.name}>
					{name}
				</Link>

				<div className={styles.menus}>
					<MainNav
						className={styles.navigation}
						items={content[currentLocale].nav}
					/>

					<span className={styles.separator} aria-hidden="true" />

					<LanguageSwitcher
						className={styles.language}
						currentLocale={currentLocale}
					/>
				</div>
			</div>
		</header>
	);
}
