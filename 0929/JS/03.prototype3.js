//속성값 알아보기
const yeonmi = { name: '박연미' };
const dog = { name: '바둑이', age: 5, owner: yeonmi };
Object.freeze(dog);
dog.name = '누렁이';
console.log(dog);
dog.play = function () {
	console.log('뛰어놀기 ');
};
console.log(dog);
delete dog.name;
console.log(dog);
yeonmi.name = '아이유';
console.log(dog);

const cat = { ...dog };
//Object.assign(cat, dog);
cat.owner = '유재석';
console.log(dog);
Object.seal(cat);
console.log(cat);

cat.name = '나비';
console.log(cat);
delete cat.owner;
console.log(cat);

const rabbit = { name: '토순이' };
Object.preventExtensions(rabbit);

rabbit.name = '토깽이';
console.log(rabbit);
rabbit.age = 1;
console.log(rabbit);
delete rabbit.name;
console.log(rabbit);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));
console.log(Object.isExtensible(rabbit));
