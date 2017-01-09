
    'use strict';

    var getPrimes = require('../library.js').getPrimes;

    describe("Get Prime Tests ", function() {
        describe("Case for some falsy values", function() {

            it("should return 'Invalid input' for null", function() {
            expect(getPrimes(null)).toEqual('Invalid input');
            });

            it("should return 'Invalid input' for undefined", function() {
            expect(getPrimes(undefined)).toEqual('Invalid input');
            });

            it("should return 'Invalid input' for data types other than number e.g 'test'", function() {
            expect(getPrimes('test')).toEqual('Invalid input');
            });

            it("should return 'Invalid input' for data types other than number e.g [3]", function() {
            expect(getPrimes([3])).toEqual('Invalid input');
            });

            it("should return 'Invalid input' for data types other than number e.g true", function() {
            expect(getPrimes(true)).toEqual('Invalid input');
            });

            it("should return 'Invalid input' for negative values e.g -10", function() {
            expect(getPrimes(-10)).toEqual('Invalid input');
            });

        });

        describe("Case for integers", function() {

            it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ] for 34", function() {
            expect(getPrimes(34)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]);
            });

            it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] for 34", function() {
            expect(getPrimes(50)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
            });

        });

         describe("Case for integers 0 and 1", function() {

            it("should return 'Invalid input' for 0", function() {
            expect(getPrimes(0)).toEqual('Invalid input');
            });

            it("should return 'Invalid input' for 1", function() {
            expect(getPrimes(1)).toEqual('Invalid input');
            });

        });

    });