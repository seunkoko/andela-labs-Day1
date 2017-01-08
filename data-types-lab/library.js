	/*
    * Data Types Lab --> http://labs.andela.com/labs/data-types-lab
    */

    'use strict'
  
    module.exports = {

		dataTypes: function (param) {
            if ((param === null) || (typeof param === 'undefined')) {
                return "no value";
            } else if (typeof param === 'number') {
                if (param < 100) {
                    return "less than 100";
                } else if (param > 100) {
                    return "more than 100";
                } else {
                    return "equal to 100";
                }
            } else if (typeof param === 'string') {
                return param.length;
            } else if (typeof param === 'object') {
                return param[2];
            } else if (typeof param === 'function') {
                return testFunction(true);
            } else if (typeof param === 'boolean' ) {
                return param;
            } else {
				return "some other value";
			}
		},

	}

	function testFunction(arg) {
		if(arg === true) {
            return 'called callback';
        }
	}
