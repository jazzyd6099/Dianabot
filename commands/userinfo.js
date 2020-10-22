const Discord = require('discord.js');
module.exports = {
  name: 'userinfo',
  description: "Gives information about a user.",
  execute(message, args){
			  let user = message.mentions.users.first() || message.author;
				 const member = message.guild.member(user);
				  var embed = new Discord.MessageEmbed()
				  .setColor(3447003)
				  .setDescription(`${user}`)
				  .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL())
				  .addField("ID", `${user.id}`)
				  .addField("Status", `${user.presence.status}`)
				  .addField("In Server", `${message.guild.name}`)
				  .addField("Joined Discord", `${user.createdAt.toDateString()}`)
				  .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
				  message.channel.send({embed})
  }
}
