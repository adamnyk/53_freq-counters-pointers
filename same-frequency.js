/*
sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

Constraints

Time Complexity - O(N + M)


*/

// add whatever parameters you deem necessary

const {freqCounter} = require("./freqCounter")

function sameFrequency(int1, int2) {
	const int1Frequency = freqCounter(int1.toString());
	const int2Frequency = freqCounter(int2.toString());
	if (int1.toString().length !== int2.toString().length) return false;
	for (let key in int1Frequency) {
		if (int1Frequency[key] !== int2Frequency[key]) return false;
	}
	return true;
}

module.exports = { sameFrequency };
