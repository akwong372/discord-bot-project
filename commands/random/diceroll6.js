const commando = require('discord.js-commando');

class DiceRoll6Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll6',
            group: 'random',
            memberName: 'roll6',
            description: 'Rolls a d6'
        });

    }

    async run(message) {
        let roll = Math.floor(Math.random()*6) + 1;
        let rollsArray = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i< rollsArray.length; i++){
            if (roll == rollsArray[i]){
                return message.say(`You got ${roll}~`);
            }
        }
    }
}

module.exports = DiceRoll6Command;