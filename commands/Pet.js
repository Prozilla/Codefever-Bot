module.exports = {
	name: "pet",
	description: "Pet the dino!",
	aliases: ["petthedino", "petdino"],
	usage: "!pet",
	execute(message, args) {
		message.channel.send({ files: ["./files/PetTheDino.gif"] });
	},
};