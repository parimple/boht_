
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (message.content.includes('@everyone')) return message.reply("Oszust!")
  if (message.content.includes('@here')) return message.reply("Oszust!")
  if (message.mentions.users.first()) return message.reply("Nie oznaczaj!")
    const sayMessage = args.join(` `);
    let test = sayMessage.replace(/ /g,'')
  message.delete().catch(O_o=>{});
  //message.channel.send(test);

  if (test.includes(".gif")||test.includes(".png")|| test.includes(".gg")||test.includes(".me")||test.includes("https://")||test.includes(".com")||test.includes(".pl")||test.includes(".ly")) return message.reply("Oszust!")
    let msg1 = message;
    let msg2 = message;
    let returntime;
    let timemeasure;
    let msg = message.content.split(' ');
    //console.log(`Message recieved from ${msg2.author.username}`);

    timemeasure = msg[1].substring((msg[1].length - 1), (msg[1].length));
    returntime = msg[1].substring(0, (msg[1].length - 1));

    const time = ['s', 'm', 'h', 'd'];
    if(time.includes(timemeasure)) {
      msg1.channel.send(`Dobrze! Przypomnę za ${returntime}${timemeasure}!`);
      switch (timemeasure) {
        case 's':
        returntime = returntime * 1000;
        break;
        case 'm':
        returntime = returntime * 1000 * 60;
        break;
        case 'h':
        returntime = returntime * 1000 * 60 * 60;
        break;
        case 'd':
        returntime = returntime * 1000 * 60 * 60 * 24;
        break;
        default:
        returntime = returntime * 1000;
        break;
      } 

    } else {
      returntime = timemeasure * 1000 * 60;
      timemeasure = `m`;
      msg1.channel.send(`Dobrze! Przypomnę za ${returntime/1000/60}${timemeasure}!`);
    }
    client.setTimeout(() => {
      msg.shift();
      msg.shift();

      let content = msg.join();
      for (let i of msg) {
        content = content.replace(',', ' ');
        msg[i];
      }
      msg2.reply(content);
      //console.log(`Message sent to ${msg2.author.id}`);
    }, returntime);
  },
  //rand

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rem"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "remind",
    category: "Miscelaneous",
    description: "xxx.",
    usage: "say [...text]"
  };
  
