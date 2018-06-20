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
    if (message.toString().toString().toLowerCase() == 'hi bot-chan' || message.toString().toLowerCase() == 'hi bot chan' || message.toString().toLowerCase() == 'hi, bot-chan' || message.toString().toLowerCase() == 'uguu') {
        if (message.author.id == config.ownerID) {
            message.channel.send(`Hi, master! ♥`);
        } else if (message.author.id !== config.ownerID){
            message.channel.send(`Hi, senpai! ♥`);
        }
    } else if (message.toString().toLowerCase() == `bot chan go away` || message.toString().toLowerCase() == `bot-chan go away`) {
        if (message.author.id == config.ownerID) {
            message.channel.send(`M-master w-why...?`);
        } else if (message.author.id !== config.ownerID){
            message.channel.send(`uguu...`);
        }
    } else if (message.toString().toLowerCase() == `bot-chan you're so gross` || message.toString().toLowerCase() == `bot-chan you're gross` || message.toString().toLowerCase() == `bot chan you're gross` || message.toString().toLowerCase() == `bot-chan you're really gross` || message.toString().toLowerCase() == `bot chan you're really gross` || message.toString().toLowerCase() == `bot-chan you're super gross` || message.toString().toLowerCase() == `bot chan you're super gross`) {
        message.channel.send(`:(`);
    } else if (message.toString().toLowerCase() == `bot chan what do you think of rem` || message.toString().toLowerCase() == `bot-chan what do you think of rem` || message.toString().toLowerCase() == `bot chan what do you think of rem?` || message.toString().toLowerCase() == `bot-chan what do you think of rem?` || message.toString().toLowerCase() == `bot chan, what do you think of rem?` || message.toString().toLowerCase() == `bot-chan, what do you think of rem?`){
        let roll;
        roll = Math.floor(Math.random()*3);
        if (roll == 0){
            message.channel.send(`Who's Rem?`);
        } else if (roll == 1){
            message.channel.send(`Literal trash ♥`);
        } else if (roll == 2){
            message.channel.send(`Blue Ram`);
        }
    } else if (message.toString().toLowerCase() == `bot chan!` || message.toString().toLowerCase() == `bot-chan!`){
        if (message.author.id == config.ownerID) {
            message.channel.send(`Master!`);
        } else if (message.author.id !== config.ownerID){
            message.channel.send(`${message.author.username}!`);
        }
    } else if (message.toString().toLowerCase() == `bot chan who is emilia`|| message.toString().toLowerCase() == `bot-chan who is emilia` || message.toString().toLowerCase() == `bot chan who is emilia?` || message.toString().toLowerCase() == `bot-chan who is emilia?` || message.toString().toLowerCase() == `bot chan what do you think of emilia` || message.toString().toLowerCase() == `bot-chan what do you think of emilia` || message.toString().toLowerCase() == `bot chan what do you think of emilia?` || message.toString().toLowerCase() == `bot-chan, what do you think of emilia?`){
        let rollE;
        rollE = Math.floor(Math.random()*3);
        if (rollE == 0){
            message.channel.send(`#1 waifu~`);
        } else if (rollE == 1){
            message.channel.send(`Better than blue Ram ♥`);
        } else if (rollE == 2){
            message.channel.send(`Subaru made the right choice.`);
        }
    }
});

bot.on('voiceStateUpdate', (oldMember, newMember, message) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;

    if (oldUserChannel === undefined && newUserChannel !== undefined) {
        // User Joins a voice channel;
        bot.guilds.get('301901938386141187').channels.get('458702916165828608').send(`${newMember.user.username} has joined ${newUserChannel.name}! Hi~`);

    } else if (newUserChannel === undefined) {
        // User leaves a voice channel
        bot.guilds.get('301901938386141187').channels.get('458702916165828608').send(`${newMember.user.username} has left ${oldUserChannel.name}! Bye~`);

    }
})


bot.login(config.token);