const Discord = require('discord.js');
const WebSocket = require("ws");
const { token } = require('./config.json');
const client = new Discord.Client();

const wss = new WebSocket.Server({ port:8882 });

client.on('ready', () => {
    console.log(`${client.user.username} logged`);
    client.user.setActivity('Waiting for connection');
})

wss.on("connection", ws => {
        console.log("New Client Connected!");
        
        ws.on("message", data => {
            console.log(`Client has send us : ${data}`);
            client.user.setActivity('YOU', ({type: "WATCHING"}));
            client.on('message', message => {
                console.log(`${message.author.avatarURL()} ${message.author.username} ${message.channel.name} ${message.content}`);
            ws.send(`${message.author.avatarURL()} ${message.author.username} ${message.channel.name} ${message.content}`);            
        });
        ws.on("close", () => {
            console.log("Client has disconnected!");
        });
    });
});        
client.login(token);