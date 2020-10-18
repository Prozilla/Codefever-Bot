const Discord = require("discord.js");
const { prefix } = require("../config.json");
// const { docs } = require("../index.js");
module.exports = {
	name: "doc",
	description: "link to a documentation on a kali-linux command",
	aliases: ["docs", "documentation", "documentations"],
	usage: "!doc [command]",
	execute(message, args, docs) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			// inside a command, event listener, etc.
			const Embed = new Discord.MessageEmbed()
				.setColor("NAVY")
				.setTitle("!doc - A list of all documentations")
				.attachFiles(["./Icon.png"])
				.setAuthor("Codefever Bot", "attachment://Icon.png")
				.setDescription(`This is a list of documentations I have, \nsend \`${this.usage}\` to get info on a specific command`)
				.setThumbnail("attachment://Icon.png")
				.addField("\u200b", "\u200b")
				.setTimestamp()
				.setFooter("Contact @ProzillaGaming#0629 if any problems occur when executing one of my commands.", "attachment://Icon.png");

			docs.forEach(element => Embed.addField("**name:** " + element.name, "**link:** " + element.link));
			Embed.addField("\u200b", "\u200b");

			return message.channel.send(Embed);
		}

		const name = args[0].toLowerCase();
		let doc;
		docs.forEach(element => checkDocName(element));

		function checkDocName(element) {
			if (element.name == name)
			{
				doc = element;
			}
		}

		if (!doc) {
			return message.reply("that's not a valid documentation!");
		}

		// Write info about a specific documentation
		data.push(`**name:** ${doc.name}`);
		data.push(`**link:** ${doc.link}`);

		message.channel.send(data, { split: true });
	},
};