exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
   
    if (message.content.includes('@everyone')) return message.reply("Oszust!")
    if (message.content.includes('@here')) return message.reply("Oszust!")
    let users = message.guild.members.array() // online users in same server as client
    let num = 0;
    let ordered = [];
    for (let user of users) {

      //console.log(user.user.bot)
      if (!( user.user.bot) ) {
        //console.log('to nie bot')
        //console.log(user.bot)
        //console.log(user.displayName)
        if (user.presence.status == 'online' || user.presence.status == 'idle' || user.presence.status == 'dnd') {
          ordered.unshift(user)
        }

      }	

    }
    const say = args.join(` `);
    let rand = (max) => {return 1+Math.floor(Math.random() * Math.floor(max));}
    
    
    //console.log(ordered.length);
    //console.log(`<@${ordered[rand(ordered.length)].id}> jest ${say}`);
    message.channel.send(`${ordered[rand(ordered.length)].displayName} jest ${say}`);
    //message.channel.send(`<@${ordered[3].id}> jest pedałem`);
       
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["wi"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "whoIs",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  