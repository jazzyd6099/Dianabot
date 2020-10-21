const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require('./config.json');
const activities = require('./jsons/activity');

client.on("ready", () => {
  console.log("I am ready.");
  
  const activity = activities[Math.floor(Math.random() * activities.length)];
client.user.setPresence({ activity: { name: activity.text, type: activity.type }, status: 'idle' })
	   .then(console.log)
  .catch(console.error);
});
client.on('message', async message => {
  
if (message.content.toLowerCase().startsWith("Hey Diana")) {
    message.channel.send("Hello");
        }
  	      });
client.on('message', async(message) => {
if (!message.content.startsWith(prefix)) return;
	
	if (message.content.startsWith(prefix+"ping")) {
		message.channel.send("Pong.");
  }
});

client.login(process.env.BOT_TOKEN);
