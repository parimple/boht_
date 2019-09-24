
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    
      //rand
 
    let msg1 = message;
    let x;
    let msg = message.content.split(' ');

    y = msg[1].substring(0, (msg[1].length));

    let rand = (max) => {return 1+Math.floor(Math.random() * Math.floor(max));}
    msg1.channel.send(rand(y));

  },

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rand"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "random",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  
