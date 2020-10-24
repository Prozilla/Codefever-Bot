module.exports = {
	name: "gif",
	description: "send a specific gif",
	aliases: ["gifs"],
	usage: "!gif",
	execute(message, args, gifs) {
		if (!args.length)
		{
			const data = [];

			gifs.forEach(element => {
				data.push(`**name: ${element.name}**`);
				data.push(`description: ${element.description}`);
				data.push(`aliases: ${element.aliases}`);
			});

			message.channel.send(data, { split: true });
		} else {
			const name = args[0].toLowerCase();

			gifs.forEach(element => {
				if (element.name == name || element.aliases.includes(name))
				{
					message.channel.send({ files: [element.path] });
				}
			});
		}
	},
};