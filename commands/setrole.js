
exports.run = async (client, message, args, level) => { let msg = message;

    let msg1 = message;
    let msg2 = message;
    let a;
    let b;
    msg = message.content.split(' ');
  //console.log(`Message recieved from ${msg2.author.username}`);
  roleId = msg[1];
  msg.shift();
  msg.shift();
  let roleName = msg.join();

  for (let i of msg) {
    roleName = roleName.replace(',', ' ').slice(0);
    msg[i];
  }
  //let role = message.guild.roles.find("name", roleName);
  //console.log(role);
  console.log(roleName); 
  //let role = message.guild.roles.get("421057284777705482");
  //let role = message.member.roles.find("name", roleName);
  let role;
  try {
    role = message.guild.roles.find("name", roleName).id;
  } catch(err) {
    msg2.channel.send('nie ma takiej roli');
    //return 0;

  }
  //a.toUpperCase();
  console.log(a);
  
  //let role = message.guild.roles.find("name", "Boty").id;
  //console.log(role);

  //console.log(role);
  //msg2.reply(role);
/*
  sql.run(`CREATE TABLE IF NOT EXISTS channel (
    channelId TEXT, 
    channel TEXT, 
    active INTEGER, 
    guildId TEXT, 
    PRIMARY KEY (channelId, guildId), 
    FOREIGN KEY(guildId) REFERENCES guild(guildId)) without rowid`
    );
    */
          },
        //boht info
    
      
      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["sr"],
        permLevel: "User"
      };
      
      exports.help = {
        name: "setRole",
        category: "Miscelaneous",
        description: "xxx.",
        usage: "say [...text]"
      };
      