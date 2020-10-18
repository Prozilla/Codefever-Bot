const fs = require("fs");
const Discord = require("discord.js");

const { prefix, owner } = require("./config.json");
const { token } = require("./token.json");
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

class doc {
	constructor(name, link) {
		this.name = name;
		this.link = link;
	}
}
const docs = [
	new doc("kali", "https://www.kali.org/docs/"),
	new doc("introduction", "https://www.kali.org/docs/introduction/"),
	new doc("installation", "https://www.kali.org/docs/installation/"),
	new doc("virtualization", "https://www.kali.org/docs/virtualization/"),
	new doc("usb", "https://www.kali.org/docs/usb/"),
	new doc("arm", "https://www.kali.org/docs/arm/"),
	new doc("containers", "https://www.kali.org/docs/containers/"),
	new doc("wsl", "https://www.kali.org/docs/wsl/"),
	new doc("nethunter", "https://www.kali.org/docs/nethunter/"),
	new doc("general-use", "https://www.kali.org/docs/general-use/"),
	new doc("tools", "https://www.kali.org/docs/tools/"),
	new doc("troubleshooting", "https://www.kali.org/docs/troubleshooting/"),
	new doc("development", "https://www.kali.org/docs/development/"),
	new doc("community", "https://www.kali.org/docs/community/"),
	new doc("policy", "https://www.kali.org/docs/policy/"),
];

class lesson {
	constructor(name, number, date) {
		this.name = name;
		this.number = number;
		this.date = date;
	}
}
const lessons = [
	new lesson("Basiskennis", 1, "unknown"),
	new lesson("Netwerken", 2, "unknown"),
	new lesson("Intro Linux & Labo opzetten", 3, "unknown"),
	new lesson("Passieve enumeratie", 4, "unknown"),
	new lesson("Actieve enumeratie en machine toevoegen aan labo", 5, "unknown"),
	new lesson("Webservers en het HTTP protocol", 5, "unknown"),
];

// Add commands to client.commands
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

// Logging that the bot has activated
client.once("ready", () => {
	console.log("-- BOT ACTIVATED --");
});

client.on("message", message => {

	// Check command and place where command was sent
	if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm" || message.channel.name != "codefever-bot") return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	// Display commands in the console
	console.log(`${message.author.avatar, message.author.username}: ` + message.content);

	// Check if it's an existing command
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	// Check if user has permissions to execute this command
	if (command.perms && !message.member.hasPermission(command.perms)) {
		return message.reply("You don't have permission to execute this command.");
	}

	// Check if command needs arguments and if so and no arguments are given tell user
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	// Executing command and catching errors
	try {
		if (command.name == "doc")
		{
			command.execute(message, args, docs);
		} else if (command.name == "lesson")
		{
			command.execute(message, args, lessons);
		} else {
			command.execute(message, args);
		}
	} catch (error) {
		console.error(error);
		message.reply("there was an error trying to execute that command!");
	}

});

// Handling errors
client.on("shardError", error => {
	console.error("A websocket connection encountered an error:", error);
});

process.on("unhandledRejection", error => {
	console.error("Unhandled promise rejection:", error);
});

client.login(token);