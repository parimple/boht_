module.exports = async client => {
  // Log that the bot is online.
  
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  sql.run(`CREATE TABLE IF NOT EXISTS user (
    userId TEXT PRIMARY KEY, 
    reputation INTEGER, 
    repDate INTEGER, 
    creditsDate INTEGER, 
    userInfo TEXT, 
    credits INTEGER) without rowid`
    );

  sql.run(`CREATE TABLE IF NOT EXISTS guild (
    guildId TEXT PRIMARY KEY, 
    prefix TEXT, 
    language TEXT) without rowid`
    );

  sql.run(`CREATE TABLE IF NOT EXISTS role (
    roleId TEXT, 
    expireDate INTEGER, 
    role TEXT, 
    guildId TEXT, 
    PRIMARY KEY (roleId, guildId), 
    FOREIGN KEY(guildId) REFERENCES guild(guildId)) without rowid`
    );
  //autorole, active

  sql.run(`CREATE TABLE IF NOT EXISTS guild_user (
    score INTEGER, 
    tempScore INTEGER,  
    userGuildInfo TEXT,  
    userId TEXT,  
    guildId TEXT,
    PRIMARY KEY (userId, guildId),  
    FOREIGN KEY(guildId)  REFERENCES guild(guildId), 
    FOREIGN KEY(userId)  REFERENCES user(userId)) without rowid`
    );
    
  sql.run(`CREATE TABLE IF NOT EXISTS channel (
    channelId TEXT, 
    channel TEXT, 
    active INTEGER, 
    guildId TEXT, 
    PRIMARY KEY (channelId, guildId), 
    FOREIGN KEY(guildId) REFERENCES guild(guildId)) without rowid`
    );

  sql.run(`CREATE TABLE IF NOT EXISTS role_user (
    expireDate INTEGER, 
    userId TEXT, 
    roleId TEXT,  
    active TEXT, 
    guildId TEXT,  
    PRIMARY KEY (userId, roleId, guildId),  
    FOREIGN KEY(roleId, guildId)  REFERENCES role(roleId, guildId), 
    FOREIGN KEY(userId)  REFERENCES user(userId)) without rowid`
    );

  sql.run(`CREATE TABLE IF NOT EXISTS message (
    messageId TEXT, 
    message TEXT, 
    active INTEGER, 
    guildId TEXT, 
    PRIMARY KEY (messageId, guildId), 
    FOREIGN KEY(guildId) REFERENCES guild(guildId)) without rowid`
    );
  
  // Make the bot "play the game" which is the help command with default prefix.
  //client.user.setActivity(`${client.config.defaultSettings.prefix}help`, {type: "PLAYING"});
  client.user.setActivity(`${client.config.defaultSettings.prefix}help || ${client.config.defaultSettings.prefix}invite`, {type: "PLAYING"});
  client.user.setStatus("dnd");
};
