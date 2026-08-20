import styles from "./Hero.module.css";

type HeroProps = {
	eyebrow: string;
	headline: string;
	description: string;
};

export function Hero({ eyebrow, headline, description }: HeroProps) {
	return (
		<div className={styles.hero}>
			<p className={styles.eyebrow}>{eyebrow}</p>
			<h1 className={styles.headline}>{headline}</h1>
			<p className={styles.description}>{description}</p>
		</div>
	);
}
