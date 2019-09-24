exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Ping?");
  //msg.edit(`Pong! ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  msg.edit(`Pong! ${msg.createdTimestamp - message.createdTimestamp}ms`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pi"],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
  usage: "ping"
};
