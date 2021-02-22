const Discord = require("discord.js");

module.exports.run = async (_client, message) =>{
    const infoEmbed = new Discord.MessageEmbed()
    .setColor("#FF00EC")
    .setTitle("Informacje o serwerze <a:tymtymtym:803187572716732457> ")
    .addField("ID serwera:", message.guild.id, false)
    .addField("Data stworzenia serwera: ", message.guild.createdAt, false)
    .addField("Ilość osób na serwerze: ", message.guild.memberCount, false)
    .addField("Data twojego dołaczenia na serwer:", message.member.joinedAt, false)
    .setTimestamp();

    message.channel.send(infoEmbed);
}

module.exports.help = {
    name: "serwerinfo"
}