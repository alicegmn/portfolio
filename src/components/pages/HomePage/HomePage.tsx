import { content, type Locale } from "@/content/content";
import { Hero } from "@/components/Hero/Hero";

type HomePageProps = Readonly<{
	currentLocale: Locale;
}>;
export function HomePage({ currentLocale }: HomePageProps) {
	return (
		<Hero
			headline={content[currentLocale].home.headline}
			description={content[currentLocale].home.description}
		/>
	);
}
