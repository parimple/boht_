
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const x = `https://discordapp.com/oauth2/authorize?client_id=489377322042916885&permissions=8&scope=bot`;
    message.channel.send(client.config.invite);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["inv"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "invite",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  
