exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
   
    if(message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('KICK_MEMBERS')){
        if(message.mentions.members.first().permissions.has('ADMINISTRATOR') || message.mentions.members.first().permissions.has('BAN_MEMBERS') || message.mentions.members.first().permissions.has('KICK_MEMBERS')){ 
          return message.reply(`nie mogę wyrzucić tego użytkownika`);
        }
        let sayMessage = args.join(` `); 
        let nameplus =message.member.displayName+": "+sayMessage; 

       message.mentions.members.first().kick(nameplus)
       message.channel.send(`${message.mentions.members.first().displayName} został wyrzucony!`)
    } else message.reply(`nie masz uprawnień!`);
       
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["k"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "kick",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  