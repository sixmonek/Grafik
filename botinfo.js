const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    
    
    const load = new Discord.MessageEmbed()
    .setTitle( "Trwa Wysyłanie <a:adowanie:802989986320089129>")
    .setColor("#7C00FF")
    .setDescription("Wysyłanie Wiadomości na PW! Zazwyczaj trwa około 1-2 sekundy Jeżeli nadal nie dostałeś wiadomości napisz do Ownera!")
    .setTimestamp();
    const loaderMSG = await message.channel.send(load);

    const loaded = new Discord.MessageEmbed()
    .setTitle("Sukces <a:approved:811541519394930698>")
    .setDescription("Wiadomość o bocie została wysłana ci na **PW** przez Bota!")
    .setColor("#8BFF00")
    .setTimestamp();

    setTimeout(function (){
        loaderMSG.edit(loaded);
    }, 2500);

    let wLini = true;
    let userIcon = client.user.displayAvatarURL;
    let usersSize = client.users.size;
    let channelSize = client.channels.size;
    let uptime = client.uptime;
    let guildSize = client.guilds.size;

    let botinfoembed = new Discord.MessageEmbed()
    .setColor("#FF00D2")
    .setThumbnail(userIcon)
    .addField("Nazwa Bota:",client.user.username, wLini)
    .addField("Prefix Bota:", ",", wLini)
    .addField("Serwery:", ` ${guildSize}`, wLini)
    .addField("Stworzony :", client.user.createdAt, wLini)
    .addField("Uptime:", `${uptime} ms`, wLini)
    .addField("Biblioteka Bota:", "Discord.js", wLini)
    .setDescription("BOTA STWORZYŁ I NAPISAŁ: Sixmon#0011")
    .setTimestamp();

    let autor = message.author;
    autor.send(botinfoembed)
}

module.exports.help = {
    name: "botinfo"
}