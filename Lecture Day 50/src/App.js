import axios from "axios";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Users from "./components/users/users";
// import Signup from '../src/components/';
import Header from '../src/components/header/header';
import Login from "./components/login/login";
import { useEffect } from "react";
import { loginHogya } from "./store/store";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import CreateAd from "./components/create-ad/create-ad";
import Home from './components/home/home';
import { Card } from "./components/card/card";

export default () => {

  let dispatch = useDispatch();

  useEffect(() => {

    axios.post('/check-session', {
      abc: localStorage.getItem('meraToken')
    }).then((resp) => {

      if (resp.data) {

        dispatch(loginHogya(resp.data));

      }

    })

  }, [])

  const touchRoute = () => {

    axios.post('/abc', { name: 'ali', city: 'fsd' }).then(function (resp) {
      console.log(resp.data);
    })

  }

  return <div>

    <BrowserRouter>

      <Header></Header>

      <Routes>

        {/* create wala route */}
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />

        {/* edit wala route */}
        <Route path='/signup/:myID' element={<Signup />} />
        <Route path='/create-ad' element={<Card />} />


        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />

      </Routes>

    </BrowserRouter>

    <button onClick={touchRoute}>Send Request</button>
    <ToastContainer></ToastContainer>

  </div>

}