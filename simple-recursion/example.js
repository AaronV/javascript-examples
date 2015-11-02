function countDownFrom(n) {
  if (n > 0) {
    console.log(n);
    n--;
    countDownFrom(n);
  }
}

countDownFrom(10);
