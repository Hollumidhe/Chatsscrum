import React from "react";
import './sign-up.css';
import content from "../static/index";
import { useForm } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape(
    {
        fullname: yup.string().required().min(6),
        email: yup.string().required().email(),
        password: yup.string().required(" Please we need a correct password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
    }
)

const SignUp = () => {
    const { register, formState: {errors}, handleSubmit, } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);
    console.log(errors)
    return (
    <div className="sign-up">
        <h1>Don't have an account?</h1>
        <h3>Sign up here!</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            {content.inputs.map((input,key) => {
                return (
                    <div key={key}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <br/>
                    <input type={input.type}
                     name={input.name}
                    {...register(input.name)} />
                    <br />
                    <span className="message">{errors[input.name] ?.message}</span>
                </div>
                )
            })}

        <label for="options">User Type</label>
        <select id="options">
            <option value="Developer">Developer</option>
            <option value="Owner">Owner</option>
        </select>
        <button>SIGN UP</button>
        <p>Have an account? Sign In</p>
        </form>
    
    </div>
)
        };
export default SignUp;
