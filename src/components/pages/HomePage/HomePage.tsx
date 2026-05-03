import { content, type Locale } from "@/content";
import { Hero } from "@/components/Hero/Hero";

type HomePageProps = Readonly<{
	currentLocale: Locale;
}>;
export function HomePage({ currentLocale }: HomePageProps) {
	const pageContent = content[currentLocale];

	return (
		<Hero
			headline={content[currentLocale].home.headline}
			description={content[currentLocale].home.description}
		/>
	);
}
