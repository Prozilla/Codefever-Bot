module.exports = {
	name: "mesa",
	description: "Mesa back!",
	aliases: ["mesaback", "mesa-back", "jarjar", "jar-jar"],
	usage: "!mesa",
	execute(message, args) {
		message.channel.send({ files: ["./files/MesaBack.gif"] });
	},
};