// require the discord.js module
const Discord = require("discord.js");

// create a new Discord client
const config = require("./config.json");
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
	console.log("-Prozilla's Bot: Active-");
});

// Receive and send messages
client.on("message", message => {

	if (!message.content.startsWith(config.prefix) || message.author.bot || message.channel.name != "prozillas-bot") return;

	const args = message.content.slice(config.prefix.length).trim().split(" ");
	const command = args.shift().toLowerCase();

	console.log(`${message.author.avatar, message.author.username}: ` + message.content);

	if (command === "ping") {
		message.channel.send("Pong");

	} else if (command === "pong") {
		message.channel.send("ping");

	} else if (command === "test") {
		message.channel.send("Bot is working.");

	} else if (command === "owner") {
		message.channel.send(`${config.owner} made this bot.`);

	} else if (command === "server") {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

	} else if (command === "args-info") {
		if (!args.length)
		{
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}

});

// login to Discord with your app"s token
client.login(config.token);