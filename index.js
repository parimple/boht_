const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
// const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();

sql = require(`sqlite`);
sql.open(`./data/boht.sqlite`);
client.config = require("./config.js");
client.logger = require("./modules/Logger");

require("./modules/functions.js")(client);

client.commands = new Enmap();
client.aliases = new Enmap();

client.settings = new Enmap({name: "settings"});

const init = async () => {
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });

  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }
/*
  Music.start(client, {
    youtubeKey: client.config.youtubeKey,
    botPrefix: client.config.prefix,
    //prefix: ".",
    //leaveAlt: ["dj", "DJ"],
    //embedColor: config.embed_color_h,
    global: false,
    anyoneCanSkip: true,
    anyoneCanPause: true,
    anyoneCanLeave: true,
    anyoneCanJoin: true,
    anyoneCanAdjust: true,
    maxQueueSize: 150,
    messageHelp: false
    //helpCmd: "help"
  });
*/
  // Here we login the client.
  client.login(client.config.token);
};


init();