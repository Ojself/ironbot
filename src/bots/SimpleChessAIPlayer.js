const SimpleChessAIEngine = require("../utils/simple-chess-ai/script.js");

/**
 * Use Simple-Chess-AI.
 */
class SimpleChessAIPlayer {
  getNextMove(moves) {
    const SimpleChessAI = new SimpleChessAIEngine();
    SimpleChessAI.applyMoves(moves);

    this.setDepth(3);

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
