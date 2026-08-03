"use client";

import { content, isLocale } from "@/content/content";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NotFound() {
	const params = useParams<{ locale: string }>();

	const locale = isLocale(params.locale) ? params.locale : "en";
	const notFoundContent = content[locale].notFound;

	return (
		<section>
			<p style={{ fontFamily: "var(--font-rock-3d)" }}>404</p>
			<h1>{notFoundContent.headline}</h1>
			<p>{notFoundContent.message}</p>
			<Link href={`/${locale}`}>{notFoundContent.linkText}</Link>
		</section>
	);
}
