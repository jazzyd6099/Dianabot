module.exports = {
  name: 'serverinfo',
  description: "Gives information about the server you are in.",
  execute(message, args){
    message.channel.send("Pong.");
    
  }
}
