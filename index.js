const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const {userAccount} = require("sphinx-run");
const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({ checkUpdate: false });
new userAccount(client, Discord).autoReaction({
channel: "1154409160918704228",
user: "297244781392822272",
timeout: 5000,
customBotId: ['824119071556763668','294882584201003009','894633316010066032',],
blacklistedwords: ["tokens", "auto"]
})

client.login(process.env.token)