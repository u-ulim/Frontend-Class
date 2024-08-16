const button = document.querySelector("#tweetButton");

console.log(button);

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += ` #david #sns #js`;
  console.log(tweetText);
  // 인코드 해주는 함수 컴퓨터가 이해할 수 있게,
  const encodedText = encodeURIComponent(tweetText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
  console.log(encodedText);

  window.open(tweetURL);
});
