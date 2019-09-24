exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    if (message.content.includes('@everyone')) return message.reply("Oszust!")
    if (message.content.includes('@here')) return message.reply("Oszust!")
    if (message.mentions.users.first()) return message.reply("Nie oznaczaj!")
      const sayMessage = args.join(` `);
      let test = sayMessage.replace(/ /g,'')
    message.delete().catch(O_o=>{});

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
  