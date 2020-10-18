module.exports = {
	name: "ema",
	description: "Pet the Ema!",
	aliases: ["emmanouil", "pettheema"],
	usage: "!ema",
	execute(message, args) {
		message.channel.send({ files: ["./files/Ema.gif"] });
	},
};