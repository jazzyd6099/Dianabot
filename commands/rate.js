const Discord = require("discord.js");
var output = x[Math.floor(Math.random()*x.length)];
module.exports = {
  name: 'rate',
  description: "Diana rates you.",
  execute(message, args){
    message.channel.send("Pong.");

  }
}

