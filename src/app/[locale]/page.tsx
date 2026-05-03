import { Hero } from "@/components/Hero/Hero";
import { content, getLocale } from "@/content";

type PageProps = {
	params: Promise<{
		locale: string;
	}>;
};

export default async function Page({ params }: PageProps) {
	const { locale } = await params;
	const currentLocale = getLocale(locale);

	return (
		<Hero
			headline={content[currentLocale].home.headline}
			description={content[currentLocale].home.description}
		/>
	);
}
