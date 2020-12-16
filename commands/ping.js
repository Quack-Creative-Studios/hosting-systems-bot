//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
  const ping = new Discord.MessageEmbed()
  .setAuthor("Ping, pong!", `${config.icon}`)
  .setColor("BLUE")
  .setDescription(`**API:** ${client.ws.ping}`)
  message.channel.send(ping)
}