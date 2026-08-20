import type { ReactNode } from "react";
import styles from "./IntroSection.module.css";

type IntroSectionProps = Readonly<{
	eyebrow: string;
	title: string;
	description?: ReactNode;
}>;

export function IntroSection({
	eyebrow,
	title,
	description,
}: IntroSectionProps) {
	return (
		<header className={styles.intro}>
			<p className={styles.eyebrow}>{eyebrow}</p>
			<h1 className={styles.title}>{title}</h1>
			{description ? (
				<p className={styles.description}>{description}</p>
			) : null}
		</header>
	);
}
