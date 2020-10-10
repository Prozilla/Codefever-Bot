module.exports = {
	name: "ban",
	description: "Ban a member (fake)",
	guildOnly: true,
	perms: true,
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply("you need to tag a user in order to ban them!");
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You wanted to ban: ${taggedUser.username}`);
	},
};