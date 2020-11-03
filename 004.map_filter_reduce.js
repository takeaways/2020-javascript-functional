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
//
const prods = [
  { name: "p1", price: 1000 },
  { name: "p2", price: 400 },
  { name: "p3", price: 6500 },
  { name: "p4", price: 50 },
];

const filter = (f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) {
      res.push(a);
    }
  }
  return res;
};
console.log(filter((prod) => prod.price > 500, prods));
//

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
