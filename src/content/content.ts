export const locales = ["sv", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(locale: string): locale is Locale {
	return locales.includes(locale as Locale);
}

export function getLocale(locale: string): Locale {
	return isLocale(locale) ? locale : "en";
}

export const routes = {
	sv: {
		home: "/sv",
		projects: "/sv/projekt",
		about: "/sv/om",
		resume: "/sv/cv",
		contact: "/sv/kontakt",
	},
	en: {
		home: "/en",
		projects: "/en/projects",
		about: "/en/about",
		resume: "/en/resume",
		contact: "/en/contact",
	},
} as const;

export type PageKey = "projects" | "about" | "resume" | "contact";

export const pageSlugs = {
	sv: {
		projekt: "projects",
		om: "about",
		cv: "resume",
		kontakt: "contact",
	},
	en: {
		projects: "projects",
		about: "about",
		resume: "resume",
		contact: "contact",
	},
} as const satisfies Record<Locale, Record<string, PageKey>>;

export function getPageKey(locale: Locale, slug: string): PageKey | undefined {
	const slugs = pageSlugs[locale] as Record<string, PageKey | undefined>;
	return slugs[slug];
}

export function getLocalizedPath(
	pathname: string,
	currentLocale: Locale,
	targetLocale: Locale,
): string {
	const segments = pathname.split("/").filter(Boolean);
	const pageSlug = segments[1];

	if (!pageSlug) {
		return routes[targetLocale].home;
	}

	const pageKey = getPageKey(currentLocale, pageSlug);

	if (!pageKey) {
		return routes[targetLocale].home;
	}

	const targetSlug = Object.entries(pageSlugs[targetLocale]).find(
		([, key]) => key === pageKey,
	)?.[0];

	if (!targetSlug) {
		return routes[targetLocale].home;
	}

	const trailingSegments = segments.slice(2);

	return `/${targetLocale}/${targetSlug}${trailingSegments.length ? `/${trailingSegments.join("/")}` : ""}`;
}

export const content = {
	shared: {
		name: "Alice Eriksson",
		email: "alice.eriksson.561@gmail.com",
		github: "https://github.com/alicegmn",
		linkedin: "https://www.linkedin.com/in/alice-eriksson-malmo/",
		discord: "https://discord.com/users/1200463637702250596",
	},

	sv: {
		meta: {
			title: "Alice Eriksson",
			description:
				"Fullstackutvecklare, kommunikatör och digital problemlösare.",
			openGraphLocale: "sv_SE",
		},

		home: {
			headline: "Fullstackutvecklare, kommunikatör och digital problemlösare.",
			description:
				"Just nu: Examensprojekt på Dynamic Dog i Malmö. Tillgängling för nya uppdrag: från och med juni 2026.",
		},

		projects: {
			title: "Projekt",
			intro:
				"Ett urval av projekt där jag har arbetat med frontend, backend, API:er och molnbaserad leverans.",
		},

		about: {
			title:
				"Jag bygger digitala lösningar med känsla för både kod, innehåll och användare.",
			intro:
				"Jag är en fullstackutvecklare med bakgrund inom kommunikation, marknadsföring och IT-support. Jag gillar att bygga lösningar där teknik, struktur och användarupplevelse hänger ihop.",
			sections: [
				{
					title: "Bakgrund",
					text: "Innan jag började utveckla arbetade jag flera år med digital kommunikation och webb. Det har gett mig en stark förståelse för innehåll, målgrupper och hur digitala produkter faktiskt används.",
				},
				{
					title: "Teknik",
					text: "Jag arbetar främst med JavaScript, TypeScript, React, Next.js, Node.js och moderna CMS-lösningar som Storyblok och Optimizely.",
				},
				{
					title: "Just nu",
					text: "Just nu gör jag mitt examensprojekt på Dynamic Dog i Malmö och tar examen som fullstackutvecklare våren 2026.",
				},
			],
		},

		contact: {
			heading: "Du når mig här!",
		},

		nav: [
			{ label: "/hem", href: routes.sv.home },
			{ label: "/projekt", href: routes.sv.projects },
			{ label: "/cv", href: routes.sv.resume },
			{ label: "/om", href: routes.sv.about },
			{ label: "/kontakt", href: routes.sv.contact },
		],

		notFound: {
			title: "404 – Sidan kunde inte hittas",
			description: "Sidan du letar efter finns inte.",
			headline: "Sidan kunde inte hittas",
			message: "Sidan du letar efter finns inte.",
			linkText: "Till startsidan",
		},
	},

	en: {
		meta: {
			title: "Alice Eriksson",
			description:
				"Full-stack developer, communicator, and digital problem solver.",
			openGraphLocale: "en_US",
		},

		home: {
			headline:
				"Full-stack developer, communications specialist, and digital problem solver.",
			description:
				"Currently: Degree project at Dynamic Dog in Malmö. Available for new assignments: starting June 2026.",
		},

		projects: {
			title: "Projects",
			intro:
				"A selection of projects where I have worked with frontend, backend, APIs and cloud delivery.",
		},

		about: {
			title:
				"I build digital solutions with an eye for code, content, and people.",
			intro:
				"I’m a full-stack developer with a background in communications, marketing, and IT support. I enjoy building solutions where technology, structure, and user experience work together.",
			sections: [
				{
					title: "Background",
					text: "Before moving into development, I worked for several years with digital communication and web. That experience helps me think beyond code and understand content, users, and real-world needs.",
				},
				{
					title: "Tech",
					text: "I mainly work with JavaScript, TypeScript, React, Next.js, Node.js, and modern CMS platforms like Storyblok and Optimizely.",
				},
				{
					title: "Right now",
					text: "I’m currently doing my degree project at Dynamic Dog in Malmö and graduating as a full-stack developer in spring 2026.",
				},
			],
		},

		contact: {
			heading: "Get in touch!",
		},

		nav: [
			{ label: "/home", href: routes.en.home },
			{ label: "/projects", href: routes.en.projects },
			{ label: "/resume", href: routes.en.resume },
			{ label: "/about", href: routes.en.about },
			{ label: "/contact", href: routes.en.contact },
		],

		notFound: {
			title: "404 – Page not found",
			description: "The page you are looking for does not exist.",
			headline: "Page not found",
			message: "The page you are looking for does not exist.",
			linkText: "Back to homepage",
		},
	},
} as const;
