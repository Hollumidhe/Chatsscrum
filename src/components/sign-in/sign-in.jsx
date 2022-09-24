import React from 'react';
import './sign-in.css';
import content from "../static/index";


const SignIn = () => {
    return (

    <div className='sign-up'>
        <h1>Have an account?</h1>
        <h3>Sign in here!</h3>
        <form>
        <label for="text">Full name</label>
            <input name='text' type='text' />
            <label for="email">Email</label>
            <input name='email' type='email' />
            <label for="password">Password</label>
            <input name='password' type='password' />

    
        <button>SIGN IN</button>
        <p>Don't have an account? sign up</p>
        </form>
       
        </div>
    )
}
export default SignIn;
