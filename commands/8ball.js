const Discord = require("discord.js");

var x = [
    1,
    2,
    3,
    4,
    5,
]

var fortunes = [
    "Yes.",
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definelty.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now...",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good...",
    "Very doubtful.",
];

var output = x[Math.floor(Math.random()*x.length)];

const fortune = fortunes[Math.floor(Math.random() * fortunes.length)]


module.exports = {
  name: '8ball',
  description: "Ask the 8ball a question.",
  execute(message, args){
    						let question = args.slice(0).join(' ')
if (!question) return message.reply("You need to provide a question for the 8ball.");
    
    var embed = new Discord.MessageEmbed()
							.setColor(0x6a00b0)
							.setTitle(`Looking into the ball... \n__Question:__ ${question}`)
							.setDescription('__Answer:__ ' + fortune)
							message.channel.send({embed})
    
  }
}
