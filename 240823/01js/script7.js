// const displayHello = () => {
//   console.log("hello");
// }

// displayHello();

const displayHello = () => {
  console.log("hello");
};

console.log(displayHello());

const displayHelloAsync = async () => {
  console.log("hello");
};

console.log(displayHelloAsync());

// const whatsYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`hello,${subject}`));
// };
// whatsYourFavorite().then(displaySubject).then(console.log);

// const init = async () => {
//   const response = await whatsYourFavorite();
//   const result = displaySubject(response);
//   console.log(result);
// };

// init();

const whatsYourFavorite = async () => {
  const fav = "Javscript";
  return fav;
};

const diplaySubject = async (subject) => {
  return `Hello, ${subject}`;
};


// await / async는 같이 써야 하는 함수 
const init = async () => {
  const response = await whatsYourFavorite();
  const result = await diplaySubject(response);
  console.log(result);
};

init();
