import "./App.css";
import Header from "./components/Header";
// import Body from "./components/Body";
// import Body1 from "./components/Body1";
// import Body2 from "./components/Body2";
import Body3 from "./components/Body3_objectState";
import Body4 from "./components/Body4";
import Body5 from "./components/Body5";
import Footer from "./components/Footer";

// 함수는 무조건 앞글자가 대문자
// return => 무조건 값을 받아와야하니까 써야함

// function ChildComp() {
//   return <div> child component </div>;
// }

// function App() {
//   // const name = "David";
//   const BodyProps = {
//     name: "David",
//     location: "서울시",
//     // favorList: ["파스타", "토마토", "가지"],
//   };
//   return (
//     <div className="App">
//       <Header />
//       <Body>
//         <ChildComp />
//       </Body>
//       {/* <Body {...BodyProps} /> */}
//       {/* <Body name={name} location={"서울시"} /> */}
//       <Footer />
//       {
//         /* <div clasName="App"></div> */
//         // 부모 역할 해주는 태그가 분명히 있어야한다. Fragment Element!
//       }
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <Header />
      <Body5 />
      <Footer />
    </div>
  );
}
export default App;
