const Discord = require("discord.js");

module.exports.run = async (_client, message, args) =>{

    
    
    
    let bUser = message.guild.member(message.mentions.users.first());
    let bUserErrEmbed = new Discord.MessageEmbed()
    .setAuthor("Wystąpił błąd", message.author.iconURL)
    .setColor("#CB00FF")
    .setDescription("Nie możesz zbanować podanego uztkownika ponieważ ma za wysokie uprawnienia lub nie ma go na serwerze")
    .setThumbnail(message.guild.iconURL)
    .setFooter("Błąd użytkownika")
    .setTimestamp();

    let bPermErr = new Discord.MessageEmbed()
    .setAuthor("⚠️ BRAKUJE PERMISJI⛔", message.author.iconURL)
    .setColor("#52FF00")
    .setDescription("Brakuje ci uprawnienia `BAN_MEMBERS`, aby zbanować użytkownika"+ bUser)
    .setTimestamp();
   
    if(!bUser) return message.channel.send(bUserErrEmbed);
    let bReason = args.join(" ").slice(22);
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(bPermErr);
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(bUserErrEmbed);

    let bSucces = new Discord.MessageEmbed()
    .setColor("#FF00BC")
    .addField("Zbanował/a:", message.author.username, true)
    .addField("Zbanowany/a:", bUser,true)
    .addField("Zbanowany/a za:", bReason, true)
    .addField("Zbanowany/a godzinie:", message.createdAt,false)
    .setTitle("Użytkownik zbanowany 🚓")
    .setTimestamp();
    message.guild.member(bUser).kick(bReason);
    message.channel.send(bSucces)


}

module.exports.help = {
    name: "ban",

}