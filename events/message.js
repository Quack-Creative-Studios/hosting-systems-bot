const config = require("../config.json");
const Discord = require('discord.js')
const prefix = config.prefix;
exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) {
    const sent = new Discord.MessageEmbed()
    .setAuthor("Quack! Hosting DMs", config.icon)
    .setDescription("Thanks for your query. I have passed your message along.")
    .setColor("GREEN")
    message.reply(sent)
    const user = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription("__DM Message Log__\n\n```" + message.content + "```")
    .setFooter("Quack! Hosting DMs", config.icon)
    .setColor("GOLD")
    client.users.cache.get("221563533048020995").send(user);
  return;
  }

  if (message.content.startsWith(prefix)) {
    let messageArray = message.content.split(" "),
      cmd = messageArray[0],
      args = messageArray.slice(1),
      commandfile = client.commands.get(cmd.slice(prefix.length));

    if (!commandfile) return;
    commandfile.run(client, message, args);
  }
  if(config.swearfilteron === "false") {
    return;
  } else {
  if(!message.member.hasPermission("ADMINISTRATOR")){   
let swears = [
        "fuck",
        "fuc",
        "fucc",
        "fuk",
        "fukk",
        "shit",
        "sh1t",
        "shite",
        "cunt",
        "nigg",
        "nigga",
        "n1gga",
        "bitch",
        "botch",
        "b1tch",
        "b*tch",
        "*itch",
        "bi*ch",
        "bit*h",
        "bitc*",
        "bloody",
        "bl00dy",
        "cunt",
        "asshole",
        "arsehole",
        "piss",
        "bastard",
        "wank",
        "wanker",
        "piss",
        "twat",
        "baka"
    ]
    
for (var i = 0; i < swears.length; i++) {
  if (message.content.includes(swears[i])) {
 message.delete();
//tell 'em off
const err = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.guild.name, message.guild.iconURL())
.setURL("https://discordapp.com/channels/741310788769415220/741733772080316416/750795920651714762")
.setDescription(`**[Sorry-](https://discordapp.com/channels/741310788769415220/741733772080316416/750795920651714762)** Please refrain from heavily swearing.\nBypassing also is not welcomed here.`)
.setFooter("Believe this is in error? Open up a support ticket with your claim.")
message.channel.send(err)
 //log it
 const channel = client.channels.cache.find(ch => ch.id === `${config.logsid}`);
	if (!channel) return;
  const log1 = new Discord.MessageEmbed()
  .setAuthor("Swear Detected", config.icon)
  .setColor("RED")
  .setDescription(`I have detected the word \`${swears[i]}\` from the chat.\nSent by ${message.author.tag} in ${message.channel}\n\n Full Message:\n\`\`\`${message}\`\`\``)
  .setFooter(`User: ${message.author.id} | Message: ${message.id}`)
  channel.send(log1)
 return;
}  else {
    return;
   }
    }
  }
}
}