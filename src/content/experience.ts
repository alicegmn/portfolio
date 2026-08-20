export const selectedExperienceCompanies = [
	"Dynamic Dog",
	"Mercedes-Benz",
	"Sverigehälsan",
] as const satisfies readonly string[] & { length: 1 | 2 | 3 };

export const experience = {
	sv: {
		heading: "CV",
		metaDescription:
			"Arbetslivserfarenhet, utbildning och teknisk kompetens inom utveckling, IT-support, kommunikation och digitala projekt.",
		experience: {
			heading: "Arbetslivserfarenhet",
			items: [
				{
					company: "Dynamic Dog",
					role: "Utvecklare (praktik & examensarbete)",
					duration: "nov 2025 – juni 2026",
					description:
						"Arbetade i kundprojekt med produktionskod, främst i TypeScript, React, Next.js och headless CMS-plattformar. Byggde och underhöll komponentbaserade lösningar, dynamiska innehållsflöden och integrationer med CMS- och API-data. Felsökte problem i applikationskod, konfiguration och innehåll med fokus på stabilitet, prestanda och långsiktig förvaltning. Bidrog till dokumentation, testning, kodgranskningar och nära samarbete med utvecklare och projektteam. Genomförde även ett självständigt examensarbete där jag migrerade en befintlig frontend från Next.js och styled-components till TanStack Start, Vite och CSS Modules.",
				},
				{
					company: "Mercedes-Benz",
					role: "Onsite IT-tekniker",
					duration: "maj 2025 – aug 2025",
					description:
						"Hanterade och följde upp parallella IT- och administrationsärenden med tydlig dokumentation och återkoppling. Administrerade användarkonton, abonnemang, beställningar, ändringar och avslut i samarbete med användare och andra supportfunktioner.",
				},
				{
					company: "Sverigehälsan",
					role: "Marknadskommunikatör",
					duration: "apr 2019 – juni 2024",
					description:
						"Samordnade information och aktiviteter mellan kollegor, lärare, studerande och externa leverantörer. Planerade, administrerade och följde upp löpande arbete inom webb, kommunikation och digitala kanaler. Ledde en webbplatsmigrering och ett CRM-byte samt stöttade kollegor i nya system, rutiner och arbetssätt.",
				},
				{
					company: "Evry (senare TietoEvry/Tieto)",
					role: "Service Desk Agent",
					duration: "aug 2018 – april 2019",
					description:
						"Var första kontaktpunkt för större företagskunder och hanterade ärenden från prioritering till lösning eller eskalering enligt process och SLA. Administrerade abonnemang, beställningar, ändringar och avslut samt säkerställde tydlig kommunikation och smidiga överlämningar mellan kund och tekniska team.",
				},
			],
		},
		education: {
			heading: "Utbildning",
			items: [
				{
					institution: "Chas Academy",
					degree: "Fullstackutvecklare JavaScript",
					duration: "2024 – 2026",
				},
				{
					institution: "Malmö universitet",
					degree: "Kandidatexamen i medie- och kommunikationsvetenskap",
					duration: "2015 – 2018",
				},
			],
		},
		courses: {
			heading: "Kurser & certifieringar",
			items: [
				{
					title: "Google Project Management: Professional Certificate",
					provider: "Coursera",
					duration: "pågående, augusti 2026",
				},
				{
					title: "Diplomerad utbildningsledare inom yrkeshögskolan",
					provider: "YhiS",
					duration: "2021 – 2022",
				},
				{
					title: "Inkluderande UX-design",
					provider: "Nackademin",
					duration: "2023",
				},
				{
					title: "Skriv bättre copy och content",
					provider: "Sveriges Kommunikatörer",
					duration: "2022",
				},
			],
		},
		technologies: {
			heading: "Teknologier",
			text: "Jag arbetar främst med JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, Storyblok, Tailwind CSS, GitHub Actions och Azure.",
		},
		waysOfWorking: {
			heading: "Arbetssätt & metoder",
			text: "Jag uppskattar agila arbetssätt där struktur, tydlig kommunikation och kontinuerlig återkoppling hjälper team att lösa problem och skapa värde för användare och verksamhet.",
		},
	},
	en: {
		heading: "Experience",
		metaDescription:
			"Work experience, education and technical skills across development, IT support, communication and digital projects.",
		experience: {
			heading: "Work Experience",
			items: [
				{
					company: "Dynamic Dog",
					role: "Developer Internship & degree project",
					duration: "Nov 2025 – June 2026",
					description:
						"Worked on client projects with production code, mainly using TypeScript, React, Next.js and headless CMS platforms. Built and maintained component-based solutions, dynamic content flows and integrations with CMS/API data. Troubleshot issues across application code, configuration and content, with focus on stability, performance and maintainability. Contributed to delivery quality through documentation, testing, code reviews and close collaboration with developers and project teams. Completed an independent final degree project where I migrated an existing frontend from Next.js and styled-components to TanStack Start, Vite and CSS Modules, with focus on performance, architecture and long-term maintainability.",
				},
				{
					company: "Mercedes-Benz",
					role: "Onsite IT Technician",
					duration: "May 2025 – Aug 2025",
					description:
						"Provided on-site technical support and structured troubleshooting of hardware, software, accounts, permissions and workplace applications. Managed incidents and service requests end-to-end, including prioritisation, resolution, escalation and follow-up. Documented cases clearly and communicated with users, stakeholders and other technical support functions. Worked in a business-critical environment where reliability, service quality and efficient issue resolution were essential.",
				},
				{
					company: "Sverigehälsan",
					role: "Marketing communications specialist",
					duration: "April 2019 – June 2024",
					description:
						"Managed and continuously improved the organisation’s website and digital channels. Coordinated digital projects, including a website migration and CRM system replacement. Worked with content, structure, SEO/SEM, analytics and improvements to digital workflows. Supported colleagues in new systems and ways of working through clear communication, documentation and training. Collaborated with internal stakeholders and external suppliers to improve usability, content structure and digital processes.",
				},
				{
					company: "Evry (later TietoEvry/Tieto)",
					role: "Service Desk Agent",
					duration: "Aug 2018 – April 2019",
					description:
						"Was the first point of contact for enterprise clients within infrastructure and industry. Received, prioritised, troubleshot, resolved or escalated incidents and service requests according to established processes and SLAs. Documented troubleshooting steps, solutions and handovers to support efficient collaboration between support teams. Communicated technical issues clearly to users and maintained ownership of cases throughout the support process.",
				},
			],
		},
		education: {
			heading: "Education",
			items: [
				{
					institution: "Chas Academy",
					degree: "Full-Stack Developer JavaScript",
					duration: "2024 – 2026",
				},
				{
					institution: "Malmö University",
					degree: "Media and Communication Studies (B.A.)",
					duration: "2015 – 2018",
				},
			],
		},
		courses: {
			heading: "Courses & Certifications",
			items: [
				{
					title: "Google Project Management: Professional Certificate",
					provider: "Coursera",
					duration: "in progress, august 2026",
				},
				{
					title: "Certified vocational education coordinator",
					provider: "YhiS",
					duration: "2021 – 2022",
				},
				{
					title: "Inclusive UX Design",
					provider: "Nackademin",
					duration: "2023",
				},
				{
					title: "Writing better copy and content",
					provider: "Sveriges Kommunikatörer",
					duration: "2022",
				},
			],
		},
		technologies: {
			heading: "Technologies",
			text: "I mainly work with JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, Storyblok, Tailwind CSS, GitHub Actions and Azure.",
		},
		waysOfWorking: {
			heading: "Ways of Working & Methods",
			text: "I value agile ways of working where structure, clear communication and continuous feedback help teams solve problems and create value for users and organisations.",
		},
	},
} as const;
