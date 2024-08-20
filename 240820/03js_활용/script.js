const result = document.querySelector("#result");

const member1 = ["Html", "Node", "React"];
const member2 = ["CSS", "JavaScript", "React"];
const member3 = ["JavaScript", "React"];

const subjects = [...member1, ...member2, ...member3];

console.log(subjects);

const resultList = new Set();

subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList); // 중복된 녀석들을 제거 기본 배열에는 없음
//  하지만  siez라는  프로퍼티가 나옴,  이걸  배열화 시켜주기
result.innerHTML = `
<ul>
  ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;

// Unexpected token'<'? => 백틱
//Cannot set Properties  of  null  /  setting  innerHtml ?  => 프로퍼티는 html에 세팅할 수 없다.  그러면 문자열로 만들어준다. join으로
