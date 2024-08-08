const userQuestion = prompt(
  "만보걷기를 시작한 날짜를 입력해주세요!",
  "2024-06-14"
);

const result = document.querySelector("#result");

const today = new Date();

const firstDay = new Date(userQuestion);

const passedTime = today.getTime() - firstDay.getTime();

const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

console.log(passedDate);
