function nao(n) {
  if (n == 1) {
    return 1;
  } else {
    return nao(n - 1);
  }
}

console.log(nao(10));
