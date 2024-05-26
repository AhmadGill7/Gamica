import axios from "axios";


export default ({ User, setUser }) => {

    // let meryUser = User
    // Ensure meryUser is an array
    let meryUser = Array.isArray(User) ? User : [];

    console.log('meryUser:', meryUser);

    return <div>
        {meryUser.length ?

            <table className="table">
                <thead>

                    <tr>
                        <th>Profile Pic</th><th>Name</th> <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {meryUser.map((user, index) => (
                        <tr key={index}>
                            <td><img src={user.newUser.Profile} width={"100px"} height={"100px"} >
                            </img>
                            </td>
                            <td>{user.newUser.UserName}</td>
                            <td>{user.newUser.Password}</td>
                            <td><button onClick={() => {
                                axios.delete("/deleteUser?abc=" + index)
                                meryUser.splice(index, 1)
                                setUser([...meryUser])
                            }}>Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>: <h1> No User Found</h1>
        }
    </div>

}