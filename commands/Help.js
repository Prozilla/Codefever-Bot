const Discord = require("discord.js");
const { prefix } = require("../config.json");
module.exports = {
	name: "help",
	description: "List all commands or give information (name, description, aliases,...) of a specific command",
	aliases: ["commands", "list"],
	usage: "!help [command]",
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			// inside a command, event listener, etc.
			const Embed = new Discord.MessageEmbed()
				.setColor("NAVY")
				.setTitle("!Help - A list of all commands")
				.attachFiles(["./Icon.png"])
				.setAuthor("Prozilla", "attachment://Icon.png")
				.setDescription(`This is a list of commands I can execute, \nsend \`${prefix}help [command name]\` to get info on a specific command`)
				.setThumbnail("attachment://Icon.png")
				.addField("\u200b", "\u200b")
				.setTimestamp()
				.setFooter("Contact @ProzillaGaming#0629 if any problems occur when executing one of my commands.", "attachment://Icon.png");

			commands.forEach(element => Embed.addField(`name: ${prefix}` + element.name, "Description: " + element.description));
			Embed.addField("\u200b", "\u200b");

			return message.author.send(Embed)
				.then(() => {
					// Inform user that they have received a DM containing the list of commands
					if (message.channel.type === "dm") return;
					message.reply("I've sent you a DM with all my commands!");
				})
				.catch(error => {
					// User has most likely disabled DMs or blocked this bot
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply("it seems like I can't DM you! Do you have DMs disabled?");
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply("that's not a valid command!");
		}

		// Write info about a specific command
		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(", ")}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	},
};