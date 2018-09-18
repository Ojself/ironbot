const ChessUtils = require("../utils/ChessUtils");

// plays a random, legal move

class IronBot {
  getNextMove(moves) {
    const chess = new ChessUtils();
    chess.applyMoves(moves);
    const legalMoves = chess.legalMoves();
    if (legalMoves.length) {
      return chess.pickRandomMove(legalMoves);
    }
  }

  getReply(chat) {
    return "hi";
  }
}

module.exports = IronBot;
