// This event executes when a new member joins a server. Let's welcome them!

module.exports = (client, member) => {
  // Load the guild's settings
  const settings = client.getSettings(member.guild.id);

  // If welcome is off, don't proceed (don't welcome the user)
  //if (settings.welcomeEnabled !== "true") return;

  // Replace the placeholders in the welcome message with actual data
  //const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag);

  // Send the welcome message to the welcome channel
  // There's a place for more configs here.
  //member.guild.channels.find(c => c.name === settings.welcomeChannel).send(welcomeMessage).catch(console.error);

  const name2 = member.user.username;
  const name = member.user.username.replace(/ /g,'').toLowerCase();
  //member.guild.get('channelID').send(`Witaj na serwerze **${member.user.username}**'`);

  sql.get(`SELECT userId FROM user WHERE userId ="${member.user.id}"`).then(row => {
    if (!row) {
      sql.run(`INSERT INTO user (userId, reputation, repDate, creditsDate, userInfo, credits) VALUES (?, ?, ?, ?, ?, ?)`,
       [member.user.id, 0, 0, 0, "", 0]);
      sql.run(`INSERT INTO guild_user (score, tempScore, userGuildInfo, userId, guildId) VALUES (?, ?, ?, ?, ?)`,
       [0, 0, "", member.user.id, member.guild.id]);
      console.log("dziala bez niczego");
    }
    sql.get(`SELECT * FROM guild_user WHERE guildId ="${member.guild.id}" AND userId ="${member.user.id}"`).then(row => {
      if (!row) {
        sql.run(`INSERT INTO guild_user (score, tempScore, userGuildInfo, userId, guildId) VALUES (?, ?, ?, ?, ?)`,
         [0, 0, "", member.user.id, member.guild.id]);
        console.log("dziala tylko dla guser");
      } 
    }).catch(() => {
      console.error;
    });

  }).catch(() => {
    console.error;
  });
  client.logger.cmd(`[MEMBER ADD] ${member.user.username} (${member.guild.name})`);
};