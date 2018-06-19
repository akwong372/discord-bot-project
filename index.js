const commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new commando.Client();

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

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;
  
  
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
        console.log(newMember.user.username);
        console.log(newUserChannel.name);
       // User Joins a voice channel;
  
    } else if(newUserChannel === undefined){
  
      // User leaves a voice channel
  
    }
  })



bot.login('NDU4NDIwNTc4NjEzOTg1MzAw.DgnY-g.9KcAdlqh0CZDwJp4pZm1fOxLGGI');