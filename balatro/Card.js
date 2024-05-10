function buildDeck() { 
    let rank = ''
    let suit = ''
    let deck = []
    let score = 0;
    for (let i = 0; i < 4; i++) {
        switch(i) {
            case 0:
                suit = 'clubs';
                break;
            case 1:
                suit = 'diamonds';
                break;
            case 2:
                suit = 'hearts';
                break;
            case 3: 
                suit = 'spades'
                break;
        }
        for (let j = 1; j < 14; j++) { //starting from one because cards start at one
            if (j > 1 && j < 11) {
                rank = String(j)
                score = parseInt(j)
                straight = parseInt(j)
            } else {
                switch(j) {
                    case 1: 
                        rank = "ace";
                        score = 11;
                        straight = 14;
                        break;
                    case 11:
                        rank = 'jack';
                        score = 10
                        straight = 11
                        break;
                    case 12:
                        rank = 'queen';
                        score = 10
                        straight = 12
                        break;
                    case 13:
                        rank = 'king';
                        score = 10
                        striaght = 13
                        break;
                }
            }
            deck.push(new Card(rank,suit,'none','none','none',score))
        }
    }
    return deck;
}

function shuffle(deck) {
    deck = deck.sort(() => Math.random() - 0.5);
    return deck
}

function drawFromDeck(handSize,scene) {
    let undrawn = checkRemainingDeck()
    let cardsDrawn = []
    if (undrawn > handSize) {
        handsize = undrawn
    }
    for (let i = 1; i <= handSize; i++) {
        let card = null
        try {
            card = scene.load.image(deck[deckPosition+i].getName(),'assets/cards/' + deck[deckPosition+i].getName() + ".svg")
            .setInteractive()
            .on('pointerover', () => console.log("over"))
            .on('pointerdown', () => card.setPosition(card.x+(card.x/5),card.y))
        }
        catch {
            console.log("Image already exists or failed to load")
        }
        try {
            cardsDrawn.push(deck[deckPosition+i])
        } catch{
            console.log("Fix this silly")
        }
    }
    return cardsDrawn
}

//Use the tweens manager to move cards on mouseover/click
class Card {
    //Enhancements : none, gold, lucky, glass, steel, bonus, wild, stone
    //Modifiers : none, foil, poly, holo
    //Seals : none, yellow, purple, red, blue 
    constructor(rank, suit, enhancement, modifier, seal, score, straight) {
        this.rank = rank
        this.suit = suit
        this.enhancement = enhancement
        this.modifier = modifier
        this.seal = seal
        this.drawn = false
        this.isSelected = false
        this.score = score
        this.straight = straight
    }
    changeRank(newRank) {
        this.rank = newRank
    }
    changeSuit(newSuit) {
        this.suit = newSuit
    }
    changeEnhancement(newEnhancement) {
        this.enhancement = newEnhancement
    }
    changeModifier(newModifier) {
        this.modifier = newModifier
    }
    changeSeal(newSeal){
        this.seal = newSeal
    }
    changeDrawn(status){
        this.drawn = status 
    }
    changeSelected(state) {
        this.isSelected = state
    }
    getRank() {
        return this.rank
    }
    getSuit() {
        return this.suit
    }
    getEnhancement() {
        return this.enhancement
    }
    getModifier() {
        return this.modifier
    }
    getSeal() {
        return this.seal
    }
    getName() {
        return this.rank + "_of_" + this.suit;
    }
    getSelected() {
        return this.isSelected
    }
    getScore() {
        return this.score
    }
    getStraight() {
        return this.straight
    }
}