const Discord = require('discord.js');

var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

var coinflip = ['Heads!','Tails!'];
module.exports = {
  name: 'coinflip',
  description: "Heads or Tails.",
  execute(message, args){

    var embed = new Discord.MessageEmbed()
	      .setColor(3447003)
	      .setTitle("Coinflip")
	      .setDescription(coinflip[Math.floor(Math.random () * coinflip.length)])
    
  }
}
