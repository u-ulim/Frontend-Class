// // https://reqres.in/api/products/10

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://reqres.in/api/products/10");

// xhr.send();

// const arrs = JSON.parse(xhr.responseText);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const student2 = JSON.parse(xhr.responseText);

//     const result = document.querySelector("#result");

//     console.log(result);
//   }
// };

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://reqres.in/api/products/10");

// // 서버에 요청 전송
// xhr.send();

// // 요청 상태가 변경될 때마다 실행되는 함수
// xhr.onreadystatechange = function () {
//   // readyState가 4이고, status가 200일 때 (요청이 성공적으로 완료된 경우)
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     // 서버로부터 받은 응답 데이터를 JSON 형식으로 파싱
//     const student2 = JSON.parse(xhr.responseText);

//     // 결과를 표시할 HTML 요소 선택
//     const result = document.querySelector("#result");

//     // 결과 콘솔에 출력 (혹은 다른 처리)
//     console.log(student2);

//     // 결과를 HTML에 표시
//     //   result.innerHTML = `
//     //     <p>ID: ${student2.data.id}</p>
//     //     <p>Name: ${student2.data.name}</p>
//     //     <p>Year: ${student2.data.year}</p>
//     //     <p>Color: ${student2.data.color}</p>
//     //   `;
//   }
// };

const url = "https://reqres.in/api/products/10";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();

xhr.open("GET", url);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const product = JSON.parse(xhr.responseText);
    result.innerHTML = `
    <p> 상품명: ${product.data.name}</p>
    <p> 제작년도: ${product.data.year}</p>
    <p> 색상: ${product.data.color}</p>
    
    `;
  }
};
