import axios from "axios"
import { useEffect, useState } from "react"

export default()=>{

    let [users, setUsers] = useState([]);

    useEffect(()=>{

        axios.get('/users-lao').then((resp)=>{
            console.log(resp.data);
            setUsers(resp.data);
        })

    }, []);


    return <div>
        <table className="table">
        {
            users.map((user)=>{
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td>{user.city}</td>
                    </tr>
            })
        }
        </table>
    </div>

}