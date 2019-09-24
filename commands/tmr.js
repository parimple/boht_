// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS


// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.
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
  