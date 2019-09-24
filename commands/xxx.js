// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS


// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
       // message.channel.send("D");
     /*
     let msg = message;

      sql.get(`SELECT * FROM guild WHERE guildId ="${msg.guild.id}"`)
      .then(async row => {
        msg.reply(`${row.prefix}`);
      
      }).catch(() => {

        sql.run("CREATE TABLE IF NOT EXISTS guild (guildId TEXT, welcome TEXT, goodbye TEXT, prefix TEXT, language TEXT)")
        .then(() => {
          sql.run("INSERT INTO guild (guildId, welcome, goodbye, prefix, language) VALUES (?, ?, ?, ?, ?)",
           [msg.guild.id, "witaj na serwerze!", "do zobaczenia!", ".", "PL"]);
          
        })
        .then(() => {
          sql.get(`SELECT * FROM guild WHERE guildId ="${msg.guild.id}"`)
          .then(row => {
            msg.channel.send(`${row.welcome}`);
          });

        console.error;

        })
        
        

      });
      */



      
     let msg1 = message;
     let z = msg1.createdTimestamp;

     client.setTimeout(() => {
       let msg2 = message;
       let y = msg2.createdTimestamp;
       msg1.channel.send(z);



     },5000)
/*
   if(message.member.roles.find("name", "👑Anti Admin") || message.member.roles.find("name", "👑Beta / Moderator")){
       message.channel.send(`hej adminku`);
     } else message.channel.send(`no elo nieadminku`); */
/*
   
   if(message.member.permissions.has('ADMINISTRATOR')){
       message.channel.send(`hej adminku`);
   } else message.channel.send(`no elo nieadminku`);
   */ 

       
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["x"],
    permLevel: "Bot Owner"
  };
  
  exports.help = {
    name: "xxx",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  