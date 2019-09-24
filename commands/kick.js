// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS


// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
   
    if(message.member.permissions.has('ADMINISTRATOR') || message.member.permissions.has('KICK_MEMBERS')){
        if(message.mentions.members.first().permissions.has('ADMINISTRATOR') || message.mentions.members.first().permissions.has('BAN_MEMBERS') || message.mentions.members.first().permissions.has('KICK_MEMBERS')){ 
          return message.reply(`nie mogę wyrzucić tego użytkownika`);
        }
        let sayMessage = args.join(` `); 
        let nameplus =message.member.displayName+": "+sayMessage; 

        //rgs.reason = sayMessage; 
      
       message.mentions.members.first().kick(nameplus)
       message.channel.send(`${message.mentions.members.first().displayName} został wyrzucony!`)
        //message.channel.send(`hej adminku`);
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
  