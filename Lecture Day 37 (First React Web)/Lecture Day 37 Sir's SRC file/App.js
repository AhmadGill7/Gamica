import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import './App.css';
import { Card } from "./components/card/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";

function Login(){
  return <div>
    <h1>yeh login tha</h1>
  </div>
}

function Signup(){
  return <div>
    <h1>yeh signup tha</h1>
  </div>
}

function NotFound(){
  return <div>
    <h1>Sorry, page not found</h1>
  </div>
}
function DashBoard(){
  return <div>
    <h1>ye DashBoard tha</h1>
  </div>
}

// App.js file aapke project ki main file hoti h
// project kay saarey components ultimately yahin aakar jamah hote
// aur browser m enter hojate

// yeh libraries apne main folder wali CMD m install karlijega
// npm install react-router-dom react-redux redux react-hook-form


// App.js m bi aik component hota jo saare components kay tag apne andr lgakar
// khud browser m chla jata

// react wlay code m HTML tag ko just ID se access nahi kar skate
// document.getElementById() use krna parna

// function Test(){

//   function sum(){

//     document.getElementById('three').value = +document.getElementById('one').value + +document.getElementById('two').value;

//   }

//   return <div>
//     <input id="one" />
//     <input id="two" />
//     <input id="three" />
//     <button onClick={sum}>Sum</button>
//   </div>

// }

// npm install react-router-dom

export default function BaraComponent(){


  return <div id="app">
    <BrowserRouter>

    <Header ></Header>

    <main>

    <Routes>
       <Route path="/" element={<Home></Home>} />       
       <Route path="/login" element={<Login></Login>} />
       <Route path="/signup" element={<Signup></Signup>} />
       <Route path="/dashboard" element={<DashBoard></DashBoard>} />
       <Route path="*" element={<NotFound></NotFound>} />
    </Routes>

    {/* <Test></Test> */}

  
    </main>
    <Footer></Footer>

    </BrowserRouter>
  </div>

}