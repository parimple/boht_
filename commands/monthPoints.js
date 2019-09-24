
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let msg = message;
    sql.get(`SELECT * FROM guild_user WHERE userId ="${message.author.id}" AND guildId="${msg.guild.id}"`).then(row => {
      if (!row) return message.reply(`Posiadasz 0 punktów`);
      msg.reply(`Ilość punktów w tym miesiącu: ${row.tempScore}`);
    });
  },


  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["mp"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "monthPoints",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  
