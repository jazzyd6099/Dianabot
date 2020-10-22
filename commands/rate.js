const Discord = require("discord.js");
var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];
module.exports = {
  name: 'rate',
  description: "Diana rates you.",
  execute(message, args){
   const rate = Math.floor(Math.random() * 100)
						var embed = new Discord.MessageEmbed()
						.setColor(3447003)
						.addField(" 1⃣ *Rate* 🔟  ", "I rate you a " + rate + " out of 100.")
            .setThumbnail(message.author.displayAvatarURL())
     						message.channel.send({embed})
  }
}

