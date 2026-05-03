import styles from "./Hero.module.css";

type HeroProps = {
	headline: string;
	description: string;
};

export function Hero({ headline, description }: HeroProps) {
	return (
		<div className={styles.hero}>
			<h1 className={styles.headline}>{headline}</h1>
			<p className={styles.description}>{description}</p>
		</div>
	);
}
