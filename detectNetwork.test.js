/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    } 
  });

  // var expect = chai.expect;

  // it('has a prefix of 38 and a length of 14', function() {
  //   expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  // });
 
  // it('has a prefix of 39 and a length of 14', function() {
  //   expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  // });

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });

  // var expect = chai.expect;

  // it('has a prefix of 34 and a length of 15', function() {
  //   expect(detectNetwork('343456789012345')).to.equal('American Express');
  // });
 
  // it('has a prefix of 37 and a length of 15', function() {
  //   expect(detectNetwork('373456789012345')).to.equal('American Express');
  // });
 

});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });

  var expect = chai.expect;
 
  // it('has a prefix of 4 and a length of 13', function() {
  //   expect(detectNetwork('4123456789012')).to.equal('Visa');
  // });
 
  // it('has a prefix of 4 and a length of 16', function() {
  //   expect(detectNetwork('4123456789012345')).to.equal('Visa');
  // });
 
  // it('has a prefix of 4 and a length of 19', function() {
  //   expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  // });

  it('has a prefix of 4903 and a length of 13', function() {
    expect(detectNetwork('4903456789012')).to.equal('Visa');
  });

  it('has a prefix of 4905 and a length of 13', function() {
    expect(detectNetwork('4905456789012')).to.equal('Visa');
  });

  it('has a prefix of 4911 and a length of 13', function() {
    expect(detectNetwork('4911456789012')).to.equal('Visa');
  });

  it('has a prefix of 4936 and a length of 13', function() {
    expect(detectNetwork('4936456789012')).to.equal('Visa');
  });

});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both.

  // var should = chai.should();
  
  // it('has a prefix of 54 and a length of 16', function() {
  //   detectNetwork('5412345678901234').should.equal('MasterCard');
  // });
 
  // it('has a prefix of 55 and a length of 16', function() {
  //   detectNetwork('5512345678901234').should.equal('MasterCard');
  // })
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  var filler = "12345678901234567890";

  var disc = {
    prefix: ["6011", "65"],
    prefix1: 644,
    prefix2: 649,
    length: [16, 19]
  };

  // for prefix array values and length array values
  for (var i = 0; i < disc.prefix.length; i++) {
    for (var j = 0; j < disc.length.length; j++) {  
      // wrap it() inside an IIFE to create closure to preserve values i and j
      (function(i, j) {
        it('has a prefix of ' + disc.prefix[i] + ' and a length of ' + disc.length[j], function() {
          expect(detectNetwork(disc.prefix[i] + filler.substr(0, disc.length[j] - disc.prefix[i].length))).to.equal('Discover');
        });
      })(i, j);
    }
  }

  // for range of prefix1 to prefix2 and length array values
  for (var i = disc.prefix1; i <= disc.prefix2; i++) {
    for (var j = 0; j < disc.length.length; j++) {  
      /// wrap it() inside an IIFE to create closure to preserve values i and j
      (function(i, j) {
        it('has a prefix of ' + i + ' and a length of ' + disc.length[j], function() {
          expect(detectNetwork(i + filler.substr(0, disc.length[j] - String(i).length))).to.equal('Discover');
        });
      })(i, j);
    }
  }
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  var filler = "12345678901234567890";

  var maestro = {
    prefix: ["5018", "5020", "5038", "6304"],
    length1: 12,
    length2: 19
  };

  // for prefix array values
  for (var i = 0; i < maestro.prefix.length; i++) {
    for (var j = maestro.length1; j <= maestro.length2; j++) {  
      // wrap it() inside an IIFE to create closure to preserve values i and j
      (function(i, j) {
        it('has a prefix of ' + maestro.prefix[i] + ' and a length of ' + j, function() {
          expect(detectNetwork(maestro.prefix[i] + filler.substr(0, j - maestro.prefix[i].length))).to.equal('Maestro');
        });
      })(i,j);
    }
  }
});

describe('China UnionPay', function() {
  var expect = chai.expect;

  var filler = "12345678901234567890";

  var china = {
    prefix: ["624", "625", "626", "6282", "6283", "6284", "6285", "6286", "6287", "6288"],
    prefix1: 622126,
    prefix2: 622925,
    length1: 16,
    length2: 19
  };

  // for prefix array values
  for (var i = 0; i < china.prefix.length; i++) {
    for (var j = china.length1; j <= china.length2; j++) {  
      // wrap it() inside an IIFE to create closure to preserve values i and j
      (function(i, j) {
        it('has a prefix of ' + china.prefix[i] + ' and a length of ' + j, function() {
          expect(detectNetwork(china.prefix[i] + filler.substr(0, j - china.prefix[i].length))).to.equal('China UnionPay');
        });
      })(i, j);
    }
  }

 // for range of prefix1 to prefix2
  for (var i = china.prefix1; i <= china.prefix2; i++) {
    for (var j = china.length1; j <= china.length2; j++) {  
      // wrap it() inside an IIFE to create closure to preserve values i and j
      (function(i, j) {
        it('has a prefix of ' + i + ' and a length of ' + j, function() {
          expect(detectNetwork(i + filler.substr(0, j - String(i).length))).to.equal('China UnionPay');
        });
      })(i, j);
    }
  }
});

describe('Switch', function() {
  var expect = chai.expect;

  var filler = "12345678901234567890";

  var swit = {
    prefix: ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"],
    length: [16, 18, 19]
  };

  // for prefix array values and length array values
  for (var i = 0; i < swit.prefix.length; i++) {
    for (var j = 0; j < swit.length.length; j++) {  
      // wrap it() inside an IIFE to create closure to preserve values i and j
      (function(i, j) {
        it('has a prefix of ' + swit.prefix[i] + ' and a length of ' + swit.length[j], function() {
          expect(detectNetwork(swit.prefix[i] + filler.substr(0, swit.length[j] - swit.prefix[i].length))).to.equal('Switch');
        });
      })(i, j);
    }
  }

});
