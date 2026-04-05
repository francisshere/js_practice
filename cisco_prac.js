function fibItr(n) {
  let a = 0, b = 1, c;
  while (n-- > 0) {
    c = a;
    a = b;
    b += c;
    console.log(a);
  }
  return a;
}