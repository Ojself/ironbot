const LichessApi = require("./LichessApi");
const RobotUser = require("./RobotUser");
const IronBot = require("./bots/IronBot");
const SimpleChessAIPlayer = require("./bots/SimpleChessAIPlayer");

async function startBot(token, player) {
  if (token) {
    const robot = new RobotUser(new LichessApi(token), player);
    const username = (await robot.start()).data.username;
    return `<a href="https://lichess.org/@/${username}">${username}</a> on lichess.</h1>`;
  }
}

async function begin() {
  var links = "<h1>Challenge:</h1>";

  links += await startBot(process.env.API_TOKEN, new SimpleChessAIPlayer());

  // heroku wakeup server (not necessary otherwise)

  const express = require("express");
  const PORT = process.env.PORT || 5000;

  express()
    .get("/", (req, res) => res.send(links))
    .listen(PORT, () => console.log(`Wake up server listening on ${PORT}`));
}

begin();
