export const locales = ["sv", "en"] as const;

export type Locale = (typeof locales)[number];

export const routes = {
	sv: {
		home: "/sv",
		projects: "/sv/projekt",
		about: "/sv/om",
		cv: "/sv/cv",
		contact: "/sv/kontakt",
	},
	en: {
		home: "/en",
		projects: "/en/projects",
		about: "/en/about",
		cv: "/en/resume",
		contact: "/en/contact",
	},
} as const;

export type PageKey = "projects" | "about" | "cv" | "contact";

export const pageSlugs = {
	sv: {
		projekt: "projects",
		om: "about",
		cv: "cv",
		kontakt: "contact",
	},
	en: {
		projects: "projects",
		about: "about",
		resume: "cv",
		contact: "contact",
	},
} as const satisfies Record<Locale, Record<string, PageKey>>;

export function getPageKey(locale: Locale, slug: string): PageKey | undefined {
	const slugs = pageSlugs[locale] as Record<string, PageKey | undefined>;
	return slugs[slug];
}

export const content = {
	shared: {
		name: "Alice Eriksson",
		email: "alice.eriksson.561@gmail.com",
		github: "https://github.com/alicegmn",
		linkedin: "https://www.linkedin.com/in/alice-eriksson-malmo/",
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

		projects: {},

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

		nav: [
			{ label: "/projekt", href: routes.sv.projects },
			{ label: "/cv", href: routes.sv.cv },
			{ label: "/om", href: routes.sv.about },
			{ label: "/kontakt", href: routes.sv.contact },
		],
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

		projects: {},

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

		nav: [
			{ label: "/projects", href: routes.en.projects },
			{ label: "/resume", href: routes.en.cv },
			{ label: "/about", href: routes.en.about },
			{ label: "/contact", href: routes.en.contact },
		],
	},
} as const;

export function getLocale(locale: string): Locale {
	return locale === "en" ? "en" : "sv";
}
