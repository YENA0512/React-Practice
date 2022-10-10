export let count = 0;

function increase() {
	count++;
}

function getCount() {
	return count;
}

export { increase, getCount };
