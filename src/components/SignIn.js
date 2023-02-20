import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [signUpSucess, setSignUpSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    // firebase object UserCredential representing the newly created user  
    .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`)
      });
  }

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      {signUpSucess}
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder="email" />
        <input 
          type='password'
          name="password"
          placeholder="password" />
        <button type="submit">Sign up</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn