/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: "Horizontal Server List",
		author: "Gibbu#1211",
		version: "2.1.0",
		description: "Moves the server list from the left to the top of Discord.",
		source: "https://github.com/DiscordStyles/HorizontalServerList",
		invite: "ZHthyCw",
		website: "https://gibbu.me"
	},
	baseImport: 'https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css',
	base: {
		output: 'dist/dist'
	},
	addons: [
		['src/addons/_bottomhsl.scss', 'dist/bottomhsl.css'],
	]
}