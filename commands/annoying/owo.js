const commando = require('discord.js-commando');

class ChatCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'owo',
            group: 'annoying',
            memberName: 'owo',
            description: 'Random annoying reply messages.'
        });
    }

     async run(message) {
        let roll = Math.floor(Math.random()*8) + 1;
        if (roll == 1){
            message.channel.send(`H-hewooo....`);
        } else if (roll == 2){
            message.channel.send(`*fidgets*`);
        } else if (roll == 3){
            message.channel.send(`*sweats nervously*`); 
        } else if (roll == 4){
            message.channel.send(`Uguu`);
        } else if (roll == 5){
            message.channel.send(`S-senpai..?`);
        } else if (roll == 6){
            message.channel.send(`A-am I kawaii?`);
        } else if (roll == 7){
            message.channel.send(`Please be gentle...`);  
        } else {
            message.channel.send(`お前はもう死んでいる`);
        }
    }
}

module.exports = ChatCommand;