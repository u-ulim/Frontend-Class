// const startBtn = document.querySelector("#btn1");

// const fc = (e) => {
//   e.preventDefault();
//   const number01Value = document.querySelector("#number01").value;
//   const number02Value = document.querySelector("#number02").value;

//   console.log(number01, number02, startBtn);

//   let allArr = [];
//   let ranArr = [];

//   for (i = 0; i < number01Value; i++) {
//     allArr[i] = i + 1;
//   }
//   console.log(allArr);

//   for (i = 0; i < number02Value; i++) {
//     let randomNum = Math.floor(Math.random() * allArr.length);
//     ranArr.push(allArr[randomNum]);
//   }
//   console.log(ranArr);
// };

// startBtn.addEventListener("click", fc);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number01 = document.querySelector("#number01");
  const number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  // let pickedNumbers = [];
  // for (let i = 0; i < number02.value; i++) {
  //   let picked = Math.floor(Math.random() * number01.value + 1);

  //   pickedNumbers.push(picked);
  // }

  let winner = "";
  let pickedNumbers = [];
  for (let i = 0; i < number02.value; i++) {
    let picked;

    do {
      picked = Math.floor(Math.random() * number01.value + 1);
    } while (pickedNumbers.includes(picked));

    pickedNumbers.push(picked);
    winner += `${picked}번`;

    // pickedNumbers.push(picked);
  }
  result.innerText = `당첨자 : ${winner}`;
});
