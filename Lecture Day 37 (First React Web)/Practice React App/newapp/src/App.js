import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
import "./App.css";
import Signup from "./components/signup/signup";
import { Link } from "react-router-dom";
import { Header } from "./Components/Header/header";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Profile } from "./Components/Profile";
import { useState } from "react";
import Posts from "./Components/Posts/Posts";
import axios from "axios";
import TestFile from "./Components/testFile";

export default () => {
  function serverChlao() {
    axios.get("/user-dikhao").then(function (resp) {
      console.log(resp.data);
    });
  }



  return <div>

    <BrowserRouter>
      <Routes>
        <Route path='/su' element={<Signup></Signup>} />
        <Route path='/home' element={<Home></Home>} />
      </Routes>
      <button onClick={serverChlao}>user dikhao</button>;
    </BrowserRouter>
  </div>

};

// function Nothing() {
//   return (
//     <div>
//       <h1>Page Not found</h1>
//       <Link to='/home'>Go To Home Page</Link>
//     </div>
//   );
// }

// function App() {
//   let [currentUser, setCurrentUser] = useState({});
//   let [data, setData] = useState([
//     {
//       Title: "Buggati",
//       src: "https://image.cnbcfm.com/api/v1/image/105807049-1553189463674bugatti.jpg?v=1553189697",
//     },
//     {
//       Title: "Ferrari",
//       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8kPN4odBhPu0QPGeWZ-EEfylfzY66Btwbt-PDFhifA&s",
//     },
//     {
//       Title: "Supra",
//       src: "https://c8.alamy.com/comp/2MX8111/1996-toyota-supra-on-display-at-the-japanese-assembly-held-at-bicester-heritage-centre-on-the-29th-january-2023-2MX8111.jpg",
//     },
//   ]);

//   let User = [
//     {
//       Email: "ali@gmail.com",
//       Password: "1234",
//       UserName: "Ali",
//       FullName: "Ali Tahir",
//       City: "Faisalabad",
//     },
//   ];
//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <Header
//           currentUser={currentUser}
//           setCurrentUser={setCurrentUser}></Header>
//         <main>
//           <Routes>
//             <Route path='/' element={<Home data={data} setData={setData}></Home>} />
//             <Route path='/posts' element={<Posts data={data} setData={setData}></Posts>} />
//             <Route path='/Profile' element={<Profile data={data} currentUser={currentUser}></Profile>} />
//             <Route path='/login' element={<Login User={User} currentUser={currentUser} setCurrentUser={setCurrentUser}></Login>} />
//             <Route path='/signup' element={<Signup User={User}></Signup>} />
//             {/* <Route path='/test' element={<TestFile User={User}></TestFile>} /> */}
//             <Route path='*' element={<Nothing></Nothing>} />
//           </Routes>
//         </main>
//         <Footer></Footer>
//         <ToastContainer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
