module.exports = async (client, message) => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
	if (message.guild.id == '264445053596991498' || message.guild.id == '110373943822540800') return;
	if (message.author.bot) return;
	
  if (message.channel.type == "dm") return;
  // Grab the settings for this server from Enmap.
  // If there is no guild, get default conf (DMs)
  const settings = message.settings = client.getSettings(message.guild.id);

  // Checks if the bot was mentioned, with no message after it, returns the prefix.
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    //return message.reply(`My prefix on this guild is \`${settings.prefix}\``);
    return message.reply(`siema :D`)
  }

 const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
 //console.log(args);
  const command = args.shift().toLowerCase();
  if (message.guild && !message.member) await message.guild.fetchMember(message.author);

  sql.get(`SELECT * FROM user WHERE userId =${message.author.id}`).then(row => {
    if (!row) {
      sql.run(`INSERT INTO user (userId, reputation, repDate, creditsDate, userInfo, credits) VALUES (?, ?, ?, ?, ?, ?)`, 
        [message.author.id, 0, 0, 0, "", 0]);
    }
  })

  sql.get(`SELECT * FROM guild_user where userId ="${message.author.id}" AND guild_user.guildId="${message.guild.id}"`)
  .then(row => {
    if (!row) {
      sql.run(`INSERT INTO guild_user (guildId, userId, score, tempScore, userGuildInfo) VALUES (?, ?, ?, ?, ?)`, 
        [message.guild.id, message.author.id, 1, 1, ""]);
       //await Math.floor(0.1 * Math.sqrt(row.points + 1));

     } else if (args.length > 2) {

      sql.run(`UPDATE guild_user SET score = ${row.score + 1}, tempScore = ${row.tempScore + 1}
        WHERE userId = ${message.author.id} AND guildId = ${message.guild.id}`)
      .catch(() => {
        sql.run(`INSERT INTO guild_user (guildId, userId, score, tempScore, userGuildInfo) VALUES (?, ?, ?, ?, ?)`, 
          [message.guild.id, message.author.id, 1, 1, ""]);
      });

    }

  })

  if (message.content.indexOf(settings.prefix) !== 0) return;
  const level = client.permlevel(message);

  // Check whether the command, or alias, exist in the collections defined
  // in app.js.
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  // using this const varName = thing OR otherthign; is a pretty efficient
  // and clean way to grab one of 2 values!
  if (!cmd) return;

  message.author.permLevel = level;
  //console.log(args) 
 /* message.flags = [];
  while (args[0] && args[0][0] === "-") {
 //  while (args[0]) {
    message.flags.push(args.shift().slice(1));
  }*/
  // If the command exists, **AND** the user has permission, run it.
  client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
  //console.log(args)
  cmd.run(client, message, args, level);
};
