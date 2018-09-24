const SimpleChessAIEngine = require("../utils/simple-chess-ai/script.js");

/**heroku logs --source app
 * Use Simple-Chess-AI.
 */
class SimpleChessAIPlayer {
  getNextMove(moves) {
    const SimpleChessAI = new SimpleChessAIEngine();
    SimpleChessAI.applyMoves(moves);

    this.setDepth(5);

    const bestMoveUCI = SimpleChessAI.search(this.depth);
    return bestMoveUCI;
  }

  setDepth(depth) {
    this.depth = depth;
  }

  getReply(chat) {
    const chatText = chat.text.toLowerCase();

    if (chatText.startsWith("!info")) {
      return "You're playing with Simple-Chess-AI.";
    }
  }
}

module.exports = SimpleChessAIPlayer;
