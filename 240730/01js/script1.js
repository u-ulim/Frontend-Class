// 사용자에게 화씨온도를 받아서 콘솔창에서 해당 온도를 섭씨온도를
// 섭씨온도 = 화씨온도 - 32 / 1.8

const ondo = parseFloat(prompt("화씨온도를 입력하세요", "ex. 45"));
const cc = ((ondo - 32) / 1.8).toFixed(2);

alert(`화씨온도, ${ondo}도는 섭씨온도 ${cc}도입니다!`);























