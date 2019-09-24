
const Fuse = require("fuse.js")

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  console.log(args);  
  let msg = message;
    let msg2 = message.content.split(' ');
    let y;
    let z;
    const x = 360;
    let dif = x+1
    let a1 = args[0]
    //console.log(msg2)
    //console.log(args)
   /* try {
      y = msg2[1].substring(0, (msg2[1].length));
    } catch(error) {
      y = 1;
    }
    */
    if (args[0] == '-') {
      y = '-'
      args.shift().slice(1)
    } else if (args[0] == '+') {
      y = '+'
      args.shift().slice(1)
    }
    let mention
    //console.log(`args[0], ${args[0]}`)
    if (msg.mentions.users.first()) {
      mention =  msg.mentions.users.first();
    } else if (args[0] != null) {
      message.guild.fetchMembers().then((guild) => {
        let membersArray = []
        const options = {
          keys: [
            "nickname",
            "username"
          ]
        }
        guild.members.map(m=>{
          let mS = {nickname: m.nickname, username: m.user.username, id: m.user.id}
          membersArray.push(mS)
        })
        let fuse = new Fuse(membersArray, options)
        const nameSearch = args.join(` `)
        var result = fuse.search(nameSearch);
        //result
        //console.log(result[0])
        //mention = message.guild.members.filter(m=>m.user.id==result[0].id)
        mention = message.guild.members.get(result[0].id).user
        console.log(mention)
        //console.log(result[0].id)
        //console.log("mention.id");
        //console.log(mention);
        
      })
    }
    sql.get(`SELECT * FROM user WHERE userId="${msg.author.id}"`).then(row => {
    // console.log(mention);
    try {
      dif = Math.floor((msg.createdTimestamp-row.repDate)/1000/60);
    }
    catch(err) {
      dif = x+1;
    }
    if (dif<x) {
      msg.reply(`Stan Twojej reputacji: **${row.reputation}**, możesz ją przydzielić za ${x-dif}m`);
    }
    else {
      if (mention == null || mention == undefined) {
        //console.log("no elo")
        //console.log(mention)
        msg.reply(`Stan Twojej reputacji: **${row.reputation}**, możesz już ją przydzielić`);
      } else if (mention.id == msg.author.id) {
        msg.reply(`Stan Twojej reputacji: **${row.reputation}**, możesz ją przydzielić komuś **fajnemu**`);
      } else {
        console.log(mention)
        sql.get(`select * from user WHERE userId=${mention.id}`).then(row => {
          if (!row) {
            sql.run(`UPDATE user SET repDate=${msg.createdTimestamp} where userId = ${msg.author.id}`)
            if(y=='-') {
              sql.run(`INSERT INTO user (userId, reputation, repDate, creditsDate, userInfo, credits) VALUES (?, ?, ?, ?, ?, ?)`,
                [mention.id, 0, 0, 0, "", -1]);
              msg.channel.send(`-1 punkt reputacji dla <@${mention.id}>, razem: **${1}**`); 
            } else {
              sql.run(`INSERT INTO user (userId, reputation, repDate, creditsDate, userInfo, credits) VALUES (?, ?, ?, ?, ?, ?)`,
                [mention.id, 0, 0, 0, "", 1]);
              msg.channel.send(`+1 punkt reputacji dla <@${mention.id}> razem: **${1}**`); 
            }
          } else {
            sql.run(`UPDATE user SET repDate=${msg.createdTimestamp} where userId = ${msg.author.id}`)

            if(y=='-') {
              sql.run(`UPDATE user SET reputation=${row.reputation - 1} where userId = ${mention.id}`)
              msg.channel.send(`-1 punkt reputacji dla <@${mention.id}>, razem: **${row.reputation-1}**`); 
            }else {
              sql.run(`UPDATE user SET reputation=${row.reputation + 1} where userId = ${mention.id}`)
              msg.channel.send(`+1 punkt reputacji dla <@${mention.id}> razem: **${row.reputation+1}**`); 
            }
          }
          

        })

      }
    }


    // console.log(dif);
     //console.log(msg.createdTimestamp);
     //console.log(row.repDate);

   });
  },


  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rep","r"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "reputation",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  
