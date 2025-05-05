export const Formats: FormatList = [
	{
		section: "Minecraft",
	},
	{
		name: "[Gen 9] Minecraft Random Battle",
		mod: 'minecraft',
		team: 'gen9',
		ruleset: ['Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Minecraft",
		desc: "Standard singles format with the Minecraft mobs.",
		mod: 'gen9',
		ruleset: ['Standard AG', '-All Pokemon', '+Craft', '+Craft NFE'],
	},
	{
		name: "[Gen 9] Minecraft Ubers",
		desc: "Singles format with the strongest Minecraft mobs.",
		mod: 'gen9',
		ruleset: ['[Gen 9] Minecraft', '+Craft Uber'],
	},
	{
		name: "[Gen 9] Minecraft NFE",
		desc: "Singles format with only non-fully-evolved Minecraft mobs.",
		mod: 'gen9',
		ruleset: ['[Gen 9] Minecraft', '-Craft'],
	},
	{
		name: "[Gen 9] Minecraft Doubles",
		desc: "Doubles with the Minecraft mobs.",
		mod: 'gen9',
		ruleset: ['Standard AG', '-All Pokemon', '+Craft', '+Craft NFE'],
		gameType: 'doubles',
	},
];
