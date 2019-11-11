const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643529658880622610")
setInterval(function() {
channel.send(`helooه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);