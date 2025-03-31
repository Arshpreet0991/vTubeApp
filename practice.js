const hof = function (fn) {
  return function (a, b, c) {
    return fn(a, b, c);
  };
};

function fn(n1, n2, n3) {
  return n1 + n2 + n3;
}

const newFn = hof(fn);
console.log(newFn(1, 3, 5));
