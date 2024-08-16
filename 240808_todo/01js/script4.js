// const inputBoxName = document.querySelector(".input__box-name");
// const inputBoxSubject = document.querySelector(".input__box-subject");

// const btn = document.querySelector(".btn");
// const lists = document.querySelector("ul");
// const listLi = document.createElement("li");
// const div = document.createElement("div");
// const span = document.createElement("span");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const nameValue = inputBoxName.value;
//   const subjectValue = inputBoxSubject.value;
//   console.log(nameValue, subjectValue);
//   console.log(lists);
//   lists.appendChild(listLi);
//   console.log(lists);
//   listLi.appendChild(div);
//   listLi.appendChild(span);

//   div.innerText = nameValue;
//   span.innerText = subjectValue;
// });

const userName = document.querySelector("#name");

const userMajor = document.querySelector("#major");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (userName.value === "" || userMajor.value === "")
    alert("정상적인 데이터를 입력하세요!");
  else {
    e.preventDefault();
    const tbody = document.querySelector("tbody");
    const newTr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.innerText = userName.value;
    userName.value = "";

    const majorTd = document.createElement("td");
    majorTd.innerText = userMajor.value;
    userMajor.value = "";

    newTr.appendChild(nameTd);
    newTr.appendChild(majorTd);

    tbody.appendChild(newTr);
  }
});
