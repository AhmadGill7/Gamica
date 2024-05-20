import { useRef } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
export function Login({ User, setIndex, setCurrentUser }) {
  const navigate = useNavigate()
  let toSignup;
  let { register, handleSubmit, formState: { errors } } = useForm()

  let loginCheck = (details) => {
    let Email = details.Email;
    let UserName = details.Email;
    let Password = details.Password;

    let UserFound = User.some((account, index) => {
      if (account.newUser.Email == Email || account.newUser.UserName == UserName && account.newUser.Password == Password) {
        setIndex(index)
        setCurrentUser(details)
        return true;
      }
      return false;
    })

    if (UserFound) {
      document.getElementById("form").reset();
      navigate("/")
      toast.success("Login Successfully");
    } else {
      toast.error("Email Not Registerd")
      toSignup = window.confirm("Want To Create an Account?")
    };
    if (toSignup) {
      navigate("/signup")
    }
  };

  return (
    <div className='loginContainer  form-signin w-100 m-auto d-flex align-items-center justify-content-center py-4 bg-body-tertiary'>
      <form id='form' onSubmit={handleSubmit(loginCheck)} className='form'>
        <img className='mb-4' src='Logo.png' alt='' style={{ mixBlendMode: "darken", }} width={80} height={70} />
        <h1 className='h3 mb-3 fw-normal'>Please Sign In</h1>
        <div className='form-floating'>
          <input
            {...register("Email", { required: true, })}
            type='text'
            className='form-control form-control-sm'
            id='floatingInput'
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address Or User Name</label>
          {errors.Email && errors.Email.type == "required" ? <div className="error">ANNI DEYA MAZAK AY</div> : null}
        </div>
        <div className='form-floating my-2'>
          <input
            {...register("Password", { required: true, minLength: 4, maxLength: 10 })}
            type='password'
            className='form-control form-control-lg'
            id='LoginfloatingPassword'
            placeholder='Password'
          />
          <label htmlFor='LoginfloatingPassword'>Password</label>
          {errors.Password && errors.Password.type == "required" ? <div className="error">ANNI DEYA MAZAK AY</div> : null}
          {errors.Password && errors.Password.type == "minLength" ? <div className="error">THORA JEYA HOR LIKH</div> : null}
          {errors.Password && errors.Password.type == "maxLength" ? <div className="error">AINA V NI LIKHNA</div> : null}

        </div>
        <button className='my-3 btn btn-primary w-100 py-2' type='submit'>
          Sign in
        </button>
      </form>
    </div>
  );
}
