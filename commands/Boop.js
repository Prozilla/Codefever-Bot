module.exports = {
	name: "boop",
	description: "boop beep",
	execute(message, args) {
		message.channel.send("beep");
	},
};