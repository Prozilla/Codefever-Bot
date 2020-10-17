module.exports = {
	name: "boop",
	description: "boop beep",
	usage: "!boop",
	execute(message, args) {
		message.channel.send("beep");
	},
};