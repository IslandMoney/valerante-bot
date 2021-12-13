require('dotenv').config()

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const lines = [
    "valarante child game.... look to cartoon grapfix to make kid player happy like children show.. valarante cartoon world with rainbow unlike counter strike with dark corridorr and raelistic gun.. valarante like playhouse. valarant playor run from csgo fear of dark world and realism so need child game to relax",
    "Hi all, Riot CEO here, we're going to invest millions into copying Counter Strike without infringing on Valve's copyrights. If you were a failed CSGO pro like TenZ or silver, we welcome you to Valorant where you can pretend like its a better game because you couldn't cut it in CSGO.",
    `How blatant can Valve be? Seriously? So instead of the spike they have something called a "bomb"? Instead of abilities they have "nades mollies and smokes". Instead of agents it's terrorists and counter-terrorists? What is this the 1970s? It's almost as if they copied but halfway through they got lazy and just released the game. Valve should be ashamed of themselves. I guess imitation is the best form of flattery, Riot is so kind to not come after Valve legally. Blatant rip off of Valorant this game is`,
    "What the hell are both of these teams doing? I'm in bronze and I could compete better than all of the players in this tournament. I can't believe I'm being held back by my teammates this bad. Any orgs feel free to DM me."
]

client.login(process.env.BOT_TOKEN);

client.on("messageCreate", msg => {
    if (msg.content.toLowerCase().trim() === "valerante") {
        msg.reply(lines[array[Math.floor(Math.random() * array.length)]])
    }
})