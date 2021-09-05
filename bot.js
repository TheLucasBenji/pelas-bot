require('dotenv').config()

const Discord = require("discord.js");
const client = new Discord.Client();

//const { Client, Intents } = require('discord.js');
//const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log("Listo para recibir pelas");
});

client.on("message", (msg) => {
  if (msg.content === "!pela") {
    msg.channel.send("Que pelá desdasda");
  }
});

client.on("messageDelete", msg => {
  msg.reply("Deja de eliminar mensajes 😈")
})

client.login(process.env.TOKEN);