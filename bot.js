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
	
var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

});
client.on('guildMemberAdd', member => {
	
	const channel = member.guild.channels.cache.find(channel => channel.name === "💎welcome💎");
	if(!channel) return;
	
	var embed = new Discord.MessageEmbed()
	.setTitle(`Welcome to ${member.guild}`)
	.setColor(3447003)
	.setThumbnail(member.user.displayAvatarURL())
	.setDescription(`Hello, ${member.user}.\n\nMake sure to go to <#768439249137303573> to introduce yourself and go to <#768440695118626857> for roles of yourself.`)
	channel.send({embed})
});
client.on('message', async message => {
  
if (message.content.startsWith("Hey Diana")) {
    message.channel.send("Hello");
        } else
		if (message.content.includes("love you Diana")) {
			message.react("👎");
		} else
			if (message.content.includes("love you diana")) {
				message.react("👎");
			} else
				if (message.content.includes("LOVE YOU DIANA")) {
					message.react("👎");
				}
  	      });
client.on('message', async(message) => {
if (!message.content.startsWith(prefix)) return;
	
	if (message.content.startsWith(prefix+"ping")) {
		message.channel.send("Pong.");
 	 } else
		 if (message.content.startsWith(prefix+"serverinfo")) {
			 var embed = new Discord.MessageEmbed()
			  .setColor(3447003)
		          .setTitle("Server Information")
			  .setDescription(`${message.guild}'s information`)
			  .setThumbnail(message.guild.iconURL())
	                  .addField("Server ID", message.guild.id)
			  .addField("Owner", message.guild.owner.user.tag)
			  .addField("Member Count", `This server has ${message.guild.memberCount} members.`)
			  .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles.`)
			  .addField("Emojis Count", `This Server has ${message.guild.emojis.cache.size} emojis.`)
				 message.channel.send({embed})
		 } else
			 if (message.content.startsWith(prefix+"userinfo")) {
			  let user = message.mentions.users.first() || message.author;
				 const member = message.guild.member(user);
				  var embed = new Discord.MessageEmbed()
				  .setColor(3447003)
				  .setDescription(`${user}`)
				  .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL())
				  .addField("ID", `${user.id}`)
				  .addField("Status", `${user.presence.status}`)
				  .addField("In Server", `${message.guild.name}`)
				  .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
				  message.channel.send({embed})
			 }
});

client.login(process.env.BOT_TOKEN);
