import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);

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

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}`)
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
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input 
        type='text'
        name="signinEmail"
        placeholder="email" />
        <input 
        type="password"
        name="signinPassword"
        placeholder="password" />
        <button type='submit'>Sign In</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn