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
console.log(
  go(
    0,
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100,
    console.log
  )
);

const d = () => console.log("Hello world");

console.log(d());

//
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
const pipe = (f, ...fs) => (...args) => go(f(...args), ...fs);
const f = pipe(
  (a, b, c) => a + b + c,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);
console.log(f(4, 1, 2, 3));
