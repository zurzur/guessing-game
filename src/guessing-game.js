class GuessingGame {


    constructor() {
    	this.minimum;
    	this.maximum;
    	this.guessedNumber;	
    }

    setRange(min, max) {
		this.minimum = min;
		this.maximum = max;
    }

    guess() {
    	this.guessedNumber = parseInt( (this.minimum + this.maximum + 1) / 2 );
    	return this.guessedNumber;
  	}

    lower() {
		this.maximum = this.guessedNumber;
    }

    greater() {
		this.minimum = this.guessedNumber;
    }


}

module.exports = GuessingGame;
