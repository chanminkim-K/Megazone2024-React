import './App.css';
import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"
import Button from './component/button';
import Body from './component/Body'

// function App() {

//   const buttonProps = {
//     text: "기타",
//     color: "red",
//     a: 1, 
//     b: 2,
//     c: 3
//   }

//   return (
//     <>
//       <Button text={"메일"} color={"red"}/>
//       <Button text={"카페"}/>
//       <Button text={"블로그"}/>
//       <Button {...buttonProps}/>
//     </>
//   );
// }

// function App() {

//   return (
//     <>
//       <Header/>
//       <Main/>
//       <Footer/>
//     </>
//   );
// }

// 교재 209~ Props 예제
function ChildComp() {
  return <div>child component</div>;
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Body>
        <ChildComp/>
      </Body>
      <Footer />
    </div>
  )
}
export default App;
