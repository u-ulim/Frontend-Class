// 자바스크립트 for문을 활용해서 2단부터 9단까지 웹브라우저 화면에 출력

// 중첩 for
// let i;
// let j;

// for (i = 1; i <= 10; i++) {
//   document.write(i, "</br>");
//   console.log(i);
//   for (j = 1; j <= 10; j++) {
//     let result = i * j;
//     document.write(`${i} X ${j} : ${result} </br>`);
//   }
// }

for (let a = 2; a <= 9; a++) {
  document.write(`<h2> 구구단 ${a}단 </h2>`);
  for (let b = 1; b <= 9; b++) {
    document.write(`${a} X ${b} = ${a * b}`);
    document.write("<br/>");
  }
}
