const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });

    }

    async run(message, args) {
        let roll = Math.floor(Math.random()*20) + 1;
        if (roll == 1){
            message.channel.send(`Critical failure =_=`)
        } else if (roll == 20){
            message.channel.send(`Critical hit~ kyaa ♥~`)
        } else {
            message.channel.send(`You got ${roll}~`)
        }
    }
}

module.exports = DiceRollCommand;