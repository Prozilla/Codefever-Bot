const config = require("../config.json");
module.exports = {
	name: "owner",
	description: "Display the owner of this bot",
	execute(message, args) {
		message.channel.send(`${config.owner} made this bot.`);
	},
};