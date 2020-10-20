module.exports = {
	name: "hackedbyaxano",
	description: "BOOM",
	aliases: ["hacked", "axano"],
	usage: "!hackedbyaxano",
	execute(message, args) {
		message.channel.send({ files: ["./files/Axano.gif"] });
	},
};