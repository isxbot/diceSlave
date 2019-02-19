const Discord = require('discord.io');
const config = require('./config.json');
const prefix = '!';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var bot = new Discord.Client({
    token: config.token,
    autorun: true
});

bot.on('ready', function(evt) {
    console.log('Ready!');
});

bot.on('message', function(user, userID, channelID, message, evt) {
    // Lets the bot listen for commands.
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == prefix) {
        if(message == "!help"){
            bot.sendMessage({
                to: channelID,
                message: "**`=====================================\nd4 | d6 | d8 | d10 | d12 | d20 | d100\n=====================================\n\nCall a single die like this, !d20, or call multiple like this, !3d6.`**"
            });
        }
        var delimit = message.indexOf('d', 1);
        var numberOfDice = message.substring(1, delimit).match(/\d+/);
        if (!numberOfDice) {
            numberOfDice = 1;
        }
        var args = message.substring(delimit).split(' ');
        var cmd = args[0];
        var allRolls = "";
        var currentDie;
        var result = 0;
        args = args.splice(1);
        switch (cmd) {
            // !d20
            case 'd20':
                for(i = 0; i < numberOfDice; i++){
                    currentDie = getRandomInt(1, 21);
                    result += currentDie;
                    if(numberOfDice > 1){
                        allRolls += currentDie + " => " 
                    }
                }
                bot.sendMessage({
                    to: channelID,
                    message: "**`" + allRolls.slice(0, -3) + " :  " + result + "`**"
                });
                break;
            // !d100
            case 'd100':
                for(i = 0; i < numberOfDice; i++){
                    currentDie = getRandomInt(1, 101);
                    result += currentDie;
                    if(numberOfDice > 1){
                        allRolls += currentDie + " => " 
                    }
                }
                bot.sendMessage({
                    to: channelID,
                    message: "**`" + allRolls.slice(0, -3) + " :  " + result + "`**"
                });
                break;
            // !d8    
            case 'd8':
                for(i = 0; i < numberOfDice; i++){
                    currentDie = getRandomInt(1, 9);
                    result += currentDie;
                    if(numberOfDice > 1){
                        allRolls += currentDie + " => " 
                    }
                }
                bot.sendMessage({
                    to: channelID,
                    message: "**`" + allRolls.slice(0, -3) + " :  " + result + "`**"
                });
                break;
            // !d4
            case 'd4':
                for(i = 0; i < numberOfDice; i++){
                    currentDie = getRandomInt(1, 5);
                    result += currentDie;
                    if(numberOfDice > 1){
                        allRolls += currentDie + " => " 
                    }
                }
                bot.sendMessage({
                    to: channelID,
                    message: "**`" + allRolls.slice(0, -3) + " :  " + result + "`**"
                });
                break;
            // !d12
            case 'd12':
                for(i = 0; i < numberOfDice; i++){
                    currentDie = getRandomInt(1, 13);
                    result += currentDie;
                    if(numberOfDice > 1){
                        allRolls += currentDie + " => " 
                    }
                }
                bot.sendMessage({
                    to: channelID,
                    message: "**`" + allRolls.slice(0, -3) + " :  " + result + "`**"
                });
                break;
            // !d10
            case 'd10':
                for(i = 0; i < numberOfDice; i++){
                    currentDie = getRandomInt(1, 11);
                    result += currentDie;
                    if(numberOfDice > 1){
                        allRolls += currentDie + " => " 
                    }
                }
                bot.sendMessage({
                    to: channelID,
                    message: "**`" + allRolls.slice(0, -3) + " :  " + result + "`**"
                });
                break;
            // !d6    
            case 'd6':
                for(i = 0; i < numberOfDice; i++){
                    currentDie = getRandomInt(1, 7);
                    result += currentDie;
                    if(numberOfDice > 1){
                        allRolls += currentDie + " => " 
                    }
                }
                bot.sendMessage({
                    to: channelID,
                    message: "**`" + allRolls.slice(0, -3) + " :  " + result + "`**"
                });
                break;
                // Add case commands after here.
        }
    }
});