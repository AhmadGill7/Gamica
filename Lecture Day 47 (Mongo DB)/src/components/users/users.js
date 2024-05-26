import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default()=>{

    let moveTo = useNavigate();
    let [users, setUsers] = useState([]);

    useEffect(()=>{

        axios.get('/users-lao').then((resp)=>{
            console.log(resp.data);
            setUsers(resp.data);
        })

    }, []);


    return <div>
     { users.length > 0 ? <table className="table">
        {
            users.map((user, meraIndex)=>{
                    return <tr>
                        <td>
                            <img src={user.pic} width={50} />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td>{user.city}</td>
                        <td>
                            <button onClick={()=>{


                                // delete aur get method m body nahi jaati
                                // axios.delete('/user-delete-karo', {id:30})

                                let deleteKardo = window.confirm("Are you sure, you want to delete?")

                                if(deleteKardo == false){
                                    return;
                                }

                                axios.delete('/user-delete-karo?abc='+user._id).then((resp)=>{

                                    if(resp.data.success){
                                        users.splice(meraIndex, 1);
                                        setUsers([...users]);
                                    }

                                })

                            }}>Delete</button>
                            <button onClick={()=>{

                            moveTo('/signup/'+user._id)

                            }}>Edit</button>
                        </td>
                    </tr>
            })
        }
        </table>  : <b>No Users Found</b>}
    </div>

}