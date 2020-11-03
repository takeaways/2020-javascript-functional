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

## ES6에서의 순회와 이터러블: 이터레이터 프로토콜

### 기존과 달라진 ES6에서의 리스트 순회

1. 기존의 리스트 순회

   ```js
   const list = [1, 2, 3];
   for (let i = 0; i < list.length; i++) {
     console.log(list[i]);
   }

   const str = "abc";
   for (let i = 0; i < str.length; i++) {
     console.log(str[i]);
   }
   ```

2. ES6의 순회
   ```js
   const list = [1, 2, 3];
   const str = "abc";
   for (const a of list) {
     console.log(a);
   }
   for (const a of str) {
     console.log(a);
   }
   ```

### Array, Set Map을 통해 알아보틑 이터러블/ 이터레이터 프로토콜

1. Array

   ```js
   const arr = [1, 2, 3];
   for (const a of arr) console.log(a);

   const iterator = arr[Symbol.iterator]();
   iterator.next(); // {value:1, done:false}
   iterator.next(); // {value:2, done:false}
   iterator.next(); // {value:3, done:false}
   ```

2. Set

   ```js
   const arr = new Set([1, 2, 3]);
   for (const a of add) console.log(a);

   const iterator = arr[Symbol.iterator]();
   iterator.next();
   iterator.next();
   iterator.next();
   ```

3. Map

   ```js
   const arr = new Map([
     ["a", 1],
     ["b", 2],
     ["c", 3],
   ]);
   for (const a of arr) console.log(a);

   const iterator = arr[Symbol.iterator]();
   iterator.next();
   iterator.next();
   iterator.next();

   map.keys();
   ```

4. 이터러블/이터레이터 프로토콜

- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
- 💎이터레이터: {value: done} 객체를 리턴하는 next()를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함꼐 동작하도록한 규약

### 사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의

1. 사용자 정의 이터러블 구현하기

```js
// Well Formed Iterator
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
// console.log(iterator.next());
for (const a of iterator) console.log(a);
```

2. 전개 연산자

```js
const a = [1, 2];
console.log([...a, 3, 4]); //이터레이터 값을 펼칠 수 있다.
```
