module.exports = {
	name: "beep",
	description: "beep boop",
	usage: "!beep",
	execute(message, args) {
		message.channel.send("boop");
	},
};