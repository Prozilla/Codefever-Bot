module.exports = {
	name: "react",
	description: "Reacts with an emoji",
	aliases: ["emoji"],
	execute(message, args) {
		if (args)
		{
			try {
				const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === `:${args}:`);
				message.react(reactionEmoji);
			} catch (error) {
				console.error(error);
				message.reply(`Couldn't find the emoji :${args}:`);
			}
		} else {
			message.react("😄");
		}
	},
};