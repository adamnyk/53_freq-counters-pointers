// isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)

// add whatever parameters you deem necessary
function isSubsequence(firstStr, secondStr) {
	if (firstStr.length > secondStr.length) return false;

	let first = 0;
	let second = 0;

	while (first < firstStr.length && second < secondStr.length) {
		if (firstStr[first] === secondStr[second]) {
			first++;
			second++;
		} else second++;
    }
    
	return first >= firstStr.length ? true : false;
}

module.exports = {isSubsequence}