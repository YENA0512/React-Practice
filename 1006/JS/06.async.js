const myPromise = () => {
	return new Promise((resolve, reject) => {
		resolve('One');
	});
};

const myFunc = async () => {
	console.log('Inner function');
	console.log(await myPromise());
	console.log('goOut function');
};

console.log('Before Function');
myFunc();
console.log('After Function');

// function getCat() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve({ kind: '고양이', name: '나비' });
// 		}, 1000);
// 	});
// }

// function getDog() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve({ kind: '강아지', name: '바둑이' });
// 		}, 3000);
// 	});
// }

// function getHamster() {
// 	return Promise.reject(new Error('햄스터 도망감'));
// }

// async function getPets() {
// 	let cat = await getCat();
// 	let dog = await getDog();
// 	return [cat, dog];
// }

// getPets().then((pet) => console.log(pet));

// async function getPets() {
// 	let cat = await getCat();

// 	let hamster;
// 	try {
// 		hamster = await getHamster();
// 	} catch (error) {
// 		//console.log(error);
// 		hamster = { kind: '햄스터', name: '햄찌' };
// 	}
// 	let dog = await getDog();

// 	return [cat, dog, hamster];
// }

// getPets().then((pet) => console.log(pet));
