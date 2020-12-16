//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR" || "MANAGE_SERVER")){
  const help = new Discord.MessageEmbed()
   .setColor("DARK_BLUE")
   .setAuthor("Help", `${config.icon}`)
   .setDescription(`\`${config.prefix}help\`\n\`${config.prefix}ping\`\n\`${config.prefix}verify\`\n\`${config.prefix}new [subject]\`\n\`${config.prefix}review [1-5] [description]\`\n\`${config.prefix}invites\`\n\`${config.prefix}suggest [suggestion]\`\n\`${config.prefix}role [role]\``)
   message.reply(help)
 return;
    }
    const help_a = new Discord.MessageEmbed()
    .setColor("DARK_BLUE")
    .setAuthor("Help", `${config.icon}`)
    .addField("User Commands", `\`${config.prefix}help\`\n\`${config.prefix}ping\`\n\`${config.prefix}verify\``)
    .addField("Ticketing Commands", `\`${config.prefix}new [subject]\`\n\`${config.prefix}close\``)
    .addField("System & Guild Commands", `\`${config.prefix}review [1-5] [description]\`\n\`${config.prefix}invites\`\n\`${config.prefix}suggest [suggestion]\``)
    message.reply(help_a)
}