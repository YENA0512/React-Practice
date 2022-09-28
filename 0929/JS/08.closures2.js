function makeCounter() {
	let count = 0;
	function increase() {
		count++;
		console.log(count);
	}

	return increase;
}
const increase = makeCounter();
increase();
increase();
increase();
