// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var dinersClub = {
  	prefix: ["38", "39"],
  	length: [14],
  };

  var amex = {
    prefix: ["34", "37"],
    length: [15]
  };

  var visa = {
    prefix: ["4"],
    length: [13, 16, 19]
  };

  var mc = {
    prefix1: 51,
    prefix2: 55,
    length: [16]
  };

  var disc = {
    prefix: ["6011", "65"],
    prefix1: 644,
    prefix2: 649,
    length: [16, 19]
  };

  var maestro = {
  	prefix: ["5018", "5020", "5038", "6304"],
  	length1: 12,
  	length2: 19
  };

  var china = {
  	prefix: ["624", "625", "626", "6282", "6283", "6284", "6285", "6286", "6287", "6288"],
  	prefix1: 622126,
  	prefix2: 622925,
  	length1: 16,
  	length2: 19
  };
 
  var swit = {
  	prefix: ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"],
  	length: [16, 18, 19]
  };

  var isDinersClub = dinersClub.prefix.includes(cardNumber.substr(0,2)) && dinersClub.length.includes(cardNumber.length);
  var isAmex = amex.prefix.includes(cardNumber.substr(0,2)) && amex.length.includes(cardNumber.length);
  var isVisa = visa.prefix.includes(cardNumber[0]) && visa.length.includes(cardNumber.length) && !(swit.prefix.includes(cardNumber.substr(0,4)) && swit.length.includes(cardNumber.length));
  var isMC = (Number(cardNumber.substr(0,2)) >= mc.prefix1) && (Number(cardNumber.substr(0,2)) <= mc.prefix2) && mc.length.includes(cardNumber.length);
  var isDiscover = (((Number(cardNumber.substr(0,3)) >= disc.prefix1) && (Number(cardNumber.substr(0,3)) <= disc.prefix2)) || disc.prefix.includes(cardNumber.substr(0,4)) || disc.prefix.includes(cardNumber.substr(0,2))) && disc.length.includes(cardNumber.length);
  var isMaestro = maestro.prefix.includes(cardNumber.substr(0,4)) && (cardNumber.length >= maestro.length1) && (cardNumber.length <= maestro.length2);
  var isChinaUP = (((Number(cardNumber.substr(0,6)) >= china.prefix1) && (Number(cardNumber.substr(0,6)) <= china.prefix2)) || china.prefix.includes(cardNumber.substr(0,3)) || china.prefix.includes(cardNumber.substr(0,4))) && (cardNumber.length >= china.length1) && (cardNumber.length <= china.length2); 
  var isSwitch = (swit.prefix.includes(cardNumber.substr(0,4)) || swit.prefix.includes(cardNumber.substr(0,6))) && swit.length.includes(cardNumber.length);

  if (isDinersClub) {
  	return "Diner\'s Club";
  } else if (isAmex) {
  	return "American Express";
  } else if (isVisa) {
  	return "Visa";
  } else if (isMC) {
  	return "MasterCard";
  } else if (isDiscover) {
  	return "Discover";
  } else if (isMaestro) {
  	return "Maestro";
  } else if (isChinaUP) {
  	return "China UnionPay";
  } else if (isSwitch) {
  	return "Switch";
  }
}


