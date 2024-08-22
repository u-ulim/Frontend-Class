// console.log("시작");
// add();
// console.log("실행 중...");
// console.log("끝");

// try {
//   // 실행시킬 코드!
//   console.log("시작");
//   add();

//   console.log("실행 중...");
//   console.log("끝");
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log("에러발생함!");
//   // try문을 실행시켰을 때,  어떤  에러사항이  발생될 경우,  실행시킬 명령문
// }

// console.log("종료");

const json  =  '{"grade": 3, "age": 25}'


try {
  const user = JSON.parse("json");
  if (!user.skill) throw "사용자 스킬이 없습니다!";
} catch (err) {
  // console.log(err);
}
