exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
   
    if(message.member.permissions.has('ADMINISTRATOR')){

        console.log('no elo śmiecie')
        let msg = message;
              sql.all(`SELECT userId, tempScore FROM guild_user WHERE guildId="${msg.guild.id}"`).then(rows => {
            rows.forEach(function (row) {
              sql.run(`UPDATE guild_user SET tempScore=0 where userId = ${row.userId} AND guildId="${msg.guild.id}"`)
  
            })
   })
  
  message.channel.send('ranking zresetowany o.O')
  
      } else message.channel.send(`nie posiadasz uprawnień administratora`);
       
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["tmr"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "tMonthReset",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  