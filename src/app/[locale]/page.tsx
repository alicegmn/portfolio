import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, isLocale, routes } from "@/content/content";
import { HomePage } from "@/components/pages/HomePage/HomePage";

type PageProps = {
	params: Promise<{
		locale: string;
	}>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { locale } = await params;

	if (!isLocale(locale)) {
		return {};
	}

	const meta = content[locale].meta;

	return {
		title: meta.title,
		description: meta.description,
		openGraph: {
			title: meta.title,
			description: meta.description,
			url: routes[locale].home,
			siteName: "Alice Eriksson",
			locale: meta.openGraphLocale,
			type: "website",
			images: [
				{
					url: "/og-image.svg",
					width: 1200,
					height: 630,
					alt: meta.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: meta.title,
			description: meta.description,
			images: ["/og-image.svg"],
		},
		alternates: {
			canonical: routes[locale].home,
			languages: {
				sv: routes.sv.home,
				en: routes.en.home,
			},
		},
	};
}

export default async function Page({ params }: PageProps) {
	const { locale } = await params;

	if (!isLocale(locale)) {
		notFound();
	}

	return <HomePage currentLocale={locale} />;
}
