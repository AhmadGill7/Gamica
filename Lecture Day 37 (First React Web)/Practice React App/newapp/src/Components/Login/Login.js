import { useRef } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";

export function Login({ User }) {
  let emailRef = useRef();
  let PasswordRef = useRef();

  let loginCheck = (evt) => {
    evt.preventDefault();
    let LoginUser = {
      Email: emailRef.current.value,
      Password: PasswordRef.current.value,
    };
    console.log(emailRef.current.value, PasswordRef.current.value);
    User.map((account) => {
      if (
        account.Email == LoginUser.Email &&
        account.Password == LoginUser.Password
      ) {
        document.getElementById("form").reset();
        alert("user Milgaya");
      }
    });
  };

  return (
    <div className='loginContainer form-signin w-100 m-auto d-flex align-items-center justify-content-center py-4 bg-body-tertiary'>
      <form id='form' onSubmit={loginCheck} className='form'>
        <img className='mb-4' src='Logo.jpg' alt='' width={72} height={57} />
        <h1 className='h3 mb-3 fw-normal'>Please Sign In</h1>
        <div className='form-floating'>
          <input
            ref={emailRef}
            type='email'
            className='form-control form-control-lg'
            id='floatingInput'
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating my-2'>
          <input
            ref={PasswordRef}
            type='password'
            className='form-control form-control-lg'
            id='LoginfloatingPassword'
            placeholder='Password'
          />
          <label htmlFor='LoginfloatingPassword'>Password</label>
        </div>
        {/* <div className="form-check text-start my-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue="remember-me"
                    id="flexCheckDefault"

                />
                <label className="form-check-label white" htmlFor="flexCheckDefault">
                    Remember me
                </label>
            </div> */}
        <button className='my-3 btn btn-primary w-100 py-2' type='submit'>
          Sign in
        </button>
      </form>
    </div>
  );
}
