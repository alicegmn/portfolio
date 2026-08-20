"use client";

import { content, isLocale } from "@/content/content";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./not-found.module.css";

export default function NotFound() {
	const params = useParams<{ locale: string }>();

	const locale = isLocale(params.locale) ? params.locale : "en";
	const notFoundContent = content[locale].notFound;

	return (
		<section className={styles.page}>
			<p className={styles.code}>404</p>
			<h1>{notFoundContent.headline}</h1>
			<p>{notFoundContent.message}</p>
			<Link href={`/${locale}`}>{notFoundContent.linkText}</Link>
		</section>
	);
}
