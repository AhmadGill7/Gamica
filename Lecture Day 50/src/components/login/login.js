import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { loginHogya } from "../../store/store";

let person = {
  name: 'ali',
  city: 'fsd'
}

// let name = person.name;
// let {name} =  person;

export default function Login({ users, setCurrentUser }) {


  let dispatch = useDispatch();

  let { register, handleSubmit, formState:{errors} } = useForm();

  let moveTo = useNavigate();

  // let nameRef = useRef();
  // let passwordRef = useRef();

  const saveData = (mereData) => {

    // console.log(mereData)

    // return;


    axios.post('/login', mereData).then((resp)=>{

      if(!resp.data){
        return toast.error("User not found")
      }

      let userMilgya  = resp.data.userMilgya;

      localStorage.setItem('meraToken', resp.data.token)

      if (userMilgya) {

        dispatch( loginHogya(userMilgya) );

        // setCurrentUser(userMilgya)
  
        moveTo('/dashboard');
        toast.warn('user milgya wa')
  
        // dashboard per bhej dio
      } else {
        toast.error("user not found");
        // alert("user nahi mia")
      }


    })

    // let userMilgya = users.find((user) => {

    //   if (user.name == mereData.name && user.password == mereData.password) {
    //     return true;
    //   }

    // });


   


  }

  return <div>
    <form onSubmit={handleSubmit( saveData )}>
      <div>
        <input { ...register('name', {
            required:true, 
            minLength:3, 
            maxLength:7
          }) }  type="text" />
        
        {/* agar single validation ho to */}
        {/* {errors.name ? <div className="error">This field is required</div> : null} */}

       {/* agar multiple validations ho to type bhi check krte hen */}
        {errors.name && errors.name.type == "required" ? <div className="error">This field is required</div> : null}
        {errors.name && errors.name.type == "minLength" ? <div className="error">Please type atleast 3 letters</div> : null}
        {errors.name && errors.name.type == "maxLength" ? <div className="error">Maximum only 7 lettes allowed</div> : null}
      </div>
      <div>
        <input {...register('password', {required:true})} type="text" />
        {errors.password ? <div className="error">This field is required</div> : null}
      </div>
      <button >Save Data</button>
    </form>
  </div>
}