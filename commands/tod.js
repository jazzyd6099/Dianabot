const Discord = require("discord.js");

module.exports = {
  name: 'tod',
  description: "Truth or Dare.",
  execute(message, args){
  async function declaredAsAsync() 
    var embed = new Discord.MessageEmbed()
		.setColor(3447003)
		.setTitle('Truth or Dare')
		.setDescription('Decide on if you want to do a truth or dare. \n\n💬 : `Truth` \n\n🗨️ : `Dare`')
    		let messageEmbed = await message.channel.send({embed})
          	messageEmbed.react('💬')
  }
}
