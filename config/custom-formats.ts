export const Formats: FormatList = [
	{
		section: "Minecraft",
	},
	{
		name: "[Gen 9] Minecraft Random Battle",
		mod: 'minecraftrandom',
		team: 'random',
		ruleset: ['+Past', '-Berserk Gene', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', "Z-Move Clause"],
	},
	{
		name: "[Gen 9] Minecraft Random Double Battle",
		mod: 'minecraftrandom',
		team: 'random',
		ruleset: ['[Gen 9] Minecraft Random Battle'],
		gameType: 'doubles',
	},
	{
		name: "[Gen 9] Minecraft",
		desc: "Standard singles format with the Minecraft mobs.",
		mod: 'gen9',
		ruleset: ['Standard AG', '-Berserk Gene', '+Past', '-All Pokemon', '+Craft', '+Craft NFE', "Z-Move Clause"],
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
		ruleset: ['[Gen 9] Minecraft'],
		gameType: 'doubles',
	},
];
