import Link from "next/link";
import { type Locale } from "@/content/content";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher/LanguageSwitcher";
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

			<LanguageSwitcher currentLocale={currentLocale} />
		</header>
	);
}
