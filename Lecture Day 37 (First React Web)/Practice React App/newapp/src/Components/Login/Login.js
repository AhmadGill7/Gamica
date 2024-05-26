import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
export function Login({ user, setCurrentUser }) {
  let moveTo = useNavigate();


  const { register, handleSubmit } = useForm();

  const save = (some) => {

    axios.post("/login", some).then((res) => {
      if (res.data) {
        alert("user milgya")
        moveTo("/");
      } else {
        alert("user nahi Mila")
      }
    })






  }
  return <div>
    <main>
      <center>
        <img
          className="responsive-img"
          style={{ width: 250 }}
          src="https://i.imgur.com/ax0NCsK.gif"
        />
        <div className="section" />
        <h5 className="indigo-text">Please, login into your account</h5>
        <div className="section" />
        <div className="container">
          <div
            className="z-depth-1 grey lighten-4 row"
            style={{
              display: "inline-block",
              padding: "32px 48px 0px 48px",
              border: "1px solid #EEE"
            }}
          >
            <form onSubmit={handleSubmit(save)}
              className="col s12" method="post">
              <div className="row">
                <div className="col s12"></div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input {...register("name")}
                    className="validate"
                    type="text"
                    name="name"
                    id="name"
                  />
                  <label htmlFor="email">Enter your name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input {...register("password")}
                    className="validate"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <label htmlFor="password">Enter your password</label>
                </div>
                <label style={{ float: "right" }}>
                  <a className="pink-text" href="#!">
                    <b>Forgot Password?</b>
                  </a>
                </label>
              </div>
              <br />
              <center>
                <div className="row">
                  <button
                    type="submit"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect indigo"
                  >
                    Login
                  </button>
                </div>
              </center>
            </form>
          </div>
        </div>
        <a href="#!">Create account</a>
      </center>
      <div className="section" />
      <div className="section" />
    </main>

  </div>
}












// import { useRef } from "react";
// import "./login.css";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";
// import { useEffect } from "react";
// import axios from "axios";
// export function Login({ User, setIndex, setCurrentUser }) {
//   const navigate = useNavigate()
//   let toSignup;
//   let { register, handleSubmit, formState: { errors } } = useForm()

//   let loginCheck = (details) => {

//     axios.post("/login", details).then((res) => {

//       if(!res.data){
//         return toast.error("User not found")
//       }



//       let UserFound = res.data.UserFound


//       localStorage.setItem('meraToken', res.data.token)



//       if (UserFound) {
//         document.getElementById("form").reset();
//         navigate("/");
//         toast.success("Login Successfully");
//         setCurrentUser(UserFound)
//       } else {
//         console.log(res.data)
//         toast.error("User not found")
//         toSignup = window.confirm("Want To Create  an Account?")
//       };
//       if (toSignup) {
//         navigate("/signup")
//       }


//     })

//     // let Email = details.Email;
//     // let UserName = details.Email;
//     // let Password = details.Password;

//     // let UserFound = User.some((account, index) => {
//     //   if (account.Email == Email || account.UserName == UserName && account.Password == Password) {
//     //     setIndex(index)
//     //     setCurrentUser(details)
//     //     return true;
//     //   }
//     //   return false;
//     // })

//   };

//   return (
//     <div className='loginContainer  form-signin w-100 m-auto d-flex align-items-center justify-content-center py-4 bg-body-tertiary'>
//       <form id='form' onSubmit={handleSubmit(loginCheck)} className='form'>
//         <img className='mb-4' src='Logo.png' alt='' style={{ mixBlendMode: "darken", }} width={80} height={70} />
//         <h1 className='h3 mb-3 fw-normal'>Please Sign In</h1>
//         <div className='form-floating'>
//           <input
//             {...register("UserName", { required: true, })}
//             type='text'
//             className='form-control form-control-sm'
//             id='floatingInput'
//             placeholder='name@example.com'
//           />
//           <label htmlFor='floatingInput'>Email address Or User Name</label>
//           {errors.Email && errors.Email.type == "required" ? <div className="error">ANNI DEYA MAZAK AY</div> : null}
//         </div>
//         <div className='form-floating my-2'>
//           <input
//             {...register("Password", { required: true, minLength: 4, maxLength: 10 })}
//             type='password'
//             className='form-control form-control-lg'
//             id='LoginfloatingPassword'
//             placeholder='Password'
//           />
//           <label htmlFor='LoginfloatingPassword'>Password</label>
//           {errors.Password && errors.Password.type == "required" ? <div className="error">ANNI DEYA MAZAK AY</div> : null}
//           {errors.Password && errors.Password.type == "minLength" ? <div className="error">THORA JEYA HOR LIKH</div> : null}
//           {errors.Password && errors.Password.type == "maxLength" ? <div className="error">AINA V NI LIKHNA</div> : null}

//         </div>
//         <button className='my-3 btn btn-primary w-100 py-2' type='submit'>
//           Sign in
//         </button>
//       </form>
//     </div>
//   );
// }
