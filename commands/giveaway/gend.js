const Command = require(`${process.cwd()}/base/Command.js`);

class gend extends Command {
  constructor(client) {
    super(client, {
      name: "gend",
      description: "ends the giveaway",
      usage: "gend <[messageID]>",
      aliases: [],
      permLevel: 2
    });
  }

  async run(bot, msg, args, level) {
    var currentGiveaways = (msg.guild.giveaways) ? msg.guild.giveaways : [];
    if (args[0] && !isNaN(args[0])) {
      for (var i = 0; i < currentGiveaways; i++) {
        if (currentGiveaways[i].giveaway.id == args[0]){
          clearTimeout(currentGiveaways[i].timer);
          currentGiveaways[i].finishGiveaway();
          return msg.reply(`successfully ended ${args[0]} giveaway`);
        }
      }
    } else {
      var giveaway = currentGiveaways[currentGiveaways.length - 1];
      clearTimeout(giveaway.timer);
      giveaway.finishGiveaway();
      return msg.reply(`successfully ended ${giveaway.giveaway.id} giveaway`);
    }
  }
}

module.exports = gend;
