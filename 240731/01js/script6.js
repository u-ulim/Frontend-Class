let sum = 0;

const clacSum = (n) => {
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum} 입니다`);
};

clacSum(10);
