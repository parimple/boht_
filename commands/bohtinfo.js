exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    message.channel.send(`serwery: ${client.guilds.size}\nkanały: ${client.channels.size}\nosoby: ${client.users.size}`)
      },
  
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
  