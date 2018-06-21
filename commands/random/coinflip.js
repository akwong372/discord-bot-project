const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            group: 'random',
            memberName: 'coinflip',
            description: 'Flips a coin for heads/tails'
        });

    }

    async run(message) {
        let roll = Math.floor(Math.random()*2);
        if (roll == 0){
            return message.say(`Heads♪`)
        } else if (roll == 1){
            return message.say(`Tails♪`)
        }
    }
}

module.exports = CoinFlipCommand;