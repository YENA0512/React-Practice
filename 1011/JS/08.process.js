const process = require('process');

console.log(process.execPath); //프로세스 현재 위치
console.log(process.version); // 프로세스 버전

console.log(process.pid); // 프로세스 아이디
console.log(process.ppid); // 프로세스 부모의 아이디
console.log(process.platform); // 플랫폼에 대한 정보

console.log(process.env); // OS 환경변수 정보
console.log(process.cwd()); // 프로세스 현재 경로

setTimeout(() => {
	console.log('이벤트 비동기 함수 ');
}, 0);

//process.nextTick => 잴 우선 실행되는 비동기 함수
process.nextTick(() => {
	console.log('프로세스 nextTick');
});

for (let i = 0; i < 10; i++) {
	console.log('i= ', i);
}
