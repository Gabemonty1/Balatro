let score = 0;
let sortedHand = []
function calculateScore(scoredHand,currentScore) {
    score = currentScore
    sortedHand = scoredHand
    sortedHand.sort(
        (p1, p2) => 
        (p1.getStraight() > p2.getStraight()) ? 1 : (p1.getStraight() < p2.getStraight()) ? -1 : 0);
    console.log(hand)
    return score;
}

function isFlush() {
    let firstSuit = hand[0].getSuit()
    for (let i = 0; i < hand.length; hand++) {
        if (hand[i].getSuit() != firstSuit) {
            return false
        }
    }
    return true
}
function isStraight() {

}

function whichHand() {
    let rS = countRanks(rankArray);
    if (isFlush() === true && isStraight() === "ROYALSTRAIGHT") {
      return 
    } else if (isFlush() === true && isStraight() === "STRAIGHT") {
      console.log("Straight Flush");
    } else if (Object.keys(rS).find(key => rS[key] === 4)) {
      console.log("Four of a Kind");
    } else if (Object.keys(rS).find(key => rS[key] === 3) && pairs() === 1) {
      console.log("Full House");
    } else if (isFlush() === true) {
      console.log("Flush");
    } else if (isStraight() === "STRAIGHT") {
      console.log("Straight");
    } else if (Object.keys(rS).find(key => rS[key] === 3)) {
      console.log("Three of a Kind");
    } else if (pairs() === 2) {
      console.log("Two Pair");
    } else if (pairs() === 1) {
      console.log("Pair");
    } else {
      console.log("High Card", rankArray[rankArray.length - 1]);
    }
}
