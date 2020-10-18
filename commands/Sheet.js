module.exports = {
	name: "sheet",
	description: "kali linux commands cheat-sheet",
	aliases: ["cheatsheet", "cheat-sheet"],
	usage: "!sheet",
	execute(message, args) {
		message.channel.send({ files: ["./CheatSheet.png"] });
	},
};