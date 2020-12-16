/* //import packages
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
  .setAuthor(message.guild.name, message.guild.iconURL())
	.setColor('RED')
  .setTitle("It's beginning to look a lot like Christmas...")
  .setDescription("Hello!\nWe have made a few updates and improvements to our website that we hope works out for the best, keep on reading to learn more!")
  .addField("It's snowing!", "The hero area on all the pages now show a bit of snow, it's starting to look nice and christmassy here!\nIf this seems to affect a lot of people I will go ahead and disable it, but let me know. It IS disabled on mobile- just to stop lag. If it isn't appearing for you on desktop, it may be because there is something wrong and it thinks you are on a mobile.")
  .addField("Ad-block block", "We have added an ad-blocker blocker to stop people using adblockers on the site so arc.io works for everyone. Arc helps us earn money without us having to use ads- please keep that in mind when visiting our site!\nIf you are getting the adblocker page and you aren't using an adblocker, please make sure to report it in <#746067238762840095> by mentioning <@221563533048020995> and telling us what browser you are using.")
  .addField("Christmas Discounts", "Christmas discounts will be announced shortly. We are thinking on doing around 20-30% off most products, which makes our cheap prices even cheaper! Make sure to check the deals out when they are on and use the discount codes provided when they are released.")
  .addField("More to come", "This isn't just it, we will be pushing out more updates during the week and attempt to get your input from it.\n\nThanks for choosing Quack! Hosting.")
  .setImage("https://i.ibb.co/7Kp9NnZ/quackweb1.png")
  .setThumbnail(message.guild.iconURL())
channel.send(welcome)
}
*/