import { Routes, Route, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Header } from "./Components/Header/header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/Signup/Signup";
import { Profile } from "./Components/Profile";
import CreatePost from "./Components/Create-Post/Create-Post";
import { useState } from "react";
import Posts from "./Components/Posts/Posts";



function Nothing() {
  return <div>
    <h1>
      Page Not found
    </h1>
    <Link to="/home">Go To Home Page</Link>
  </div>
}



function App() {


  let [data, setData] = useState([{
    Company: "Buggati",
    src: "https://image.cnbcfm.com/api/v1/image/105807049-1553189463674bugatti.jpg?v=1553189697",
  },
  {
    Company: "Ferrari",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8kPN4odBhPu0QPGeWZ-EEfylfzY66Btwbt-PDFhifA&s",
  },
  {
    Company: "Supra",
    src: "https://c8.alamy.com/comp/2MX8111/1996-toyota-supra-on-display-at-the-japanese-assembly-held-at-bicester-heritage-centre-on-the-29th-january-2023-2MX8111.jpg"
  }
  ])

  let User = [{
    Email: "ali@gmail.com",
    Password: "123"
  },]
  return (
    <div className='App'>
      <BrowserRouter>

        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home data={data} setData={setData}></Home>} />
            <Route path="/home" element={<Home data={data} setData={setData}></Home>} />
            <Route path="/create-post" element={<CreatePost data={data} setData={setData}></CreatePost>} />
            <Route path="/posts" element={<Posts data={data} setData={setData}></Posts>} />
            <Route path="/Profile" element={<Profile></Profile>} />
            <Route path="/login" element={<Login User={User} ></Login>} />
            <Route path="/signup" element={<Signup User={User} ></Signup>} />
            <Route path="*" element={<Nothing></Nothing>} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
