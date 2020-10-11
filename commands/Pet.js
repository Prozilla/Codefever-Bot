module.exports = {
	name: "pet",
    description: "Pet the dino",
    aliases: ["petthedino", "petdino"],
	execute(message, args) {
		message.channel.send("boop");
	},
};