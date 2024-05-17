import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";




export default () => {

    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    let toPage = useNavigate();
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [emailRegistered, setEmailRegistered] = useState(false);
    const [UserNameRegistered, setUserNameRegistered] = useState(false);

    function createAccount(details) {
        const isEmailRegistered = User.some(
            (account) => account.Email === details.Email
        );
        const isUserNameRegistered = User.some(
            (account) => account.UserName === details.UserName
        );
        if (isEmailRegistered) {
            setEmailRegistered(true);
            toast.error("Email Already Registered");
        } else if (isUserNameRegistered) {
            setUserNameRegistered(true);
            toast.error("UserName Already Registered");

        } else if (details.Password === details.newPasswordConfirm) {
            let newUser = {
                FullName: details.FullName,
                UserName: details.UserName,
                Email: details.Email,
                Password: details.Password,
                City: details.CitySelector,
            };
            // User.push(newUser);
            axios.post("/signup", newUser)
            // toPage("/login");
            toast.success("Account Created Successfully");
            // document.getElementById("form").reset();
            setEmailRegistered(false);
            setUserNameRegistered(false);
        } else {
            alert("Passwords Don't Match");
        }
    }

    return <div className='loginContainer form-signin w-100 m-auto d-flex align-items-center justify-content-center bg-body-tertiary'>
        <form id='form' className='form' onSubmit={handleSubmit(createAccount)}>
            <img
                className='mb-4'
                src='Dark Logo.png'
                alt=''
                style={{ mixBlendMode: "lighten" }}
                width={80}
                height={70}
            />
            <h1 className='h3 fw-normal'>Please Sign Up</h1>


            {/* Full Name  */}
            <div className='form-floating my-2'>
                <input
                    {...register("FullName", { required: true })}
                    type='text'
                    className='form-control form-control-lg'
                    id='floatingInput'
                    placeholder='Enter a Username'
                />
                <label htmlFor='floatingInput'>Enter Your Full Name</label>
                {errors.FullName ? (
                    <div className='error'>ANNI DEYA MAZAK AY</div>
                ) : null}
            </div>

            {/* UserName  */}
            <div className='form-floating my-2'>
                <input
                    {...register("UserName", { required: true })}
                    type='text'
                    className='form-control form-control-lg'
                    id='floatingInput'
                    placeholder='Enter a Username'
                />
                <label htmlFor='floatingInput'>Enter a User Name</label>
                {errors.UserName ? (
                    <div className='error'>ANNI DEYA MAZAK AY</div>
                ) : null}
            </div>


            {/* Email  */}
            <div className='form-floating'>
                <input
                    {...register("Email", { required: true })}
                    type='email'
                    className='form-control form-control-lg'
                    id='floatingInput'
                    placeholder='name@example.com'
                />
                <label htmlFor='floatingInput'>Email address</label>
                {errors.Email ? (
                    <div className='error'>ANNI DEYA MAZAK AY</div>
                ) : null}
            </div>

            {/* Password  */}

            <div className='form-floating my-2'>
                <input
                    {...register("Password", {
                        required: true,
                        minLength: 4,
                        maxLength: 10,
                    })}
                    type='password'
                    className='form-control form-control-lg'
                    id='SignupfloatingPassword'
                    placeholder='Password'
                />
                <label htmlFor='SignupfloatingPassword'>Enter Your Password</label>
                {errors.Password && errors.Password.type == "required" ? (
                    <div className='error'>ANNI DEYA MAZAK AY</div>
                ) : null}
                {errors.Password && errors.Password.type == "minLength" ? (
                    <div className='error'>THORA JEYA HORR LIKH</div>
                ) : null}
                {errors.Password && errors.Password.type == "maxLength" ? (
                    <div className='error'>AINA V NI LIKHNA</div>
                ) : null}
            </div>

            {/* Confirm Password  */}

            <div className='form-floating my-2'>
                <input
                    {...register("newPasswordConfirm", {
                        required: true,
                        minLength: 4,
                        maxLength: 10,
                    })}
                    type='password'
                    className='form-control form-control-lg'
                    id='secondfloatingPassword'
                    placeholder='Password'
                />
                <label htmlFor='secondfloatingPassword'>ReEnter Your Password</label>
                {errors.newPasswordConfirm &&
                    errors.newPasswordConfirm.type == "required" ? (
                    <div className='error'>ANNI DEYA MAZAK AY</div>
                ) : null}
                {errors.newPasswordConfirm &&
                    errors.newPasswordConfirm.type == "minLength" ? (
                    <div className='error'>THORA JEYA HORR LIKH</div>
                ) : null}
                {errors.newPasswordConfirm &&
                    errors.newPasswordConfirm.type == "maxLength" ? (
                    <div className='error'>AINA V NI LIKHNA</div>
                ) : null}
            </div>

            {/* City  */}
            <select className="form-select form-select-lg" {...register("CitySelector", {
                required: true, validate: ((value) => {
                    if (value == "Enter Your City") {
                        return false;
                    }
                })
            })}>
                <option selected>Enter Your City</option>
                <option>MULTAN</option>
                <option>Faisalabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Peshawar</option>
                <option>Kashmir</option>
                <option>Okara</option>
            </select>
            {errors.CitySelector &&
                errors.CitySelector.type == "required" ? (
                <div className='error'>ANNI DEYA MAZAK AY</div>
            ) : null}
            {errors.CitySelector &&
                errors.CitySelector.type == "validate" ? (
                <div className='error'>Please Enter a City</div>
            ) : null}
            <button className='btn my-3 btn-primary w-100 py-2' type='submit'>
                Sign Up
            </button>
        </form>
    </div>

}
