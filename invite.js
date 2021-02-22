const Discord = require("discord.js");

module.exports.run = async (_client, message) =>{
    const infoEmbed = new Discord.MessageEmbed()
    .setTitle("Dodaj Bota Na Twój serwer! <a:frogrotate:804644161889763378>")
    .setDescription("Tu masz link do dodania bota na swój serwer: **https://tiny.pl/rlq1v (link skrócony)**")
    .setColor("#F8FF00")
    message.channel.send(infoEmbed);
}

module.exports.help = {
    name: "invite"
}