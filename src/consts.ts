// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "4ozStudio";
export const SITE_DESCRIPTION =
	"Indie game studio from Christchurch, New Zealand. Unreal Engine games inspired by underground music, urban culture and alternative art.";

export const SITE_AUTHOR = "4ozStudio";
export const SITE_LOCALE = "en_NZ";
export const SITE_TWITTER = "@buymyfiddis";

export const SITE_KEYWORDS = [
	"4ozStudio",
	"4oz Studio",
	"indie game studio",
	"Christchurch",
	"New Zealand game developers",
	"Unreal Engine game development",
	"stylized games",
	"underground music games",
	"urban culture",
	"alternative art",
	"LENG",
	"rhythm FPS",
	"audio reactive games",
].join(", ");

/** Unannounced LENG soundtrack names. Hidden meta only, not for on-page copy. */
export const LENG_HIDDEN_KEYWORDS = [
	"Truth",
	"Headland",
	"Mt. Eden",
	"UKF dubstep",
	"Australian dubstep",
	"New Zealand dubstep",
].join(", ");

export const LENG_TITLE = "LENG | 4ozStudio";
export const LENG_DESCRIPTION =
	"LENG is a bass-weighted rhythm FPS from 4ozStudio. Audio reactive, with a soundtrack from the hypnotic depths of UKF dubstep. Coming to Steam, Steam Deck, Epic Games Store and PS5.";
export const LENG_SCHEMA = {
	'@type': 'VideoGame',
	name: 'LENG',
	description:
		'A bass-weighted rhythm FPS from 4ozStudio. Audio reactive, with a soundtrack from the hypnotic depths of UKF dubstep.',
	author: { '@type': 'Organization', name: '4ozStudio' },
	gamePlatform: ['Steam', 'Steam Deck', 'Epic Games Store', 'PlayStation 5'],
	genre: ['First-person shooter', 'Rhythm game'],
	gameEngine: 'Unreal Engine',
	applicationCategory: 'Game',
};

export const LENG_KEYWORDS = [
	"LENG",
	"rhythm FPS",
	"bass-weighted",
	"audio reactive game",
	"UKF dubstep",
	"Unreal Engine",
	"Steam",
	"Steam Deck",
	"Epic Games Store",
	"PS5",
	"New Zealand game developers",
	"4ozStudio",
	"Banks Peninsula Steppaz Cult",
	LENG_HIDDEN_KEYWORDS,
].join(", ");

export const PAGE_DESCRIPTIONS = {
	games:
		"Games from 4ozStudio, a Christchurch indie studio. Unreal Engine titles with a stylized look, from LENG to OptimizeMan: Gymcel.",
	links: "Find 4ozStudio on YouTube, Instagram, Discord, Steam and merch.",
	support: "Support 4ozStudio, an indie game studio from Christchurch, New Zealand.",
	rabclip: "Links for Rabclip / Charlie, founder of 4ozStudio.",
};

/** Set to false after LENG release to restore the default homepage. */
export const USE_LENG_LANDING = true;

/** Link to your monthly newsletter signup form (Buttondown, Mailchimp, etc.). */
export const NEWSLETTER_SIGNUP_URL = "";
