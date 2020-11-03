function* get() {
  yield 1;
  yield 2;
  yield 3;
}
const iter = get();
iter.next();
iter.next();
for (const a of iter) console.log(a);

function* odds(count) {
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      yield i;
    }
  }
}
const iter = odds(10);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//
function* infinity(i = 0) {
  while (true) yield i++;
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
    yield i;
    if (i === l) return;
  }
}
const iter4 = limit(4, [1, 2, 3, 4, 5, 6, 7, 8]);
iter4.next();
