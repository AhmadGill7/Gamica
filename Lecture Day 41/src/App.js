import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Login from './components/login/login';
import { Card } from "./components/card/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import { useState } from "react";
import CreateAd from "./components/create-ad/create-ad";
import Ads from "./components/ads/ads";
import Users from './components/users/users'
import Signup from "./components/signup/signup";
import Dashboard from "./components/dashboard/dashboard";

// import { data } from "./myData";




function NotFound(){
  return <div>
    <h1>Sorry, page not found</h1>
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

function Test(){

  function sum(){

    document.getElementById('three').value = +document.getElementById('one').value + +document.getElementById('two').value;

  }

  return <div>
    <input id="one" />
    <input id="two" />
    <input id="three" />
    <button onClick={sum}>Sum</button>
  </div>

}

// map ka function
// props (component kay andr data pass krna)
// hooks (choti choti functionalities)
// state management

// npm install react-router-dom

export default function BaraComponent(){


  // data.forEach((name)=>{

  //   let e = document.createElement('li');
  //   e.innerText = name;
  //   parent1.appendChild(e);

  // })

  // MV-VM
  // MODEL VIEW - VIEW MODEL
  // data  HTML - HTML 
  

  // jo bhi bnda login krega, use hum yahan state m 
  // save kardenge takay pata chlta rahey kay konsa
  // user updated h, uski base per hum website ki
  // UI bhi updated rakh sakte hn
  let [currentUser, setCurrentUser] =  useState({});

let [users, setUsers] = useState([
  {
    name:"ali",
    password:123
  }
]);

let [products, setProducts] = useState([
  {
    title:"HP 102",
    src:'/pics/haleem.jpg',
    price:9000
  },
  {
    title:"HP 103",
    src:'/pics/haleem.jpg',
    price:10000
  },
  {
    title:"HP 104",
    src:'/pics/haleem.jpg',
    price:11000
  }
]);


  return <div id="app">
    <BrowserRouter>

    <Header setCurrentUser={setCurrentUser} currentUser={currentUser}></Header>

    <main>

{/* routes ki 2 types */}
{/* static routes and dynamic routes */}

     <Routes>
       <Route path="/" element={<Home products={products}></Home>} />       
       <Route path="/login" element={<Login setCurrentUser={setCurrentUser} users={users}></Login>} />
       <Route path="/signup" element={<Signup users={users}></Signup>} />
       <Route path="/users" element={<Users users={users} />} />
     
     
       <Route path="/create-ad" element={<CreateAd products={products}></CreateAd>} />
       <Route path="/ads" element={<Ads setProducts={setProducts} products={products}></Ads>} />
       
       <Route path="/dashboard" element={<Dashboard />} />
       
      
       <Route path="*" element={<NotFound></NotFound>} />
    </Routes>

    {/* <Test></Test>  */}

  
    </main>
    <Footer></Footer>
    <ToastContainer />
    </BrowserRouter>
  </div>

}