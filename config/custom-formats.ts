export const Formats: FormatList = [
	{
		section: "Minecraft",
	},
	{
		name: "[Gen 9] Minecraft OU",
		desc: "Standard singles format with the Minecraft mobs.",
		mod: 'minecraft',
		ruleset: ['Standard AG'],
		banlist: ['AG', 'OU', 'UU', 'NU', 'RU', 'PU', 'LC', 'NFE'],
		unbanlist: ['Craft', 'Craft NFE', 'Arceus'],
	},
	{
		name: "[Gen 9] Minecraft Ubers",
		desc: "Singles format with the strongest Minecraft mobs.",
		mod: 'minecraft',
		ruleset: ['Standard AG'],
		banlist: ['AG', 'OU', 'UU', 'NU', 'RU', 'PU', 'LC', 'NFE'],
		unbanlist: ['Craft Uber', 'Craft', 'Craft NFE', 'Arceus'],
	},
	{
		name: "[Gen 9] Minecraft NFE",
		desc: "Singles format with only non-fully-evolved Minecraft mobs.",
		mod: 'minecraft',
		ruleset: ['Standard AG'],
		banlist: ['AG', 'OU', 'UU', 'NU', 'RU', 'PU', 'LC', 'NFE'],
		unbanlist: ['Craft NFE', 'Arceus'],
	},
	{
		name: "[Gen 9] Minecraft Doubles",
		desc: "Doubles with the Minecraft mobs.",
		mod: 'minecraft',
		ruleset: ['Standard AG'],
		gameType: 'doubles',
		banlist: ['AG', 'OU', 'UU', 'NU', 'RU', 'PU', 'LC', 'NFE'],
		unbanlist: ['Craft', 'Craft NFE', 'Arceus'],
	},
];
