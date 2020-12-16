//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR" || "MANAGE_SERVER")){
   message.channel.send(`**Woah now...** Only HRs can send server-wide broadcasts.`)
    }
    const channel = client.channels.cache.find(ch => ch.id === `${config.announcementsid}`);
	if (!channel) return;
	const welcome = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
	.setColor('ORANGE')
	.setDescription(args.join(" "));
channel.send(welcome)
}
