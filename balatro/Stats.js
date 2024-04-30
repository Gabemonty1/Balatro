currentAnte = 1;
currentLevel = 1.0; // 0 is small, 1 is large, 2 is boss
baseScore = 300.0;
handTypeLevelAndCount = []
round = 1;
money = 0;
startingHands = 4;
discards = 3;

function nextRound() {
    if (currentLevel != 1.5) {
        currentLevel++
    } else {
        console.log('No Boss Blinds yet')
    }
    round++;
}
function getScore() {
    return baseScore
}
function getAnte() {
    return currentAnte
}
function anteUp() {
    currentAnte += 1;
    switch(currentAnte) { //Score are arbitrary soooooooooooooooooo
        case 0:
            baseScore = 100.0;
            break;
        case 1:
            baseScore = 300.0;
            break;
        case 2:
            baseScore = 800.0;
            break;
        case 3:
            baseScore = 2800.0;
            break;
        case 4:
            baseScore = 6000.0;
            break;
        case 5:
            baseScore = 11000.0;
            break;
        case 6:
            baseScore = 20000.0;
            break;
        case 7:
            baseScore = 35000.0;
            break;
        case 8:
            baseScore = 50000.0;
            break;
        default:
            baseScore = 1000000000000.0;
    }
    currentLevel = 0;
}