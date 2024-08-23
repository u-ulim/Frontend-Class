// const display = (datas) => {
//   const quoute = document.querySelector(".quote");
//   datas.map((data) => console.log(data));
//   // quoute.innerText = data.
// };

// const init = async () => {
//   const data = await fetch("http://dummyjson.com/quotes");
//   const quote = await data.json();
//   console.log(quote);

//   display(quote);
// };

// init();

// console.log("hi");

const quoteURL = "http://dummyjson.com/quotes";

fetch(quoteURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(".author").innerHTML = `- ${data.quotes[random].author} -`;
  });
