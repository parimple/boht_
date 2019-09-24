// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS


// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.
const Discord = require("discord.js");
//const Embed = new Discord.RichEmbed()
const Fuse = require("fuse.js")
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	if(message.author.id=="519141748325482506"){
	return message.reply(";)")
		
	}
    //let embed = new Discord.RichEmbed()
    if(message.mentions.members.first()) {
        //let avatar = new Discord.RichEmbed()
    var embed = new Discord.RichEmbed()
    .setTitle(`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`[avatar url](${message.mentions.members.first().user.avatarURL})`)
    .setImage(message.mentions.members.first().user.avatarURL)
    .setColor(client.config.embed_color_h)
    message.channel.send(embed);
    return

        //return message.channel.send(embed)
        //message.channel.send(message.mentions.members.first().user.avatarURL); 
        
      }
      if (args != '') {
        console.log("no jestem tu")
        const nameSearch = args.join(` `)
        message.guild.fetchMembers().then((guild) => {
          let membersArray = []
          const options = {
            keys: [
              "nickname",
              "username"
            ]
          }
          guild.members.map(m=>{
            let mS = {nickname: m.nickname, username: m.user.username, avatarURL: m.user.avatarURL, discriminator: m.user.discriminator}
            membersArray.push(mS)
          })
          let fuse = new Fuse(membersArray, options)
          var result = fuse.search(nameSearch);
          try {
            var embed = new Discord.RichEmbed()
            .setTitle(`${result[0].username}#${result[0].discriminator}`)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(`[avatar url](${result[0].avatarURL})`)
            .setImage(result[0].avatarURL)
            .setColor(client.config.embed_color_h)
            message.channel.send(embed);
            return

            //message.channel.send(result[0].avatarURL);

          } catch (err) {
            var embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}#${message.author.discriminator}`)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(`[avatar url](${message.author.avatarURL})`)
            .setImage(message.author.avatarURL)
            .setColor(client.config.embed_color_h)
            message.channel.send(embed);
          }
          
        }) 
      }
      else {
        var embed = new Discord.RichEmbed()
            .setTitle(`${message.author.username}#${message.author.discriminator}`)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(`[avatar url](${message.author.avatarURL})`)
            .setImage(message.author.avatarURL)
            .setColor(client.config.embed_color_h)
            message.channel.send(embed);
        }
      },
    //boht info

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["a"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "avatar",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  
