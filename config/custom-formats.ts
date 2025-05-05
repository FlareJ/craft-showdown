export const Formats: FormatList = [
	{
		section: "Minecraft",
	},
	{
		name: "[Gen 9] Minecraft",
		desc: "Standard singles format with the Minecraft mobs.",
		mod: 'minecraft',
		ruleset: ['[Gen 9] Standard AG', '+Craft', '+Craft NFE'],
		banlist: ['AG', 'OU', 'UU', 'NU', 'RU', 'PU', 'LC', 'NFE'],
		unbanlist: ['Arceus'],
	},
	{
		name: "[Gen 9] Minecraft Ubers",
		desc: "Singles format with the strongest Minecraft mobs.",
		mod: 'minecraft',
		ruleset: ['[Gen 9] Minecraft', '+Craft Uber'],
	},
	{
		name: "[Gen 9] Minecraft NFE",
		desc: "Singles format with only non-fully-evolved Minecraft mobs.",
		mod: 'minecraft',
		ruleset: ['[Gen 9] Minecraft', '-Craft'],
		unbanlist: ['Arceus'],
	},
	{
		name: "[Gen 9] Minecraft Doubles",
		desc: "Doubles with the Minecraft mobs.",
		mod: 'minecraft',
		ruleset: ['[Gen 9] Standard AG', '+Craft', '+Craft NFE'],
		gameType: 'doubles',
		banlist: ['AG', 'OU', 'UU', 'NU', 'RU', 'PU', 'LC', 'NFE'],
		unbanlist: ['Arceus'],
	},
];
