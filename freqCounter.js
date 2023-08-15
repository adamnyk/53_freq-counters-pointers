function freqCounter(str) {
	const charCount = {};
	for (let char of str) {
		charCount[char] = charCount[char] + 1 || 1;
	}
	return charCount;
}

module.exports = {freqCounter}