function getCat() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ kind: '고양이', name: '나비' });
		}, 1000);
	});
}

function getDog() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ kind: '강아지', name: '바둑이' });
		}, 3000);
	});
}

function getHamster() {
	return Promise.reject(new Error('햄스터 도망감'));
}

getCat()
	.then((cat) => getDog().then((dog) => [cat, dog]))
	.then((result) => console.log(result));


// Promise.all([getCat(), getDog()]) 
// 	.then((pets) => console.log(pets));

// Promise.race([getCat(), getDog()]) 
// 	.then((pets) => console.log(pets));

// Promise.all([getCat(), getDog(), getHamster()]) 
// 	.then((pets) => console.log(pets))
// 	.catch(console.log);

// Promise.allSettled([getCat(), getDog(), getHamster()]) 
// 	.then((pets) => console.log(pets))
// 	.catch('error: ', console.log);
