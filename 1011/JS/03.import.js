// 사용하는 곳은 같은 경로에 있는 ./ 해주면 같은 경로 라는 뜻 
// ../ 상위 폴더 라는 뜻 

// 이렇게 export 한 것만 가져올 수 있다 

const counter = require('./counter.js');

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
