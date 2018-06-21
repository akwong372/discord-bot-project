const commando = require('discord.js-commando');

class DiceRoll20Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll20',
            group: 'random',
            memberName: 'roll20',
            description: 'Rolls a d20'
        });

    }

    async run(message) {
        let roll = Math.floor(Math.random()*20) + 1;
        if (roll == 1){
            return message.say(`Critical failure =_=`)
        } else if (roll == 20){
            return message.say(`Critical hit~ kyaa ♥~`)
        } else {
            return message.say(`You got ${roll}~`)
        }
    }
}

module.exports = DiceRoll20Command;