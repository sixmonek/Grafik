const { Console } = require("console");
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (_client, message) => {

    var channel = message.channel;

    let {body} = await superagent
    .get('https://nekobot.xyz/api/image?type=food').catch((err) => {
        channel.send("Błąd z API!")
        return Console.log(err);
    });
    
   try{
       let embed = new Discord.MessageEmbed()
       .setColor(body.color)
       .setImage(body.message);
       channel.send(embed);
    } catch(err){
        channel.send("Wystąpił bląd z botem napisz do Ownera!")
        return Console.log(err);
    }

    
}

module.exports.help = {
    name: "food"
}