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
    let now = new Date();
    const annoyingArray = [`Wes-tan stop being a lolicon ☆⌒(*＾∇ﾟ)v ！`,
        `wessuuu~ stop touching little girls like me ˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚`,
        `Wes-chan rn  ->  ԅ(¯﹃¯ԅ)ｲﾋﾋ`,
        `…:(´；Д；｀): P-please... Not the lolis.... W-wes no...`,
        `Wesley ( •́ㅿ•̀ ):sweat_drops: we're worried about your loli tendencies`,
        `Wes... she's only 10... =͟͟͞(๑º ﾛ º๑)`];
    let millisTill9 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 0, 0, 0) - now;
    if (millisTill9 < 0) {
        millisTill9 += 86400000; // if it's after 9pm, try 24h later.
    }
    setTimeout(function () {
        let rollAnnoy;
        rollAnnoy = Math.floor(Math.random() * annoyingArray.length);
        bot.guilds.get(config.baeGeneralId).channels.get(config.baeId).send(annoyingArray[rollAnnoy]);
    }, millisTill9);
});

bot.on('message', (message) => {
    let regexpNameSuck = RegExp('bot-? ?chan tell (.*) s?he sucks', 'i');
    if (/hi,? bot-? ?chan!?/i.test(message.toString()) || message.toString().toLowerCase() == 'uguu') {
        if (message.author.id == config.ownerID) {
            message.channel.send(`Hi, master! ♥`);
        } else if (message.author.id !== config.ownerID) {
            message.channel.send(`Hi, senpai! ♥`);
        }
    } else if (/bot-? ?chan,? go away!? ?,? ?(ple?a?se?)?/i.test(message.toString())) {
        if (message.author.id == config.ownerID) {
            message.channel.send(`M-master w-why...?`);
        } else if (message.author.id !== config.ownerID) {
            message.channel.send(`uguu...`);
        }
    } else if (/bot-? ?chan,? you'?re (super)? ?(so)? ?(very)? ?(really)? ?(damn)? ?gross/i.test(message.toString())) {
        message.channel.send(`:(`);
    } else if (/bot-? ?chan,? what do you think of rem[?]?/i.test(message.toString()) || /bot-? ?chan,? what do you think about rem[?]?/i.test(message.toString())) {
        let rollRem;
        rollRem = Math.floor(Math.random() * 3);
        if (roll == 0) {
            message.channel.send(`Who's Rem?`);
        } else if (rollRem == 1) {
            message.channel.send(`Literal trash ♥`);
        } else if (rollRem == 2) {
            message.channel.send(`Blue Ram`);
        }
    } else if (/bot-? ?chan!/i.test(message.toString())) {
        if (message.author.id == config.ownerID) {
            message.channel.send(`Master!`);
        } else if (message.author.id !== config.ownerID) {
            message.channel.send(`${message.author.username}!`);
        }
    } else if (/bot-? ?chan,? who is emilia[?]?/i.test(message.toString()) || /bot-? ?chan,? what do you think of emilia[?]?/i.test(message.toString()) || /bot-? ?chan,? what do you think about rem[?]?/i.test(message.toString())) {
        let rollEmi;
        rollEmi = Math.floor(Math.random() * 3);
        if (rollE == 0) {
            message.channel.send(`#1 waifu~`);
        } else if (rollEmi == 1) {
            message.channel.send(`Better than blue Ram ♥`);
        } else if (rollEmi == 2) {
            message.channel.send(`Subaru made the right choice.`);
        }
    } else if (/bot-? ?chan,? (go)? ?die ?(ple?a?se?)?/i.test(message.toString())) {
        let rollDie;
        rollDie = Math.floor(Math.random() * 2);
        if (rollDie == 0) {
            message.channel.send(`S-stop bullying me...`);
        } else if (rollDie == 1) {
            message.channel.send(`N-nooo...`);
        }
    } else if (/bot-? ?chan sucks/i.test(message.toString())) {
        let rollSuck;
        rollSuck = Math.floor(Math.random() * 3);
        if (rollSuck == 0) {
            message.channel.send(`N-no I don't!`);
        } else if (rollSuck == 1) {
            message.channel.send(`Please stop being mean...`);
        } else if (rollSuck == 2) {
            message.channel.send(`I-i'm sorry, senpai!`);
        }
    } else if (regexpNameSuck.test(message.toString())) {
        let insultDmArray = regexpNameSuck.exec(message.toString());
        let usernamesArray = bot.users.map(u => u.username.toLowerCase());
        let userIdArray = bot.users.map(u => u.id);
        if (usernamesArray.indexOf(insultDmArray[1].toLowerCase()) >= 0) {
            message.channel.send(`Okay~`);
            for (let i = 0; i < usernamesArray.length; i++) {
                if (usernamesArray[i] == insultDmArray[1]) {
                    bot.users.get(userIdArray[i]).send("You suck ♥");
                }
            }
        } else if (usernamesArray.indexOf(insultDmArray[1].toLowerCase()) < 0) {
            message.channel.send(`There's no one here with that username... baka...`);
        }
    } else if (/bot-? ?chan,? say hi.?!?/i.test(message.toString())) {
        let rollHi;
        rollHi = Math.floor(Math.random() * 2);
        if (rollHi == 0) {
            message.channel.send(`H-hewo...`);
        } else if (rollHi == 1) {
            message.channel.send(`Hi ♪~`);
        }

    }
});

// bot.on('voiceStateUpdate', (oldMember, newMember) => {
//     let newUserChannel = newMember.voiceChannel;
//     let oldUserChannel = oldMember.voiceChannel;

//     if (oldUserChannel === undefined && newUserChannel !== undefined && bot.guilds.get(config.baeId) !== undefined) {
//         // User Joins a voice channel;
//         bot.guilds.get(config.baeId).channels.get(config.baeGeneralId).send(`${newMember.user.username} has joined ${newUserChannel.name}! Hi~`);

//     } else if (newUserChannel === undefined && bot.guilds.get(config.baeId) !== undefined) {
//         // User leaves a voice channel
//         bot.guilds.get(config.baeId).channels.get(config.baeGeneralId).send(`${newMember.user.username} has left ${oldUserChannel.name}! Bye~`);
//     }
//})


bot.login(config.token);