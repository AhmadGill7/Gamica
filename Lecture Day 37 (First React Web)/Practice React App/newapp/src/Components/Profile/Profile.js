import { useNavigate } from "react-router-dom";
import CreatePost from "../Create-Post/Create-Post"
import axios from "axios";

export function Profile({ currentUser, index, setCurrentUser }) {
  let toPage = useNavigate();
  let deleteUser = () => {
    let dIndex = { index: index };
    axios.post("/deleteAccount", dIndex).then(() => {
      setCurrentUser({})
      toPage("/login")
    })
  } 

  return <div>
    <h1>Hello {currentUser.FullName}</h1>
    <table className="table" border={1}>
      <tr>
        <th>Name :</th>
        <th>City :</th>
        <th>Email :</th>
        <th>UserName :</th>
        <th>Password :</th>
        <th><button onClick={deleteUser}>Delete User</button></th>
      </tr>
      <tr>
        <td>{currentUser.FullName}</td>
        <td>{currentUser.City}</td>
        <td>{currentUser.Email}</td>
        <td>{currentUser.UserName}</td>
        <td>{currentUser.Password}</td>
      </tr>
    </table>
    <CreatePost></CreatePost>
  </div>
}