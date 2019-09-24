// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS


// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.

//const { Command } = require('discord.js-commando');
//const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
/*
    let info = new Discord.RichEmbed()
    .setAuthor("boht statystyki:")
    .addField(`ilość serwerów:`, `${client.guilds.size}`)
     .addField(`ilość kanałów:`, `${client.channels.size}`)
    .addField(`ilość osób:`, `${client.users.size}`)
   */
    //message.channel.send({embed: info})
    message.channel.send(`serwery: ${client.guilds.size}\nkanały: ${client.channels.size}\nosoby: ${client.users.size}`)
    //message.channel.send('xxx')
      },
    //boht info

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bi"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "bohtInfo",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  