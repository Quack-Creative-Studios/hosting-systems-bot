//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
  if(config.rdis === "true") {
    message.channel.send("**Oh no!** Reviews are disabled in this guild")
    return;
  }
  const channel = client.channels.cache.find(ch => ch.id === `${config.reviewid}`);
	if (!channel) return;
if(args[0] === "1") {
  const review1 = new Discord.MessageEmbed()
  .setAuthor(`${message.guild.name} Reviews`, `${config.icon}`)
  .setColor("GOLD")
  .setTitle(`:star:`)
  .setFooter(`- ${message.author.username}`)
  .setDescription(args.slice(1).join(" "))
  channel.send(review1)
  message.channel.send(`${config.check} **Consider it done!** Thank you for your review. It is very much appreciated.`)
  }
if(args[0] === "2") {
  const review2 = new Discord.MessageEmbed()
 .setAuthor(`${message.guild.name} Reviews`, `${config.icon}`)
  .setColor("GOLD")
  .setTitle(`:star: :star:`)
  .setFooter(`- ${message.author.username}`)
  .setDescription(args.slice(1).join(" "))
  channel.send(review2)
  message.channel.send(`${config.check} **Consider it done!** Thank you for your review. It is very much appreciated.`)
  } 

if(args[0] === "3") {
  const review2 = new Discord.MessageEmbed()
 .setAuthor(`${message.guild.name} Reviews`, `${config.icon}`)
  .setColor("GOLD")
  .setTitle(`:star: :star: :star:`)
  .setFooter(`- ${message.author.username}`)
  .setDescription(args.slice(1).join(" "))
  channel.send(review2)
  message.channel.send(`${config.check} **Consider it done!** Thank you for your review. It is very much appreciated.`)
   } 
if(args[0] === "4") {
  const review2 = new Discord.MessageEmbed()
 .setAuthor(`${message.guild.name} Reviews`, `${config.icon}`)
  .setColor("GOLD")
  .setTitle(`:star: :star: :star: :star:`)
  .setFooter(`- ${message.author.username}`)
  .setDescription(args.slice(1).join(" "))
  channel.send(review2)
  message.channel.send(`${config.check} **Consider it done!** Thank you for your review. It is very much appreciated.`)
   } 
if(args[0] === "5") {
  const review2 = new Discord.MessageEmbed()
 .setAuthor(`${message.guild.name} Reviews`, `${config.icon}`)
  .setColor("GOLD")
  .setTitle(`:star: :star: :star: :star: :star:`)
  .setFooter(`- ${message.author.username}`)
  .setDescription(args.slice(1).join(" "))
  channel.send(review2)
  message.channel.send(`${config.check} **Consider it done!** Thank you for your review. It is very much appreciated.`)
} if(!args[0]) {
  const error = new Discord.MessageEmbed()
  .setAuthor("Oops!", `${config.icon}`)
  .setColor("GOLD")
  .setDescription("Please provide a number between 1-5 for your review & optionally a comment to go with it, not providing a comment will just leave the amount of stars rated.")
  message.channel.send(error)
}
}