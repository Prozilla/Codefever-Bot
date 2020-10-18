module.exports = {
	name: "lessons",
	description: "shows all codefever lessons",
	aliases: ["lesson"],
	usage: "!lessons",
	execute(message, args, lessons) {
		const data = [];

		if (!args)
		{
			lessons.forEach(element => {
				data.push(`**name:** ${element.name}`);
				data.push(`**number:** ${element.number}`);
				data.push(`**date:** ${element.date}`);
			});
		}
		message.channel.send(data, { split: true });
	},
};