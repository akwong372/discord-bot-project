const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require("./config.json");
const bot = new commando.Client({
    commandPrefix: config.prefix
});

bot.registry.registerGroups([
    ['random', 'Random'],
    ['annoying', 'Chat']
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready', () => {
    console.log('Logged in!');
    bot.user.setActivity('Use `help');
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
        bot.guilds.get(config.maplesyrupGeneralId).channels.get(config.maplesyrupId).send(annoyingArray[rollAnnoy]);
    }, millisTill9);
});

bot.on('message', (message) => {
    let regexpNameSuck = RegExp('bot-? ?chan tell (.*) s?he sucks', 'i');
    if (/hi,? bot-? ?chan!?/i.test(message.toString()) || message.toString().toLowerCase() == 'uguu') {
        if (message.author.id == config.ownerID) {
            message.channel.send(`Hi, master! ♥`);
        } else if (message.author.id !== config.ownerID) {
            message.channel.send(`Hi, ${message.author.username} senpai! ♥`);
        }
    } else if (/bot-? ?chan,? go away!? ?,? ?(ple?a?se?)?/i.test(message.toString())) {
        if (message.author.id == config.ownerID) {
            message.channel.send(`M-master w-why...?`);
        } else if (message.author.id !== config.ownerID) {
            let rollGoAway;
            rollGoAway = Math.floor(Math.random() * 2);
            if (rollGoAway == 0) {
                message.channel.send(`Uguu...`);
            } else if (rollGoAway == 1) {
                message.channel.send(`P-please let me stay...`);
            }
        }
    } else if (/bot-? ?chan,? you'?re (super)? ?(so)? ?(very)? ?(really)? ?(damn)? ?(gross)?(gay)?(dumb)?(retarded)?/i.test(message.toString())) {
        message.channel.send(`:(`);
    } else if (/bot-? ?chan,? what do you think of rem[?]?/i.test(message.toString()) || /bot-? ?chan,? what do you think about rem[?]?/i.test(message.toString()) || /bot-? ?chan,? who'? ?i?s rem[?]?/i.test(message.toString())) {
        if (message.author.id == config.wesleyId) {
            let rollRem1;
            rollRem1 = Math.floor(Math.random() * 2);
            if (rollRem1 == 0) {
                message.channel.send(`Your waifu?`);
            } else if (rollRem1 == 1) {
                message.channel.send(`She seems nice... I guess...`);
            }
        } else if (message.author.id !== config.wesleyId) {
            let rollRem2;
            rollRem2 = Math.floor(Math.random() * 3);
            if (rollRem2 == 0) {
                message.channel.send(`Rem? Who's that?`);
            } else if (rollRem2 == 1) {
                message.channel.send(`Literal trash ♥`);
            } else if (rollRem2 == 2) {
                message.channel.send(`Blue Ram`);
            }
        }
    } else if (/bot-? ?chan!/i.test(message.toString())) {
        if (message.author.id == config.ownerID) {
            message.channel.send(`Master!`);
        } else if (message.author.id !== config.ownerID) {
            message.channel.send(`${message.author.username}!`);
        }
    } else if (/bot-? ?chan,? who'? ?i?s emilia[?]?/i.test(message.toString()) || /bot-? ?chan,? what do you think of emilia[?]?/i.test(message.toString()) || /bot-? ?chan,? what do you think about rem[?]?/i.test(message.toString())) {
        if (message.author.id == config.wesleyId) {
            let rollEmi1;
            rollEmi1 = Math.floor(Math.random() * 3);
            if (roll1 == 0) {
                message.channel.send(`Umm... Nobody ♥`);
            } else if (rollEmi1 == 1) {
                message.channel.send(`Not your waifu?`);
            }
        } else if (message.author.id !== config.wesleyId) {
            let rollEmi2;
            rollEmi2 = Math.floor(Math.random() * 3);
            if (rollEmi2 == 0) {
                message.channel.send(`#1 waifu~`);
            } else if (rollEmi2 == 1) {
                message.channel.send(`Better than blue Ram ♥`);
            } else if (rollEmi2 == 2) {
                message.channel.send(`Subaru made the right choice.`);
            }
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

    } else if (/bot-? ?chan succ gu?(oo)?d[?]?/i.test(message.toString())) {
        let rollSucc;
        rollSucc = Math.floor(Math.random() * 2);
        if (rollSucc == 0) {
            message.channel.send(`U-umm... what?`);
        } else if (rollSucc == 1) {
            message.channel.send(`P-please don't be lewd`);
        }
    } else if (/bot-? ?chan,? who'? ?i?s ?(the)? ?worst?e? ?(gi?rl)? ?(waifu)?[?]?/i.test(message.toString())) {
        let rollWorst;
        rollWorst = Math.floor(Math.random() * 3);
        if (rollWorst == 0) {
            message.channel.send(`Not me~`);
        } else if (rollWorst == 1) {
            message.channel.send(`Re- All waifus are great!`);
        } else if (rollWorst == 2) {
            message.channel.send(`Akemi Homura`);
        }
    } else if (/bot-? ?chan,? who'? ?i?s ?(the)? ?best ?(gi?rl)? ?(waifu)?[?]?/i.test(message.toString())) {
        let rollBest;
        rollBest = Math.floor(Math.random() * 3);
        if (rollBest == 0) {
            message.channel.send(`Hatsune Miku`);
        } else if (rollBest == 1) {
            message.channel.send(`Rem, I guess`);
        } else if (rollBest == 2) {
            message.channel.send(`初音ミク`);
        }
    }
});

// bot.on('voiceStateUpdate', (oldMember, newMember) => {
//     let newUserChannel = newMember.voiceChannel;
//     let oldUserChannel = oldMember.voiceChannel;

//     if (oldUserChannel === undefined && newUserChannel !== undefined && bot.guilds.get(config.maplesyrupId) !== undefined) {
//         // User Joins a voice channel;
//         bot.guilds.get(config.maplesyrupId).channels.get(config.maplesyrupGeneralId).send(`${newMember.user.username} has joined ${newUserChannel.name}! Hi~`);

//     } else if (newUserChannel === undefined && bot.guilds.get(config.maplesyrupId) !== undefined) {
//         // User leaves a voice channel
//         bot.guilds.get(config.maplesyrupId).channels.get(config.maplesyrupGeneralId).send(`${newMember.user.username} has left ${oldUserChannel.name}! Bye~`);
//     }
//})


bot.login(config.token);