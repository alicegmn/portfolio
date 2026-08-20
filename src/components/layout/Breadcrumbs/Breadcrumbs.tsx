import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

type BreadcrumbItem = Readonly<{
	label: string;
	href?: string;
}>;

type BreadcrumbsProps = Readonly<{
	items: readonly BreadcrumbItem[];
	ariaLabel: string;
}>;

export function Breadcrumbs({ items, ariaLabel }: BreadcrumbsProps) {
	return (
		<nav className={styles.breadcrumbs} aria-label={ariaLabel}>
			<ol>
				{items.map((item, index) => (
					<li key={`${item.label}-${index}`}>
						{item.href ? (
							<Link href={item.href}>{item.label}</Link>
						) : (
							<span aria-current="page">{item.label}</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
