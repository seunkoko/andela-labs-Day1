
    /*
    * Get Primes --> gets the prime numbers from 0 to any number used to call the function
    */

    'use strict'
  
    module.exports = {

		getPrimes: function (num) {
			let arrayToReturn = [];
			if((typeof(num) !== 'number') || (num < 2)) {
				return 'Invalid input';
			}	
			for (let i = 2; i <= num; i++) {
				if (isPrime(i)) {
					arrayToReturn.push(i);
				}
			}
			return arrayToReturn;
		}

	}

	function isPrime(num) {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false ;
			}  
		}
		return true;
	}