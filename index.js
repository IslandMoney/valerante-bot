require('dotenv').config()

const { Client, Intents } = require('discord.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on("ready", () => {
    console.log("Bot is ready")
})

client.on("messageCreate", msg => {
    console.log(msg.content.toLowerCase().trim());
    if (msg.content.toLowerCase().trim() === "valerante") {
        msg.reply("valarante child game.... look to cartoon grapfix to make kid player happy like children show.. valarante cartoon world with rainbow unlike counter strike with dark corridorr and raelistic gun.. valarante like playhouse. valarant playor run from csgo fear of dark world and realism so need child game to relax")
    }
})

client.login(process.env.BOT_TOKEN)