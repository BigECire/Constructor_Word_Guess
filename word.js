var Letter = require("./letter");

var Word = function () {
    this.letters = [];

    for (let i = 0; i < theWord.length; i++) {
        this.letters[i] = new Letter(theWord.charAt(i));
    }

    this.display = function () {
        var displayWord = [];

        for (let i = 0; i < theWord.length; i++) {
            displayWord[i] = this.letters[i].printChar();
        }

        return displayWord.join(" ")
    }
    this.check = function(guess) {
        for (let i = 0; i < theWord.length; i++) {
            this.letters[i].checkGuess(guess);
        }
    }
}

module.exports = Word;