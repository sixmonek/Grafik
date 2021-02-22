const Discord = require("discord.js");

module.exports.run = async (_client, message) =>{
    const infoEmbed = new Discord.MessageEmbed()
    .setTitle("Komendy Bota <a:aauuu:803186552972509234>")
    .addField("» Komendy Administratorskie","`,ban`  `,kick`")
    .addField("» Komendy dotyczące bota","`,serwerinfo` `,help` `,invite` `,botinfo`")
    .addField("» Komendy 4FUN","`,neko` `,food`" )
    .setDescription("Mój prefix to **,**")
    .setColor("#00E5FF")
    .setTimestamp();
    message.channel.send(infoEmbed);
}

module.exports.help = {
    name: "help"
}