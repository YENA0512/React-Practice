const cat = {
	name: '나비',
	age: 4,
	play: () => {
		console.log('낚시줄놀이');
	},
	owner: { name: '박연미', age: 30 },
	favorite: ['캣잎', '잠자기', '츄르'],
};

// 객체 -> json파일(문자열)로 변환
const json = JSON.stringify(cat);
console.log(json);

// json 파일 -> 객체로 변화
const obj = JSON.parse(json);
console.log(obj);
