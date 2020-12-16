//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR" || "MANAGE_SERVER")){
   message.channel.send(`**Woah now...** Only HRs can send messages via DMs.`)
    }
const human = client.users.cache.get(args[0]);
if(!args[0]) {
  message.reply("Please provide a user ID to send this message to.")
return;
}
if(!args[1]) {
  message.reply("What am I meant to send?")
  return;
}
const embed = new Discord.MessageEmbed()
.setAuthor("Quack! Hosting", message.guild.iconURL())
.setDescription("Message Sent:\n```" + args.slice(1).join(" ") + "```")
.setFooter(human.tag, human.avatarURL())
message.reply(embed)
//message.reply("I have sent the message.\n```" + args.slice(1).join(" ") + `\`\`\`Sent to: ${human.tag}`)
human.send(args.slice(1).join(" ")).catch(error => {
message.reply('``Failed to send message:\n' + error + "``");
});
}