import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const Signup = ({ count, setCount, User }) => {
    let toPage = useNavigate();
    let { register, handleSubmit, formState: { errors }, } = useForm();
    //   const [emailRegistered, setEmailRegistered] = useState(false);
    //   const [UserNameRegistered, setUserNameRegistered] = useState(false);

    function createAccount(details) {
        let Password;
        if (details.Password === details.newPasswordConfirm) {
            Password = details.Password;
            // code for image upload handeling
            let formData = new FormData();
            formData.append("FullName", details.FullName);
            formData.append("Email", details.Email);
            formData.append("UserName", details.UserName);
            formData.append("Password", Password);
            formData.append("Profile", details.meriIamge[0]);
            formData.append("City", details.CitySelector);
            axios.post("/signup", formData);
            setCount(count * 1.1);
            toast.success("Account Created Successfully");
            toPage("/login");
            document.getElementById("form").reset();
        } else {
            alert("Passwords Don't Match");
        }

    }

    return (
        <div className='loginContainer form-signin  m-auto d-flex align-items-center justify-content-center bg-body-tertiary'>
            <form id='form' className='form' onSubmit={handleSubmit(createAccount)}>
                <img
                    className='mb-4'
                    src='Logo.png'
                    alt=''
                    style={{ mixBlendMode: "darken" }}
                    width={80}
                    height={70}
                />
                <h1 className='h3 fw-normal'>Please Sign Up</h1>

                {/* Full Name  */}
                <div className='form-floating my-2'>
                    <input
                        {...register("FullName", { required: true })}
                        type='text'
                        className='form-control form-control-md'
                        id='floatingInput'
                        placeholder='Enter a Username'
                    />

                    <label htmlFor='floatingInput'>Enter Your Full Name</label>

                    {errors.FullName ? <div className='error'>Field Required</div> : null}
                </div>
                {/* UserName  */}
                <div className='form-floating my-2'>
                    <input
                        {...register("UserName", { required: true })}
                        type='text'
                        className='form-control form-control-md'
                        id='floatingInput'
                        placeholder='Enter a Username'
                    />

                    <label htmlFor='floatingInput'>Enter a User Name</label>

                    {errors.UserName ? <div className='error'>Field Required</div> : null}
                </div>

                {/* Email  */}
                <div className='form-floating'>
                    <input
                        {...register("Email", { required: true })}
                        type='email'
                        className='form-control form-control-md'
                        id='floatingInput'
                        placeholder='name@example.com'
                    />
                    <label htmlFor='floatingInput'>Email address</label>
                    {errors.Email ? <div className='error'>Field Required</div> : null}
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
                        className='form-control form-control-md'
                        id='SignupfloatingPassword'
                        placeholder='Password'
                    />
                    <label htmlFor='SignupfloatingPassword'>Enter Your Password</label>
                    {errors.Password && errors.Password.type == "required" ? (
                        <div className='error'>Field Required</div>
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
                        className='form-control form-control-md'
                        id='secondfloatingPassword'
                        placeholder='Password'
                    />
                    <label htmlFor='secondfloatingPassword'>ReEnter Your Password</label>
                    {errors.newPasswordConfirm &&
                        errors.newPasswordConfirm.type == "required" ? (
                        <div className='error'>Field Required</div>
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

                {/* Image wala input */}
                <div className='form-floating my-2'>
                    <input
                        type='file' accept="image/*" capture="user" className='form-control form-control-md' id='meriIamge'
                        {...register("meriIamge", {
                            required: true,
                        })}
                    />
                    {errors.meriIamge && errors.meriIamge.type == "required" ? (
                        <div className='error'>Field Required</div>
                    ) : null}
                </div>

                {/* City  */}
                <select
                    className='form-select form-select-md'
                    {...register("CitySelector", {
                        required: true,
                        validate: (value) => {
                            if (value == "Enter Your City") {
                                return false;
                            }
                        },
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
                {errors.CitySelector && errors.CitySelector.type == "required" ? (
                    <div className='error'>Field Required</div>
                ) : null}
                {errors.CitySelector && errors.CitySelector.type == "validate" ? (
                    <div className='error'>Please Enter a City</div>
                ) : null}
                <button className='btn my-3 btn-primary w-100 py-2' type='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    );
};
