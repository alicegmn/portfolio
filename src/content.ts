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

		nav: [
			{ label: "/projekt", href: routes.sv.projects },
			{ label: "/om", href: routes.sv.about },
			{ label: "/cv", href: routes.sv.cv },
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

		nav: [
			{ label: "/projects", href: routes.en.projects },
			{ label: "/about", href: routes.en.about },
			{ label: "/resume", href: routes.en.cv },
			{ label: "/contact", href: routes.en.contact },
		],
	},
} as const;

export function getLocale(locale: string): Locale {
	return locale === "en" ? "en" : "sv";
}
