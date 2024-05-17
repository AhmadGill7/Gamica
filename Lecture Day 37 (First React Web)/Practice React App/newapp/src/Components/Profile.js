import CreatePost from "./Create-Post/Create-Post"

export function Profile({ currentUser, data }) {

  return <div>
    <h1>Hello {currentUser.FullName}</h1>
    <table className="table" border={1}>
      <tr>
        <th>Name :</th>
        <th>City :</th>
        <th>Email :</th>
        <th>UserName :</th>
        <th>Password :</th>
      </tr>
      <tr>
        <td>{currentUser.FullName}</td>
        <td>{currentUser.City}</td>
        <td>{currentUser.Email}</td>
        <td>{currentUser.UserName}</td>
        <td>{currentUser.Password}</td>
      </tr>
    </table>
    <CreatePost data={data}></CreatePost>
  </div>
}