import { notFound } from "next/navigation";
import { isLocale } from "@/content";
import { HomePage } from "@/components/pages/HomePage/HomePage";

type PageProps = {
	params: Promise<{
		locale: string;
	}>;
};

export default async function Page({ params }: PageProps) {
	const { locale } = await params;

	if (!isLocale(locale)) {
		notFound();
	}

	return <HomePage currentLocale={locale} />;
}
