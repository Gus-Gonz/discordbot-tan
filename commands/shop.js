const Discord = require("discord.js");

module.exports = {
  run: async (discord, bot, message, args) => {
    let botembed = new discord.MessageEmbed()
      .setDescription(`**[Click Here](https://sellix.io/BestBelieveAcc)**`)
      .addField(
        `You can check out Tan shop link at`,
        `https://sellix.io/BestBelieveAcc`
      )
      .setColor("0x36393E")
      .setFooter(`© 2021 ${bot.user.username}`, bot.user.displayAvatarURL);
    message.channel.send(botembed);
  },
  name: "shop",
  description: "Tan' shop",
};
