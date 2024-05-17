import { useRef } from "react"

export default function Signup({users}){

    let nameRef = useRef();
    let passwordRef = useRef();

// react-hook-form
// formid

    const saveData = ()=>{

        let person = {
            name:nameRef.current.value,
            password:passwordRef.current.value,
        }

        users.push(person);

    }

    return <div>
      <input ref={nameRef} type="text" />
      <input ref={passwordRef} type="text" />
      <button onClick={saveData}>Save Data</button>
    </div>
  }