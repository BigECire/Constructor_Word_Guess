var Letter = function (char) {
    this.char = char;
    this.guessed = false;
    this.printChar = function () {
        if (this.char === " ") {
            return " "
        }
        else if (this.guessed) {
            return this.char
        }
        else {
            return "_"
        }
    };
    this.checkGuess = function (guess) {
        if (guess === this.char) {
            this.guessed = true;
        }
    }
    if (this.char === " ") {
        this.guessed = true;
    }
}

module.exports = Letter;