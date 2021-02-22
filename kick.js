const Discord = require("discord.js");

module.exports.run = async (_client, message, args) =>{

    
    
    
    let bUser = message.guild.member(message.mentions.users.first());
    let bUserErrEmbed = new Discord.MessageEmbed()
    .setAuthor("Wystąpił błąd", message.author.iconURL)
    .setColor("#CB00FF")
    .setDescription("Nie możesz wyrzucić podanego uztkownika ponieważ ma za wysokie uprawnienia lub nie ma go na serwerze")
    .setThumbnail(message.guild.iconURL)
    .setFooter("Błąd użytkownika")
    .setTimestamp();

    let bPermErr = new Discord.MessageEmbed()
    .setAuthor("⚠️ BRAKUJE PERMISJI⛔", message.author.iconURL)
    .setColor("#52FF00")
    .setDescription("Brakuje ci uprawnienia `KICK_MEMBERS`, aby wyrzucić użytkownika"+ bUser)
    .setTimestamp();
   
    if(!bUser) return message.channel.send(bUserErrEmbed);
    let bReason = args.join(" ").slice(22);
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(bPermErr);
    if(bUser.hasPermission("KICK_MEMBERS")) return message.channel.send(bUserErrEmbed);

    let bSucces = new Discord.MessageEmbed()
    .setColor("#FF00BC")
    .addField("Wyrzucił/a:", message.author.username, true)
    .addField("Wyrzucony/a:", bUser,true)
    .addField("Wyrzucony za:", bReason, true)
    .addField("Wyrzucony o godzinie:", message.createdAt,false)
    .setTitle("Użytkownik wyrzucony 🚓")
    .setTimestamp();
    message.guild.member(bUser).kick(bReason);
    message.channel.send(bSucces)


}

module.exports.help = {
    name: "kick",

}