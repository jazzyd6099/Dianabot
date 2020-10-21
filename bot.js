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
client.on('guildMemberAdd', member => {
	
	const channel = member.guild.channels.cache.find(channel => channel.name === "diana-bot-test");
	if(!channel) return;
	
	var embed = new Discord.MessageEmbed()
	.setTitle(`Welcome to ${member.guild}.`)
	.setColor(3447003)
	.setThumbnail(member.user.displayAvatarURL())
	.setDescription(`Hello, ${member.user}.\n\nMake sure to go to <#768439249137303573> to introduce yourself and go to <#768440695118626857> for roles of yourself.`)
	channel.send({embed})
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
