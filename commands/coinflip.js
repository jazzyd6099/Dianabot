const Discord = require('discord.js');

var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

module.exports = {
  name: 'coinflip',
  description: "Heads or Tails.",
  execute(message, args){
	  const coinflip = ['Heads.','Tails.'];
    var embed = new Discord.MessageEmbed()
	      .setColor(3447003)
	      .setTitle("Coinflip. What will it land on?")
    	      .setThumbnail('https://i.ibb.co/0BsCZnB/free-heads-or-tails-icon-456-thumb.png')
	      .setDescription(coinflip[Math.floor(Math.random () * coinflip.length)])
    	      message.channel.send({embed})
    
  }
}
