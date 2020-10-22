const Discord = require('discord.js');
module.exports = {
  name: 'serverinfo',
  description: "Gives information about the server you are in.",
  execute(message, args){
    var embed = new Discord.MessageEmbed()
	      .setColor(3447003)
	      .setTitle("Server Information")
	      .setDescription(`${message.guild}'s information`)
	      .setThumbnail(message.guild.iconURL())
	      .addField("Server ID", message.guild.id)
	      .addField("Owner", message.guild.owner)
	      .addField("Member Count", `This server has ${message.guild.memberCount} members.`)
    	      .addField("Channels Count", `This server has ${message.guild.channels.size} channels.`)
	      .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles.`)
	      .addField("Emojis Count", `This Server has ${message.guild.emojis.cache.size} emojis.`)
  	      .addField("You Joined At", message.member.joinedAt)
  	      .setFooter(`Server created ${message.guild.createdAt}`);
				 message.channel.send({embed})
    
  }
}
