//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
   if (message.channel.id === `${config.verifychid}`) {
    setTimeout(function(){ 
        const role = message.guild.roles.cache.find(role => role.name === 'Customer');
        if(!role) {
          message.channel.send(`${config.cross} **Please contact a HR**. This function is not working correctly.`)
        }
message.member.roles.add(role);
}, 5000);
const done = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setColor("GREEN")
  .setDescription(`${config.check} | **${message.author}**, you are verified.`) 
message.channel.send(done)
    } else {
      const err = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor("RED")
        .setDescription(`${config.cross} | You are already verified!`)
        message.channel.send(err)
    return;
    }
  }