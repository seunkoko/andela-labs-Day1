
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

            it("should return 'Invalid input' for string e.g 'test'", function() {
            expect(getPrimes('test')).toEqual('Invalid input');
            });

            it("should return 'Invalid input' for negative values e.g -10", function() {
            expect(getPrimes(-10)).toEqual('Invalid input');
            });

        });

    });