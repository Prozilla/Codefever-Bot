module.exports = {
	name: "beep",
	description: "beep boop",
	execute(message, args) {
		message.channel.send("boop");
	},
};