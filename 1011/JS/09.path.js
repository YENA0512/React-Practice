const path = require('path');

console.log(__dirname); // 현재 폴더 : 디렉토리 경로
console.log(__filename); // 파일 이름
console.log(path.sep); //경로 구분자 운영체제 마다 다름
// Mak , Linux => /
// window      => \

console.log(path.parse(__filename)); // 전체 경로 오브젝트

console.log('=========');
console.log(path.basename(__filename)); // 현재 파일이름.확장자
console.log(path.basename(__filename, '.js')); // 현재 파일이름
console.log(path.dirname(__filename)); // 디렉토리 이름
console.log(path.extname(__filename)); // 확장자

console.log('=========');
const curPath = path.parse(__filename);
console.log(curPath.base); // 현재 파일이름.확장자
console.log(curPath.name); // 현재 파일이름
console.log(curPath.dir); // 디렉토리 이름
console.log(curPath.ext); // 확장자
console.log('=========');
const str = path.format(curPath);
console.log(str);
console.log('=========');
// 절대경로인지 체크
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../' + curPath.dir));

const logoImg = 'logo.png';
console.log(__dirname + '\\' + logoImg); // 안좋은 방식
console.log(__dirname + path.sep + logoImg);
console.log(path.join(__dirname, logoImg));
