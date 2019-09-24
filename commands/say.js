// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS


// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    if (message.content.includes('@everyone')) return message.reply("Oszust!")
    if (message.content.includes('@here')) return message.reply("Oszust!")
    if (message.mentions.users.first()) return message.reply("Nie oznaczaj!")
      const sayMessage = args.join(` `);
      let test = sayMessage.replace(/ /g,'')
    message.delete().catch(O_o=>{});
    //message.channel.send(test);

    if (test.includes(".gif")||test.includes(".png")|| test.includes(".gg")||test.includes(".me")||test.includes("https://")||test.includes(".com")||test.includes(".pl")||test.includes(".ly")) return message.reply("Oszust!")
    message.channel.send(sayMessage);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["s"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "say",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  