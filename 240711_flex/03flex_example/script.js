// JS 변수선언 var let const

// var: 무조건 전역, 지역 전부 움직임
// 전역변수 / 지역변수
// 개발작업 => 혼자x // 공동협업

//let & const => 15년 이후

//let: 재할당은 가능, 재선언은 불가
//const: 재할당, 재선언 불가

const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb > ul");
  const sns = document.querySelector(".sns");
  console.log(gnb, sns);
  gnb.classList.toggle("on");
  sns.classList.toggle("on");
  this.classList.toggle("active");
});

//this => 자체요소인 this 객체 설명해주세요, 언제 쓸 수 있어요? 왜 사용 못하는 거죠?

