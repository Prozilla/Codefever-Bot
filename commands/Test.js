module.exports = {
	name: "test",
	description: "Test if the bot is working",
	aliases: ["bot", "work"],
	usage: "!test",
	execute(message, args) {
		message.channel.send("Bot is working.");
	},
};