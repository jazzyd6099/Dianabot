const Discord = require("discord.js");
const truths = require('./jsons/truths');
const dares = require('./jsons/dares');

module.exports = {
  name: 'tod',
  description: "Truth or Dare.",
  async execute(message, args){
    var embed = new Discord.MessageEmbed()
		.setColor(3447003)
		.setTitle('Truth or Dare')
		.setDescription('Decide on if you want to do a truth or dare. \nReact to the specified emoji to either do a truth or dare. \n\n💬 : `Truth` \n\n🗨️ : `Dare`')
   		  let messageEmbed = await message.channel.send({embed})
     			messageEmbed.react('💬')
	  		messageEmbed.react('🗨️')
  }
}
