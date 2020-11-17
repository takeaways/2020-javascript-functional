# 함수형 자바스크립트.

## 🛑 함수형 자바스크립트 기본

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

## 🔥 ES6에서의 순회와 이터러블: 이터레이터 프로토콜

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

## 💫 제너레이터와 이터레이터

### 제너레이터 / 이터레이터

- 제너레이터: 이터레이터이자 이터러블을 생성하는 함수

```js
function* get() {
  //어떠한 값도 순회할 수 있는 값으로 만들 수 있다.
  yield 1;
  yield 2;
  yield 3;
  return 100; // 마지막 순회에서 얻을 수 있는 값이 됩니다.
}
const iter = get();
console.log(iter[Symbol.iterator]() === iter);
iter.next();
iter.next();
for (const a of iter) console.log(a);
```

### odds

- 홀 수만 리턴하는 함수 만들어 보기

```js
function* infinity(i = 0) {
  while (true) yield i++;
}
function* limit(l, iter) {
  for (const i of iter) {
    yield a;
    if (i === l) return;
  }
}
function* odds(count) {
  for (const i of infinity(1)) {
    if (i % 2 === 0) yield i;
    if (i === count) return;
  }
}
const iter = odds(10);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* limit(l, iter) {
  for (const i of iter) {
    yield a;
    if (i === l) return;
  }
}
const iter4 = limit(4, [1, 2, 3, 4, 5, 6, 7, 8]);
iter4.next();
```

### for...of, 전개연산자, 구조 분해, 나머지 연산

- 이터러블/이터레이터 프로토콜을 따른다.

## 🌟 map, filter, reduce

### map

```js
const prod = [
  { name: "p1", price: 1000 },
  { name: "p2", price: 400 },
  { name: "p3", price: 6500 },
  { name: "p4", price: 50 },
];
const map = (f, iter) => {
  const res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
};
//
const log = console.log;

const prods = [
  { name: "p1", price: 1000 },
  { name: "p2", price: 400 },
  { name: "p3", price: 6500 },
  { name: "p4", price: 50 },
];
const map = (f, iter) => {
  const res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
};

log(map((prod) => prod.name, prods));
```

### filter

```js
const prods = [
  { name: "p1", price: 1000 },
  { name: "p2", price: 400 },
  { name: "p3", price: 6500 },
  { name: "p4", price: 50 },
];

const filter = (f, iter) => {
  const res = [];
  for (const a of iterm) {
    if (f(a)) {
      res.push(a);
    }
  }
  return res;
};
console.log(filter((prod) => prod.price > 500, prods));
```

### reduce

```js
const prods = [
  { name: "p1", price: 1000 },
  { name: "p2", price: 400 },
  { name: "p3", price: 100 },
  { name: "p4", price: 50 },
];

const map = (f, iter) => {
  const res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
};

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

console.log(
  reduce(
    (a, prod) => a + prod,
    map((prod) => prod.price, prods)
  )
);
```

## 🌈 코드를 값으로 다루어 표현력 높이기

### go

- 즉시 평가

```js
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
const go = (...args) => reduce((a, f) => f(a), args);
go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);
```

### pipe

- 함수를 리턴하는 함수

```js
const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (...args) => (value) => go(...args);
const f = pipe(
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);
console.log(f(0));
```

### go를 사용하여 읽기 좋은 코드로 만들기

```js

```

### go+curry를 사용하여 더 읽기 좋은 코드로 만들기

- 함수를 받아서 함수를 리턴한다.
- 인자를 받아서 원하는 만큼 나중에 평가

```js
const curry = (f) => (a, ..._) =>
  _.length ? f(a, ..._) : (..._) => f(a, ..._);
const mult = curry((a, b) => a * b);
console.log(mult(1)(2));
```

### 함수 조합으로 함수 만들기

```js

```

# 비동기: 동시성 프로그래밍

- 일급의 중요성
- Promise와 모나드
