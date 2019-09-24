// This event executes when a new guild (server) is joined.

module.exports = (client, guild) => {
  sql.get(`SELECT * FROM guild WHERE guildId ="${guild.id}"`).then(row => {
    if (!row) {
      sql.run(`INSERT INTO guild (guildId, prefix, language) VALUES (?, ?, ?)`,
       [guild.id, ".", "PL"]);
    } 
  })
  client.logger.cmd(`[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);
};
