export const METADATA = {
	author: "Showrov Islam",
	title: "Portfolio | Showrov Islam",
	description:
		"Showrov Islam is a Fullstack web Developer | React Native Developer from Bangladesh, interested in crafting beautiful and functional web applications and cross-platform mobile applications",
	siteUrl: "https://www.shubhporwal.me/",
	twitterHandle: "@showrov29",
	keywords: [
		"Showrov Islam",
		"Fullstack Developer",
		"Backend Developer",
		"Frontend Developer",
		"Web Developer",
		"React Native Developer",
		"Software Developer",
		"Software Engineer",
		"Portfolio",
		"Devfolio",
		"Folio",
	].join(", "),
	image:
		"https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
	language: "English",
};

export const MENULINKS = [
	{
		name: "Home",
		ref: "home",
	},
	{
		name: "Skills",
		ref: "skills",
	},
	{
		name: "Projects",
		ref: "projects",
	},
	{
		name: "Work",
		ref: "work",
	},
	{
		name: "Contact",
		ref: "contact",
	},
];

export const TYPED_STRINGS = [
	"A pragmatic fullstack and mobile developer with a passion solving problems",
	"I build things for the web and mobile",
	"I create aesthetic and modern apps that solve problems",
];

export const SOCIAL_LINKS = [
	{
		name: "mail",
		url: "mailto: showrovislam29@gmail.com",
		icon: "ic:outline-mark-email-unread",
	},
	{
		name: "linkedin",
		url: "https://www.linkedin.com/in/showrov-islam-92581a221/",
		icon: "skill-icons:linkedin",
	},
	{
		name: "github",
		url: "https://github.com/showrov29",
		icon: "uiw:github-o",
	},
	{
		name: "instagram",
		url: "https://www.instagram.com/atif_ahmed29/",
		icon: "skill-icons:instagram",
	},
	{
		name: "twitter",
		url: "https://twitter.com/Showrov29",
		icon: "skill-icons:twitter",
	},
];

export const SKILLS = {
	languagesAndTools: [
		"html",
		"css",
		"javascript",
		"typescript",
		"python",

		"c++",

		// "cpp",
		// "java",
		// "python",
		"nodejs",

		"firebase",
		// "moralis",
		// "stripe",
		"figma",
	],
	librariesAndFrameworks: [
		"react",
		"redux",
		"nextjs",
		"nest js",

		"openAi",
		"tailwindcss",
		"styledcomponents",
		"antdesign",
		"chakra-ui",
	],
	databases: ["mysql", "mongodb", "postgresql", "sqlite"],
	other: ["git", "postman"],
};

export const PROJECTS = [
	{
		name: "Track Money",
		image: "",
		blurImage: "",
		description:
			"Developed an mobile app to keep track of your money and expenses",
		gradient: ["#FFCF1B", "#FF881B"],
		url: "https://github.com/showrov29/expenseTrackMobile",
		tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
	},
	{
		name: "Image Gallery",
		image: "/projects/airbnb.webp",
		blurImage: "/projects/blur/airbnb-blur.webp",
		description: "A simple image gallery app using React js 📸",
		gradient: ["#F14658", "#DC2537"],
		url: "https://github.com/showrov29/ImageGallery",
		tech: ["react", "nextjs", "tailwindcss", "mapbox"],
	},
	{
		name: "Virtual You",
		image: "/projects/medium.webp",
		blurImage: "/projects/blur/medium-blur.webp",
		description: "A virtual chat assistent can talk with you 🤖",
		gradient: ["#FFA62E", "#EA4D2C"],
		url: "https://github.com/showrov29/virtual-you",
		tech: ["javascript", "azure", "nextjs", "tailwindcss", "openAi"],
	},
	{
		name: "Inshorts",
		image: "/projects/inshorts.webp",
		blurImage: "/projects/blur/airbnb-blur.webp",
		description:
			"Conversational Voice Controlled React News Application using Alan AI 🎙",
		gradient: ["#000066", "#6699FF"],
		url: "https://shubh73-inshorts.netlify.app/",
		tech: ["react", "chakra-ui", "alan"],
	},
	{
		name: "Coin Bazar",
		image: "/projects/tesla.webp",
		blurImage: "/projects/blur/tesla-blur.webp",
		description:
			"An E-commerce website for buying and selling antique coins 💰",
		gradient: ["#142D46", "#2E4964"],
		url: "https://github.com/showrov29/Coin-Bazar-Frontend",
		tech: ["react", "node", "daisy-ui", "mongodb", "express", "stripe"],
	},
	{
		name: "Noticify",
		image: "/projects/tesla.webp",
		blurImage: "/projects/blur/tesla-blur.webp",
		description:
			"A telegram bot that can send you notification from my university website and can chat with you like chatGPT 🤖",
		gradient: ["#142D46", "#2E4964"],
		url: "https://github.com/showrov29/NoticeBot",
		tech: ["react", "node", "daisy-ui", "mongodb", "express", "stripe"],
	},
	{
		name: "Exam Prep",
		image: "/projects/tesla.webp",
		blurImage: "/projects/blur/tesla-blur.webp",
		description:
			"A cross platform mobile app  to take exam and prepare for exam 📱",
		gradient: ["#142D46", "#2E4964"],
		url: "https://github.com/showrov29/ReactNativeAssignment",
		tech: ["react-native", "sqlite"],
	},
	{
		name: "Text Charm",
		image: "/projects/tesla.webp",
		blurImage: "/projects/blur/tesla-blur.webp",
		description:
			"A telegram bot can read doc file and send you the text from the file and perform operation like chatGpt from the file, generate image, and dowload music from youtube 🤖",
		gradient: ["#142D46", "#2E4964"],
		url: "https://github.com/showrov29/Telegram_bot",
		tech: ["node", "mongodb", "express", "telegram", "openAi"],
	},
	{
		name: "Expense Track Web",
		image: "/projects/tesla.webp",
		blurImage: "/projects/blur/tesla-blur.webp",
		description:
			"A web app to keep track of your money and expenses and forcast for upcomming 7 days 💰",
		gradient: ["#142D46", "#2E4964"],
		url: "https://github.com/showrov29/Telegram_bot",
		tech: ["node", "mongodb", "express", "telegram", "openAi"],
	},
];

export const WORK = [
	{
		id: 1,
		company: "Techdojo Ltd",
		title: "Frontend Developer",
		location: "Bangalore, Karnataka",
		range: "December - Current",
		responsibilities: [
			"Led creation of a captivating cross-platform e-commerce solution.",
			"Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
			"The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
		],
		url: "https://mydukaan.io/",
		video: "/work/dukaan.mp4",
	},
	{
		id: 2,
		company: "Aviate",
		title: "Frontend Developer Intern",
		location: "Goa",
		range: "May - October 2022",
		responsibilities: [
			"Built their flagship product Q-Rate, a voice-based applicant screening platform.",
			"Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
			"Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
		],
		url: "https://www.aviate.jobs/",
		video: "/work/aviate.mp4",
	},
	{
		id: 3,
		company: "Spacenos",
		title: "Web Developer Intern",
		location: "Bangalore, Karnataka",
		range: "September - December 2021",
		responsibilities: [
			"Led the Full Stack revamp on the Admin Portal.",
			"Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
			"Implemented CRUD features for all the services and providers.",
		],
		url: "https://spacenos.com/",
		video: "/work/spacenos.mp4",
	},
];

export const GTAG = "G-5HCTL2TJ5W";
