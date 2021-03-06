const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require('./config.json');
const activities = require('./jsons/activity');
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

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
	
  const channel = member.guild.channels.cache.find(channel => channel.name.includes('💎welcome💎'));
    if (!channel) return;
	
	var embed = new Discord.MessageEmbed()
	.setTitle(`Welcome to ${member.guild}`)
	.setColor(3447003)
	.setThumbnail(member.user.displayAvatarURL())
	.setDescription(`Hello, ${member.user}.\n\nMake sure to go to <#768439249137303573> to introduce yourself and go to <#768440695118626857> for roles for yourself.`)
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
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
	
	if (command === 'ping'){
		client.commands.get('ping').execute(message, args);
 	 } else
		 if (command === 'serverinfo'){
			client.commands.get('serverinfo').execute(message, args);
		 } else
			 if (command === 'userinfo'){
			 client.commands.get('userinfo').execute(message, args);
			 } else
				 if (command === 'rate'){
				client.commands.get('rate').execute(message, args);
				 } else
				 if (command === '8ball'){
				client.commands.get('8ball').execute(message, args);
					 } else
					if (command === 'tod'){
						client.commands.get('tod').execute(message, args);
					}else 
						if (command === 'help'){
							client.commands.get('help').execute(message, args);
						} else
							if (command === 'coinflip'){
								client.commands.get('coinflip').execute(message, args);
					}
});

client.login(process.env.BOT_TOKEN);
