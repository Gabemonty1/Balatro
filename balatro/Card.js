function buildDeck() { 
    let rank = ''
    let suit = ''
    let deck = []
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
            } else {
                switch(j) {
                    case 1: 
                        rank = "ace";
                        break;
                    case 11:
                        rank = 'jack';
                        break;
                    case 12:
                        rank = 'queen';
                        break;
                    case 13:
                        rank = 'king';
                        break;
                }
            }
            deck.push(new Card(rank,suit,'none','none','none'))
        }
    }
    return deck;
}

function shuffle(deck) {
    deck = deck.sort(() => Math.random() - 0.5);
    return deck
}

//Use the tweens manager to move cards on mouseover/click
class Card {
    //Enhancements : none, gold, lucky, glass, steel, bonus, wild, stone
    //Modifiers : none, foil, poly, holo
    //Seals : none, yellow, purple, red, blue 
    constructor(rank, suit, enhancement, modifier, seal) {
        this.rank = rank
        this.suit = suit
        this.enhancement = enhancement
        this.modifier = modifier
        this.seal = seal
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
}