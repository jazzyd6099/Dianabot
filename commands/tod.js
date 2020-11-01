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
    "What is one secret you are hiding from your mom?",
    "Have you ever stalked someone on Facebook or Instagram?",
    "Do you currently have a crush on anyone?",
    "Is there anything in your life that you would change?",
    "Who do you hate and why?",
    "How many people have you kissed?",
    "What is your guilty pleasure?",
    "What is your go-to song to sing in the shower?",
    "If you suddenly became invisible what would you do?",
];

var dares = [
  "Make out with your hand.",
  "Make your Discord status 'How do you spell 'Discord'?'",
  "Do 10 pushups.",
  "Lick the wall.",
  "Try to lick your elbow.",
  "Send a video of you dancing.",
  "Talk about your last dream.",
  "Try eating a snack without using your hands.",
  "Text a friend and tell them their hair is on backwards.",
  "Send me link of the last YouTube video you watched.",
  "Send your favorite TikTok/YouTube video.",
  "Send the 11th picture in your photo gallery.",
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
   		messageEmbed.react('💬');
   		messageEmbed.react('🗨️');
			 
	const filter = (reaction, user) => {
    return (
     ['💬', '🗨️'].includes(reaction.emoji.name) && user.id === message.author.id
    );
   };
	  messageEmbed
	  .awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] }) 
    	.then((collected) => {
   	  const reaction = collected.first();
		  
	   if (reaction.emoji.name === '💬') {            	
		    var embed = new Discord.MessageEmbed()
				 .setColor(16114719)
				 .setTitle('A Truth For You')
		    		.setThumbnail('https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Thinking_grande.png?v=1571606093')
			 .setDescription(truths[Math.floor(Math.random() * truths.length)])
				 message.channel.send({embed})			
	   }				  
	  else 
	  if (reaction.emoji.name === '🗨️') {         			   
		  var embed = new Discord.MessageEmbed()
		  .setColor(16254757)
		  .setTitle('A Dare For You')
		  .setThumbnail('https://cdn.shopify.com/s/files/1/1061/1924/products/34_large.png?v=1571606117')
		  .setDescription(dares[Math.floor(Math.random() * dares.length)])
		  message.channel.send({embed})
		   return;
 	    }
    })
    .catch((collected) => {
     message.reply("You don't want to play Truth or Dare?");
	  })
  }
}
