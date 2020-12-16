//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
const channel = client.channels.cache.find(ch => ch.id === `${config.suggestid}`);
	if (!channel) return;
  let args1 = args.join(" ");
    if(!args1) {
      message.channel.send(`${config.cross} **Uh oh!** Please provide a suggestion to send and try again.`)
      return;
    }
    message.channel.send(`${config.check} **Thanks!** We value your suggestions a lot. Thanks for your assistance on creating a better **Quack! Hosting**.`)
	const suggestion = new Discord.MessageEmbed()
		.setColor('ORANGE')
    .setAuthor(`${message.author.username}'s suggestion`, message.author.avatarURL())
		.setDescription(args1);
channel.send(suggestion)
}