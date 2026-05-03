"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MainNav.module.css";

type NavItem = {
	readonly label: string;
	readonly href: string;
};

type MainNavProps = Readonly<{
	items: readonly NavItem[];
}>;

export function MainNav({ items }: MainNavProps) {
	const pathname = usePathname();

	return (
		<div className={styles.mainNavContainer}>
			<nav className={styles.mainNav} aria-label="Main navigation">
				{items.map((item) => {
					const isActive =
						pathname === item.href || pathname.startsWith(`${item.href}/`);

					return (
						<Link
							key={item.href}
							href={item.href}
							className={isActive ? styles.active : undefined}
							aria-current={isActive ? "page" : undefined}
						>
							{item.label}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
