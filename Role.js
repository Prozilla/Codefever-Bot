module.exports = {
	name: "role",
	description: "Give a specific user a role",
	guildOnly: true,
	args: true,
	usage: "<user> <role>",
	perms: true,
	execute(message, args) {
		if (args[0] === "foo") {
			return message.channel.send("bar");
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};