const fs = require("fs");
const Discord = require("discord.js");

const { prefix, owner } = require("./config.json");
const { token } = require("./token.json");
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const cooldowns = new Discord.Collection();

// Add commands to client.commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once("ready", () => {
	console.log("-- BOT ACTIVATED --");
});

client.on("message", message => {

	// Check command and place where command was sent
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (!message.channel.type === "dm")
	{
		if (message.channel.name != "prozillas-bot") return;
	}

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	// Display commands in the console
	console.log(`${message.author.avatar, message.author.username}: ` + message.content);

	// Check if it's an existing command
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	// Check if the command is only for guilds and if the message was sent trough DMs
	if (command.guildOnly && message.channel.type === "dm") {
		return message.reply("I can't execute that command inside DMs!");
	}

	// Check if user has permissions to execute this command
	/*
	if (command.perms && !message.author.hasPermission(command.perms)) {
		return message.reply("You don't have permission to execute this command.");
	}
	*/

	// Check if command needs arguments and if so and no arguments are given tell user
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	// Cooldown
	/*
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	*/

	// Executing command and catching errors
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply("there was an error trying to execute that command!");
	}

});

client.login(token);