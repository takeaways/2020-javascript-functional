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
