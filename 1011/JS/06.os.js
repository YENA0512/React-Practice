const os = require('os');

//운영체제의 개행 문자
console.log(os.EOL === '\n'); // Mac
console.log(os.EOL === '\r\n'); //Window

console.log('hostname= ', os.hostname()); // 호스트 이름(컴퓨터 이름)
console.log('homedir= ', os.homedir()); // 운영체제 홈 디렉토리

console.log('type= ', os.type()); // 운영체제 이름
console.log('platform= ', os.platform()); // 운영체제 플랫폼

console.log('totalmem= ', os.totalmem()); // 시스템의 총 메모리
console.log('freemem= ', os.freemem()); // 시스템의 가용 메모리

console.log('cpus= ', os.cpus()); // CPU의 정보
console.log('userInfo= ', os.userInfo()); // 운영체제 사용자 정보
