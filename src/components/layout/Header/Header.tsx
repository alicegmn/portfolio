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
			<Link href={homeHref} className={styles.name}>
				{name}
			</Link>

			<div className={styles.navigation}>
				<MainNav items={content[currentLocale].nav} />
			</div>

			<div className={styles.language}>
				<LanguageSwitcher currentLocale={currentLocale} />
			</div>
		</header>
	);
}
