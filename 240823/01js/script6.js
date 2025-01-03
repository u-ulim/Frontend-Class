// const xhr = new XMLHttpRequest();

// xhr.open("GET", "student2.json");
// xhr.send();

// const renderHTML = (students) => {
//   let output = "";

//   for (let student of students) {
//     output += `
//     <h2>${student.name}</h2>
//     <ul>
//      <li>전공 : ${student.major}</li>
//      <li>전공 : ${student.grade}</li>
//     </ul>
//     `;
//   }
//   document.querySelector("#result").innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     renderHTML(students);
//   }
// };

// fetch 함수로 변환

// fetch의 반환값이 promise이기 때문에
fetch("student2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
    <h2>${student.name}</h2>
    <ul>
      <li>전공학과 : ${student.major}</li>
      <li>학년 : ${student.grade}</li>
    </ul>
    `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
