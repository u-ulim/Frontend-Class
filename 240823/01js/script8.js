const display = (users) => {
  const result = document.querySelector(".result");
  let output = "";
  users.forEach((user) => {
    output += `
      <table>
      <tr>
        <th>이름</th>
        <td>${user.name}</td>
      </tr>
      <tr>
        <th>아이디</th>
        <td>${user.username}</td>
      </tr>
         <th>이메일</th>
        <td>${user.email}</td>
      </tr>
      </table>
    `;
  });
  result.innerHTML = output;
};

const init = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  // 배열의 형태 구조를 띤다.
  display(users);
};

// api를 여러개 동시다발적으로 가져온다.
init();
