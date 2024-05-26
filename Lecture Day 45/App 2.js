import axios from "axios"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/users/users";
import Signup from './components/signup/signup';

export default () => {


  const touchRoute = () => {

    axios.post('/abc', { name: 'ali', city: 'fsd' }).then(function (resp) {
      console.log(resp.data);
    })

  }

  return <div>

    <BrowserRouter>

      <Routes>

        <Route path='/signup' element={<Signup />} />
        <Route path='/users' element={<Users />} />

      </Routes>

    </BrowserRouter>

    <button onClick={touchRoute}>Send Request</button>

  </div>

}