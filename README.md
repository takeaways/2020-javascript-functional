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
