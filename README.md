# 함수형 자바스크립트.

## 함수형 자바스크립트 기본

### 평가

- 코드가 계산(Evaluation) 되어 값을 만드는 것

### 일급

- 값으로 다룰 수 있다.
- 변수에 담을 수 있다.
- 함수의 인자로 사용될 수 있다.
- 함수의 결과로 사용될 수 있다.

### 일급 함수

- 함수를 값으로 다룰 수 있다.

```js
const f1 = () => () => 1;
console.log(f1());
```

- 조합성과 추상화의 도구

### 고차 함수

- 함수를 값으로 다루는 함수

  - 함수를 인자로 받아서 실행하는 함수

  ```js
  const apply = f => f(1);
  const add => a => a+2
  console.log(apply(add))

  const times = (f, n) => {
    for(let i = 0 ; i < n ; i++){
      f(i)
    }
  }
  times(console.log, 3)
  ```

  - 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)

  ```js
  const addMaker = (a) => (b) => a + b;
  const add10 = addMaker(10);
  console.log(add10(5));
  console.log(add10(29));
  ```

> 클로저 : 함수가 만들어 질 때의 환경을 기억할 수 있는 용어 Lexical Environment
