require('dotenv').config()

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.BOT_TOKEN);

client.on("messageCreate", msg => {
    if (msg.content.toLowerCase().trim() === "valerante") {
    msg.reply("valarante child game.... look to cartoon grapfix to make kid player happy like children show.. valarante cartoon world with rainbow unlike counter strike with dark corridorr and raelistic gun.. valarante like playhouse. valarant playor run from csgo fear of dark world and realism so need child game to relax")
    }
})