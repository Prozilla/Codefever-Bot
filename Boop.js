module.exports = {
	name: "boop",
	description: "boop beep",
	cooldown: 3,
	execute(message, args) {
		message.channel.send("beep");
	},
};