module.exports = {
	name: "hacker",
	description: "Hacking time!",
	aliases: ["hacking", "hacker-man", "hackerman", "hack"],
	usage: "!hacker",
	execute(message, args) {
		message.channel.send({ files: ["./files/Hacker.gif"] });
	},
};