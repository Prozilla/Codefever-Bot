module.exports = {
	name: "pong",
	description: "Pong Ping",
	cooldown: 3,
	execute(message, args) {
		message.channel.send("ping");
	},
};