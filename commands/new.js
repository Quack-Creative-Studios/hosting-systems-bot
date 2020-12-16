//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
let reason = args.join(" ");
    if(!reason) {
      message.channel.send(`${config.cross} **Uh oh!** Please provide a reason and try again.`)
      return;
    }
const channel = await message.guild.channels.create(`ticket-${message.author.username}`, {
	type: 'text',
	permissionOverwrites: [
		{
			id: message.guild.id,
			deny: ['VIEW_CHANNEL'],
		},
    {
id: `${config.supportrole}`,
allow: [
  'VIEW_CHANNEL',
  'ATTACH_FILES'
]
    },
		{
			id: message.author.id,
			allow: [
        'VIEW_CHANNEL',
        'ATTACH_FILES'
        ],
		},
	],
});
channel.setParent(config.categoryid);
channel.send(`||<@&741318243612098561>||\n${message.author} - Please wait for a support member to answer your ticket.`)

            const embed = new Discord.MessageEmbed()
                .setColor("RED")
                .addField(`Quack! Hosting`, `Ticket Reason: **${reason}**`)
                .setDescription("When you feel as if you have had your question answered, ask a Support Agent to close the ticket using `q!close`.")
                .setFooter('NORTH Ticket Manager')
                .setTimestamp()
            channel.send(embed).then((msg) => msg.pin())
            
            const info = new Discord.MessageEmbed()
            .setDescription("Welcome to Quack! Hosting\nWe urge you to keep anything said in this private ticket to yourself and not to keep any screenshots of converstation unless required to with consent of the operating staff member.\n\nFailure to follow this will result in a punishment on the Discord server and possible suspension of products.\nMany thanks.")
            .setColor("BLUE")
             .setTimestamp()
  .setFooter("NORTH Ticket Manager")
            channel.send(info)
      message.channel.send(`${config.check} **Help is on it's way!** Your ticket has been created at <#${channel.id}>`)
  
  const logs = client.channels.cache.find(ch => ch.id === `${config.logsid}`);
	if (!logs) return;
  const log = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .setAuthor("Ticket Logs", `${config.icon}`)
  .addField("Ticket Opened", `${channel.name} [${channel.id}] | Managed \`${message.author.tag}\``)
  .addField("Reason", reason)
  .setTimestamp()
  .setFooter("NORTH Ticket Manager")
  logs.send(log)

}