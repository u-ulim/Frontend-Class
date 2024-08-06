document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector("#result");
  console.log(result);
  result.innerText = `code : ${e.key}`;
  if (e.key == "y") {
  }
});
