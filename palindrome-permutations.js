// Can be any sort of letters that are palindrome
// If no more than one odd iteration of a letter
//   If even number of characters
//   If odd, can have no more than one odd
//
function permPalindrome(phrase) {
	// TODO: could use const instead of var, because the value doesn't change
	// - cleaner
	// - readability
	// - prevents bugs
	const countMap = buildCharFrequencyTable(phrase);
	return checkMaxOneOdd(countMap);
}

function checkMaxOneOdd(countMap) {
	// counts how many odd characters
	// TODO: could call oddCount
	var count = 0;
	for (i of countMap.values()) {
		// % = modulus operation, similar to division but gives a remainder
		// if anything besides 0, it's odd => enter into this if block
		if (i % 2) { 
			count += 1;
		}
		if (count > 1) {
			return false;
		}
	}
	return true; // that it is a permutation

}

// Map, HashMap, Dictionary
//   data structure: key value 
//   - unique key
//   - value
//   { "a": 1, "b": 2, "c": 3 }
//   { "a": 3, "b": 2, "c": 3 }
//   phrase[a] = 3
// Map 
//   - has ordered keys based on order of insertion
//   - key can be anything
//   - get is slower than dictionary
// Dictionary 
//   - keys are ordered
//   - key must be a character or a string

// Create a map to represent the set of unique characters in the phrase
function buildCharFrequencyTable(phrase) {
	var mappy = new Map();
	// for each char in string
	for (c in phrase) {
		// check if c already in map
		// if yes, increment
		// if no, set it to initial value of 1
		if (mappy.get(phrase[c]) >= 0) {
			mappy.set(phrase[c], mappy.get(phrase[c]) + 1);
		} else {
			mappy.set(phrase[c], 1);
		}
	}
	return mappy;
}

console.log(permPalindrome("tacocat"));
console.log(permPalindrome("tac ocat"));
console.log(permPalindrome("tac o cat"));
console.log(permPalindrome("taCocat"));
console.log(permPalindrome("not a palindome"));


