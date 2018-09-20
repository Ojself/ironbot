const ChessUtils = require("../utils/ChessUtils");

/**
 * Pick a random legal move but prefer mates, checks and captures.
 */
class PatzerPlayer {
  getNextMove(moves) {
    const chess = new ChessUtils();
    chess.applyMoves(moves);
    const legalMoves = chess.legalMoves();
    const forcing = chess.filterForcing(legalMoves);
    const captures = legalMoves.filter(move => /x/.test(move.san));

    if (forcing.length) {
      console.log(chess.pickRandomMove(forcing));
      return chess.pickRandomMove(forcing);
    }

    if (captures.length) {
      console.log(chess.pickRandomMove(captures));
      return chess.pickRandomMove(captures);
    }

    if (legalMoves.length) {
      console.log(chess.pickRandomMove(legalMoves));
      return chess.pickRandomMove(legalMoves);
    }
  }

  getReply(chat) {
    return "hi";
  }
}

module.exports = PatzerPlayer;
