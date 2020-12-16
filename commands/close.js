//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR" || "MANAGE_MESSAGES")){
    message.reply(`${config.cross} **Erm, right.** This is a close command - only \`Moderators\`, \`Administrators\` and \`Level 2 Support Agents\` can run this command.`)
    return;
    }
     if(!message.channel.name.startsWith('ticket-')) { 
message.reply("This isn't a ticket channel.")
    return;
    }
    
if(!args[0]) {
  message.reply(`${config.cross} | Please give me a reason on closing this ticket.`)
return;
}
   
    setTimeout(function(){ 
        message.channel.delete()
}, 3000);

const channel = client.channels.cache.find(ch => ch.id === `${config.logsid}`);
	if (!channel) return;
  const embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor("Ticket Logs", `${config.icon}`)
  .addField("Ticket Closed", `${message.channel.name} [${message.channel.id}] | Closed by \`${message.author.tag}\``)
  .addField("Reason:", args.join(" "))
  .setTimestamp()
  .setFooter("NORTH Ticket Manager")
  channel.send(embed)

const done = new Discord.MessageEmbed()
  .setAuthor("One moment...", `${config.icon}`)
  .setColor("GREEN")
.setDescription(`${config.check} | I will remove this channel within the next \`3\` seconds.\n**Reason:** ${args.join(" ")}`) 
 .setTimestamp()
  .setFooter("NORTH Ticket Manager")
message.channel.send(done)
    }
