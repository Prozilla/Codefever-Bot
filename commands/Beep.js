module.exports = {
	name: "beep",
	description: "beep boop",
	cooldown: 3,
	execute(message, args) {
		message.channel.send("boop");
	},
};