function* getNums() {
  yield 10;
  yield 20;
  yield 30;
}

const numIterable = getNums();
console.log(numIterable.next());
console.log(numIterable.next());
console.log(numIterable.next());
console.log(numIterable.next());
