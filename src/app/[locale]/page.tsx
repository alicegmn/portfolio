import { getLocale } from "@/content";
import { HomePage } from "@/components/pages/HomePage/HomePage";

type PageProps = {
	params: Promise<{
		locale: string;
	}>;
};

export default async function Page({ params }: PageProps) {
	const { locale } = await params;
	const currentLocale = getLocale(locale);

	return <HomePage currentLocale={currentLocale} />;
}
