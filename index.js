const Discord = require('discord.js'),
	client = new Discord.Client(),
	fs = require('file-system');
const config = require('./config.json');

//Command Handler
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

client.on('ready', async () => {
  console.log(`${client.user.username} ready.`);
  console.log(`Running The iDenT Framework for Hosts.`);
  console.log(`Written by Tomas N.`)
console.log(`${client.guilds.cache.map(x => x.name +" : "+x.memberCount)}`) // this code is for listing all the guilds on startup
  let statuses = [
        `✨  Thanks for using ${config.name}! | Join the Discord!`,
        `🌇  Cheap, cheap, cheap webhosting! | ${config.prefix}!help`,
        `🔥  Need help? Ask support! | ${config.prefix}!new`,
        `🏛  Free & Paid Hosting Plans @ ${config.domain}`,
        `⛺  SPEED! | Insanely Good Hosting Speeds.`,
        `✊  Abuse? Contact us. | ${config.domain}`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status);
    }, 5000)
    //cache invites
  });

client.on('guildMemberAdd', member => {
   const pinger = client.channels.cache.find(ch => ch.id === `742875603212173423`);
	if (!pinger) return;
  pinger.send(member)
  .then(msg => {
    msg.delete(10000)
  })
  const channel = client.channels.cache.find(ch => ch.id === `${config.welcomeid}`);
	if (!channel) return;
channel.send(`Welcome to **Quack! Hosting**, ${member}.`)
});

client.on('guildMemberRemove', member => {
  const channel = client.channels.cache.find(ch => ch.id === `${config.goodbyeid}`);
	if (!channel) return;
channel.send(`Thanks for visiting, **${member.user.tag}**. Bye.`)
});

client.on('messageDelete', async messageDelete => {
 const channel = client.channels.cache.find(ch => ch.id === `${config.logsid}`);
	if (!channel) return;
  const log2 = new Discord.MessageEmbed()
  .setAuthor("Message Deleted", config.icon)
  .setColor("RED")
  .setDescription(`A message by **${messageDelete.author.tag}** was deleted.\nSent by ${messageDelete.author.tag} in ${messageDelete.channel}\n\n Full Message:\n\`\`\`${messageDelete.content}\`\`\``)
  .setFooter(`User: ${messageDelete.author.id} | Message: ${messageDelete.id}`)
  channel.send(log2)
});

fs.readdir('./commands/', (err, files) => {
	if (err) return console.log(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		console.log('[CMD] Successfully loaded ' + file);
		let commandName = file.split('.')[0];
		client.commands.set(commandName, props);
	});
});

fs.readdir('./events/', (err, files) => {
	if (err) console.log(err);
	files.forEach(file => {
		let eventFunc = require(`./events/${file}`);
		console.log('[EVENT] Successfully loaded ' + file);
		let eventName = file.split('.')[0];
		client.on(eventName, (...args) => eventFunc.run(client, ...args));
	});
});
client.login(config.token);
