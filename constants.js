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
	"A fullstack web developer",
	"Have attension to details",
	"I build things for the web and mobile",
	"I have obsession with solving problems",
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
		"java",
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
		image: "/projects/trackMoney.jpeg",
		blurImage: "/projects/tesla.webp",
		description:
			"Developed an mobile app to keep track of your money and expenses and can forecast your spendings for upcoming 7 days.",
		gradient: ["#FFCF1B", "#FF881B"],
		url: "https://github.com/showrov29/expenseTrackMobile",
		tech: ["react", "tailwindcss", "redux", "mongodb", "sqlite"],
	},
	{
		name: "Image Gallery",
		image: "/projects/ImageGallery.png",
		blurImage: "/projects/blur/airbnb-blur.webp",
		description: "A simple image gallery app using React js 📸",
		gradient: ["#F14658", "#DC2537"],
		url: "https://github.com/showrov29/ImageGallery",
		tech: ["react", "tailwindcss"],
	},
	{
		name: "Virtual You",
		image: "/projects/VirtualYou.png",
		blurImage: "/projects/blur/VirtualYou.png",
		description: "A virtual chat assistent can talk with you 🤖",
		gradient: ["#FFA62E", "#EA4D2C"],
		url: "https://github.com/showrov29/virtual-you",
		tech: ["azure", "nextjs", "tailwindcss", "openAi"],
	},
	{
		name: "Coin Bazar",
		image: "/projects/coinBazar.png",
		blurImage: "/projects/blur/tesla-blur.webp",
		description:
			"An E-commerce website for buying and selling antique coins 💰",
		gradient: ["#142D46", "#2E4964"],
		url: "https://github.com/showrov29/Coin-Bazar-Frontend",
		tech: ["react", "nodejs", "mongodb", "express", "stripe"],
	},
	{
		name: "Noticify",
		image: "/projects/Noticify.jpeg",
		blurImage: "/projects/blur/Noticify.jpeg",
		description:
			"A telegram bot that can send you notification from my university website and can chat with you like chatGPT 🤖",
		gradient: ["#FFCF1B", "#FF881B"],
		url: "https://github.com/showrov29/NoticeBot",
		tech: ["nodejs", "mongodb", "express", "telegram", "openAi"],
	},
	{
		name: "Exam Prep",
		image: "/projects/ExamPrep.jpeg",
		blurImage: "/projects/blur/tesla-blur.webp",
		description:
			"A cross platform mobile app  to take exam and prepare for exam 📱",
		gradient: ["#F14658", "#DC2537"],
		url: "https://github.com/showrov29/ReactNativeAssignment",
		tech: ["react", "sqlite", "tailwindcss"],
	},
	{
		name: "Text Charm",
		image: "/projects/TextCharm.jpeg",
		blurImage: "/projects/blur/tesla-blur.webp",
		description:
			"A telegram bot can read doc file and send you the text from the file and perform operation like chatGpt from the file, generate image, and dowload music from youtube 🤖",
		gradient: ["#FFA62E", "#EA4D2C"],
		url: "https://github.com/showrov29/Telegram_bot",
		tech: ["nodejs", "mongodb", "express", "telegram", "openAi"],
	},
	// {
	// 	name: "Expense Track Web",
	// 	image: "/projects/tesla.webp",
	// 	blurImage: "/projects/blur/tesla-blur.webp",
	// 	description:
	// 		"A web app to keep track of your money and expenses and forcast for upcomming 7 days 💰",
	// 	gradient: ["#142D46", "#2E4964"],
	// 	url: "https://github.com/showrov29/Telegram_bot",
	// 	tech: ["nest js", "mongodb", "nextjs", "tailwindcss"],
	// },
];

export const WORK = [
	{
		id: 1,
		company: "Techdojo Ltd",
		title: "Jr Software Engineer",
		location: "Uttara, Dhaka, Bangladesh",
		range: "July, 2023 - Current",
		responsibilities: [
			"Developed Motocarma, a lifestyle driven car buying with car choice basec on buyer self-image using AI/Machine learning on seller inventory and a broad understanding of cars integrated into any online marketing site to reveal customer goals for purchase satisfaction",
			"Developed Virtual-You, a virtual voice avatar with 3d face  that can talk with you and let you practice dificult conversations befeore you have them in real life",
			"Developed WhatsApp bot for a coaching center to condact online exam and send notification to the students",
			"Developed cross platform mobile application using React Native for maintaing daily or of a horsefarm",
			"Developed a web application for exam preparation for lawyers",
			"Research and find solutions to various problems that are not in the markert",
		],
		url: "https://www.tech-dojo.org",
		// video: "/work/dukaan.mp4",
	},
	{
		id: 2,
		company: "AMIR Lab",
		title: "Web Developer (Part-time)",
		location: "Dhaka, Bangladesh",
		range: "November, 2023 - Current",
		responsibilities: [
			"Develop Frontend of the organiazation and maintain and update the website",
			"Lead a small team of freshers devloper and intens",
			"Write documentation for the projects",
		],
		url: "https://www.amirl.org",
		// video: "/work/aviate.mp4",
	},
];

export const GTAG = "G-5HCTL2TJ5W";
