//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
 var user = message.author;

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                const invites1 = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username}'s invites`, message.author.avatarURL())
                .setDescription(`You have \`${userInviteCount}\` invites.`)
                .setColor("RANDOM")    
                     message.channel.send(invites1);
            }
        )
}