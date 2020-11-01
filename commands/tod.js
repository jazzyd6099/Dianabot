const Discord = require("discord.js");
const truths = require("./jsons/truths.json");

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
	  const filter = (reaction, user) => {
			return ['💬', '🗨️'].includes(reaction.emoji.name) && user.id === message.author.id;
		};
			message.awaitReactions(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();
				
				if (reaction.emoji.name === "💬") {
					 var embed = new Discord.MessageEmbed()
					 .setColor(3447003)
					 .setTitle('Truth')
					 .setDescription(truths[Math.floor(Math.random() * truths.length)])
					 message.channel.send({embed})
				}
			});
  }
}
