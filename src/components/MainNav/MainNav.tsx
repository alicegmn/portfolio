import Link from "next/link";
import styles from "./MainNav.module.css";

type NavItem = {
	readonly label: string;
	readonly href: string;
};

type MainNavProps = Readonly<{
	items: readonly NavItem[];
}>;

export function MainNav({ items }: MainNavProps) {
	return (
		<nav className={styles.mainNav} aria-label="Main navigation">
			{items.map((item) => (
				<Link key={item.href} href={item.href}>
					{item.label}
				</Link>
			))}
		</nav>
	);
}
