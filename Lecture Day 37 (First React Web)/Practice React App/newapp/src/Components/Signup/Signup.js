import { useRef, useState } from "react";

export function Signup({ User }) {
    const [emailRegistered, setEmailRegistered] = useState(false);
    const newEmail = useRef();
    const newPassword = useRef();
    const newPasswordConfirm = useRef();

    function createAccount(evt) {
        evt.preventDefault();

        const isEmailRegistered = User.some((account) => account.Email === newEmail.current.value);
        if (isEmailRegistered) {
            setEmailRegistered(true);
            alert("Email Already Registered");
        } else if (newPassword.current.value === newPasswordConfirm.current.value) {
            let newUser = {
                Email: newEmail.current.value,
                Password: newPassword.current.value,
            };
            User.push(newUser);
            // console.log(User)
            alert("Account Created Successfully");
            document.getElementById("form").reset()
            setEmailRegistered(false);
        } else {
            alert("Passwords Don't Match");
        }
    }


    return (
        <div className='loginContainer form-signin w-100 m-auto d-flex align-items-center justify-content-center py-4 bg-body-tertiary'>
            <form id='form' className='form' onSubmit={createAccount}>
                <img className='mb-4' src='Logo.jpg' alt='' width={72} height={57} />
                <h1 className='h3 mb-3 fw-normal'>Please Sign Up</h1>
                <div className='form-floating'>
                    <input
                        ref={newEmail}
                        type='email'
                        className='form-control form-control-lg'
                        id='floatingInput'
                        placeholder='name@example.com'
                    />
                    <label htmlFor='floatingInput'>Email address</label>
                </div>
                <div className='form-floating my-2'>
                    <input
                        ref={newPassword}
                        type='password'
                        className='form-control form-control-lg'
                        id='SignupfloatingPassword'
                        placeholder='Password'
                    />
                    <label htmlFor='SignupfloatingPassword'>Enter Your Password</label>
                </div>
                <div className='form-floating my-2'>
                    <input
                        ref={newPasswordConfirm}
                        type='password'
                        className='form-control form-control-lg'
                        id='secondfloatingPassword'
                        placeholder='Password'
                    />
                    <label htmlFor='secondfloatingPassword'>ReEnter Your Password</label>
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

                <button className='btn my-3 btn-primary w-100 py-2' type='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    );
}
