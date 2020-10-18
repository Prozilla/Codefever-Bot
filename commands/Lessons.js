module.exports = {
	name: "lessons",
	description: "shows all codefever lessons",
	aliases: ["lesson"],
	usage: "!lessons",
	execute(message, args, lessons) {
		const data = [];

		lessons.forEach(element => {
			data.push(`**name: #${element.number} ${element.name}**`);
			data.push(`date: ${element.date}`);
			if (element.live)
			{
				data.push(`diff live: ${element.live}`);
			} else {
				data.push(`yaml live: ${element.live}`);
			}
		});

		message.channel.send(data, { split: true });
	},
};