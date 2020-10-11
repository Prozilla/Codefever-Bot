module.exports = {
	name: "pong",
	description: "Pong Ping",
	execute(message, args) {
		message.channel.send("ping");
	},
};