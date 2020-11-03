/*
# 평가
    - 코드가 계산(Evaluation) 되어 값을 만드는 것
# 일급
    - 값으로 다룰 수 있다.
    - 변수에 담을 수 있다.
    - 함수의 인자로 사용될 수 있다.
    - 함수의 결과로 사용될 수 있다.
# 일급 함수
    - 함수를 값으로 다룰 수 있다.
    - 조합성과 추상화의 도구
*/

const apply = (f) => f(1);
const add = (a) => a + 2;
console.log(apply((a) => console.log(`${a}--><--${a}`)));

const times = (f, n) => {
  for (let i = 0; i < n; i++) {
    f(i);
  }
};
times(console.log, 3);

const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
console.log(add10(5));
console.log(add10(29));
