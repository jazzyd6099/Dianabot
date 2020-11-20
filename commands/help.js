const Discord = require("discord.js");
module.exports = {
  name: 'help',
  description: "To help and tell you what Diana's commands are.",
  execute(message, args){
   var embed = new Discord.MessageEmbed()
					.setTitle("My Commands")
					.setColor(3447003)
					.setDescription("There will be more to come. If you have any suggestions, please put them in <#768471194424442891>.")
					.setThumbnail('https://imgur.com/a/Ku4ivqo')
					.addField('__Fun__', '`d/tod`, `d/8ball`, `d/coinflip`, `d/rate`')
					.addField('__Information__', '`d/serverinfo`, `d/userinfo`')
					.addField('__Other__', '`WIP.`')
					.setFooter('Bot coded and created by SpaceCarame#6433.')
					message.channel.send({embed})
    
  }
}
