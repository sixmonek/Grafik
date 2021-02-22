const Discord = require("discord.js");
module.exports.run = async (_client, message) =>{
    const infoEmbed = new Discord.MessageEmbed()

    if(message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(message.content.slice(prefix.length+3))
    else
    return message.channel.send("Błąd Brak uprawnień Administratorskich")

}

module.exports.help = {
    name: "say"
}