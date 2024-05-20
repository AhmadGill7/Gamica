import "./App.css";
import { Signup } from "./Components/Signup";
import { Link } from "react-router-dom";
import { Header } from "./Components/Header/header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { useEffect, useState } from "react";
import { Profile } from "./Components/Profile//Profile"
import Posts from "./Components/Posts/Posts";
import axios from "axios";
import CreatePost from "./Components/Create-Post/Create-Post";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ShowUsers from "./Components/ShowUsers";


function Nothing() {
  return (
    <div>
      <h1>Page Not found</h1>
      <Link to='/'>Go To Home Page</Link>
    </div>
  );
}

function App() {

  let [currentUser, setCurrentUser] = useState({});
  let [index, setIndex] = useState({});
  useEffect(() => {
    console.log("Hello World");
   
  }, [currentUser, index])


  let [data, setData] = useState([
    {
      Title: "Buggati",
      src: "https://image.cnbcfm.com/api/v1/image/105807049-1553189463674bugatti.jpg?v=1553189697",
    },
    {
      Title: "Ferrari",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8kPN4odBhPu0QPGeWZ-EEfylfzY66Btwbt-PDFhifA&s",
    },
    {
      Title: "Supra",
      src: "https://c8.alamy.com/comp/2MX8111/1996-toyota-supra-on-display-at-the-japanese-assembly-held-at-bicester-heritage-centre-on-the-29th-january-2023-2MX8111.jpg",
    },
  ]);
  let [count, setCount] = useState(1);
  let [User, setUser] = useState({})
  useEffect(() => {
    axios.get("/users").then(function (res) {
      setUser(res.data)
    })
  }
    , [count])

  return (
    <div className='App'>
      <BrowserRouter>
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}></Header>
        <main>
          {/* <button onClick={start}> Start</button> */}
          <Routes>
            <Route path='/' element={<Home data={data} setData={setData}></Home>} />
            <Route path='/posts' element={<Posts data={data} setData={setData}></Posts>} />
            <Route path='/profile' element={<Profile index={index} data={data}  User={User}  currentUser={currentUser} setCurrentUser={setCurrentUser}></Profile>} />
            <Route path='/showusers' element={<ShowUsers user={User} ></ShowUsers>} />
            <Route path='/login' element={<Login User={User} setIndex={setIndex} currentUser={currentUser} setCurrentUser={setCurrentUser}></Login>} />
            <Route path='/signup' element={<Signup User={User} count={count} setCount={setCount}></Signup>} />
            <Route path='*' element={<Nothing></Nothing>} />
          </Routes>
        </main>
        <Footer></Footer>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
