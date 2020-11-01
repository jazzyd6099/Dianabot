const Discord = require("discord.js");
var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

var truths = [
    "What’s the last lie you told?",
    "What’s your most bizarre nickname?",
    "If you met a genie, what would your three wishes be?",
    "What’s the meanest thing you’ve ever said to someone else?",
    "What’s one thing you’d do if you knew there no consequences?",
    "What’s something you love to do with your friends that you’d never do in front of your partner?",
    "Who are you most jealous of?",
    "Where are you ticklish?",
    "What app do you waste the most time on?",
];


module.exports = {
  name: 'tod',
  description: "Truth or Dare.",
  async execute(message, args){
    var embed = new Discord.MessageEmbed()
		.setColor(3447003)
		.setTitle('Truth or Dare')
		.setDescription('React to the specified emoji to either do a truth or dare. \n\n💬 : `Truth` \n\n🗨️ : `Dare`')
   		  let messageEmbed = await message.channel.send({embed})
     			messageEmbed.react('💬')
	  		messageEmbed.react('🗨️')
	  const filter = (reaction, user) => {
			return ['💬', '🗨️'].includes(reaction.emoji.name) && user.id === message.author.id;
		};
			message.awaitReactions(filter, { maxMatches: 1, time: 3000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();
			
				 if (reaction.emoji.name === '💬') {
            			message.reply('test');
				 }
			}
  }
}
