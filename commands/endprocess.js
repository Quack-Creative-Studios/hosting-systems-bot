//import packages
const Discord = require("discord.js"),
fs = require("file-system");
const config = require("../config.json");
//start command
exports.run = async (client, message, args) => {
if (!message.author.id === "221563533048020995") {
	message.reply("**How did you find me?** You cannot end the bot's processes.")
return;
}

 setTimeout(function(){ 
       process.exit()
}, 3000);

message.reply("**Ciao!** Powering down...")

}