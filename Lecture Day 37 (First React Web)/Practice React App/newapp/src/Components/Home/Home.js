import { Card } from "../Card/card"
import { useState } from "react";



export function Home({data,setData}) {
    // let [newData, updateData] = useState(["Ali", "Rameez", "Zunair", "Ahmad", "Umair"])

    // function addUser() {
    //     let newName = prompt("Enter New User's Name")
    //     if (newName === "") {
    //         alert("Name cannot be empty")
    //     } else if (newData.includes(newName)) {
    //         alert("Name Alread Present")
    //     } else {

    //         newData.push(newName);
    //         updateData([...newData])
    //     }
    // }

    // return <div className="flex">
    //     <ol >
    //         <button onClick={addUser}>ADD USER</button>
    //         {
    //             newData.map(function (name, index) {
    //                 return <li>{name}<button onClick={() => {
    //                     newData.splice(index, 1)
    //                     updateData([...newData])

    //                 }}>X</button></li>

    //             })
    //         }

    return <div className="d-flex">
    <ol className="d-flex m-auto justify-content-center flex-wrap list-unstyled">
        {
            data.map(function (Car) {
                return <li  className="mx-4 my-4"><Card Comp={Car}></Card></li>
            })
        }

    </ol> 
    </div>
}