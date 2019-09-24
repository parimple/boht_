
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let msg = message;
    let c = 0;

    let msg2 = message.content.split(' ');
    let y = 0;
    try {
      y = msg2[1].substring(0, (msg2[1].length));
    } catch(error) {
      y = 1;
    }

    sql.all(`SELECT userId, tempScore FROM guild_user WHERE guildId="${msg.guild.id}"
      ORDER BY tempScore DESC LIMIT 10 OFFSET ${10*(y-1)}`).then(rows => {
        var user = '';
        var score = '';
        var sum = '```glsl\n';
        var emb = new Array(10);
        var pos = '';
        var r = 10*y+1;
        rows.forEach(function (row) {
          //console.log(row);
          //console.log(r);
          let n;
          try {
            n = msg.guild.members.get(row.userId).displayName;
          } catch(error) {
            n = "undefined";
          };
          
          if (n != "undefined") {
            sum += `${r-10}. ${row.tempScore} - #${msg.guild.members.get(row.userId).displayName} \n`
          } else { 
            sum += `${r-10}. ${row.tempScore} - #${row.userId} \n`
          };
          r++;
        })
        sum += '```';
        //console.log(emb);
        message.channel.send({
          embed: {
            title: `Miesięczny top ${y*10}`,
            color: client.config.embed_color,
              //description: `kupa`,
//                "footer": {

             //   "text": `ilość osób z rangą aktywnych: ${Math.floor(Math.sqrt(message.guild.memberCount))}`
           //   },

              fields: [

              {
                "name": "pozycja/punkty/użytkownik",
                "value": sum,
                "inline": true
              }

              ],

            //Math.floor(0.1 * Math.sqrt(row.points + 1))
            
          }
        });
      })
  },


  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["tm"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "topmonth",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  
