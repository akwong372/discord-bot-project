const commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new commando.Client();
const config = require("./config.json");

bot.registry.registerGroups([
    ['random', 'Random'],
    ['annoying', 'Chat']
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready', () => {
    console.log('Logged in!');
    bot.user.setActivity('nico nico nii');
});

bot.on('message', (message) => {
    if (message == 'hi bot-chan' || message == 'Hi bot-chan' || message == 'hi bot chan' || message == 'hi bot chan' || message == 'hi, bot-chan' || message == 'Hi, bot-chan' || message == 'uguu'){
        message.channel.send(`Hi, senpai! ♥`);
    }
});

bot.on('voiceStateUpdate', (oldMember, newMember, message) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;
  
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
       // User Joins a voice channel;
       bot.guilds.get('301901938386141187').channels.get('458702916165828608').send(`${newMember.user.username} has joined ${newUserChannel.name}! Hi~`);
  
    } else if(newUserChannel === undefined){
      // User leaves a voice channel
      bot.guilds.get('301901938386141187').channels.get('458702916165828608').send(`${newMember.user.username} has left ${oldUserChannel.name}! Bye~`);
  
    }
  })


bot.login(config.token);