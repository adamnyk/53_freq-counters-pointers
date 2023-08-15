function freqCounter(arrOrStr) {
	const frequencies = new Map();
	for (let val of arrOrStr) {
		let valCount = frequencies.get(val) || 0;
		frequencies.set(val, valCount + 1);
	}
	return frequencies;
}


function constructNote(msg, str) {
	if (msg.length > str.length) return false;
	let msgCharFrequency = freqCounter(msg);
	let strCharFrequency = freqCounter(str);
	for (key of msgCharFrequency.keys()) {
		if (msgCharFrequency.get(key) > strCharFrequency.get(key)) return false;
	}
	return true;
}

