// add whatever parameters you deem necessary

function freqCounter(str) {
	const charCount = {};
	for (let char of str) {
		charCount[char] = charCount[char] + 1 || 1;
	}
	return charCount;
}

function constructNote(msg, str) {
	if (msg.length > str.length) return false;
	let msgCharFrequency = freqCounter(msg);
	let strCharFrequency = freqCounter(str);
	for (key in msgCharFrequency) {
		if (msgCharFrequency[key] > strCharFrequency[key]) return false;
	}
	return true;
}

module.exports = {constructNote}