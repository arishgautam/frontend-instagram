import React from "react";
import './signup.css'

const SignUp = () => {
  return (
    <>
    <div class="container">

        <form action="#" method="POST">
            <h2>Sign up to Instagram</h2>
            <input type="text" name="fullname" placeholder="Full Name" required/>
            <input type="text" name="username" placeholder="Username" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <button type="submit">Sign Up</button>
        </form>

        <div class="sign-up">
            <p>Already have an account? <a href="">log in</a></p>
        </div>

        </div>
        </>
  )
};

export default SignUp;
