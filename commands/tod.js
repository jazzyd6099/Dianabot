const Discord = require("discord.js");

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
			message.awaitReactions(filter, { maxMatches: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();
			}}
			      .catch(collected => {
				message.channel.send(`After a minute, only ${collected.size} out of 4 reacted.`);
				 });
  }
}
