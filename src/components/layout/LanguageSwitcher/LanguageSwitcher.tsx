"use client";

import Link from "next/link";
import { getLocalizedPath, type Locale } from "@/content/content";
import styles from "./LanguageSwitcher.module.css";
import { usePathname } from "next/navigation";
import cn from "clsx";

type LanguageSwitcherProps = {
	className?: string;
	currentLocale: Locale;
};

export function LanguageSwitcher({
	className,
	currentLocale,
}: LanguageSwitcherProps) {
	const pathname = usePathname();
	const svPath = getLocalizedPath(pathname, currentLocale, "sv");
	const enPath = getLocalizedPath(pathname, currentLocale, "en");

	return (
		<nav
			className={cn(styles.languageSwitcher, className)}
			aria-label={currentLocale === "sv" ? "Språk" : "Language"}
		>
			<Link
				href={svPath}
				className={currentLocale === "sv" ? styles.active : undefined}
				aria-current={currentLocale === "sv" ? "page" : undefined}
			>
				sv
			</Link>

			<span aria-hidden="true">/</span>

			<Link
				href={enPath}
				className={currentLocale === "en" ? styles.active : undefined}
				aria-current={currentLocale === "en" ? "page" : undefined}
			>
				en
			</Link>
		</nav>
	);
}
