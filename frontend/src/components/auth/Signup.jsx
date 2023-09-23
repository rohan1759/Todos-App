import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './auth.css'

const Signup = ({isLoggedIn}) => {
    const [signupForm, setSignupForm] = useState({
        name: "",
        email: ""
    })

    let checklog = sessionStorage.getItem('islogin')
    let islogin= checklog ? checklog : false;

    const notifySuccess = () => toast.success("User signed up successfully", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    const notifyError = () => toast.error("Failed to sign up. Please check the data and try again.", {
      position: toast.POSITION.BOTTOM_RIGHT
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(e.target, e.target.value)
        setSignupForm((prevData)=> ({...prevData, [name]: value}))
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch("http://localhost:8080/api/user/", {
          method: "POST",
          body: JSON.stringify(signupForm),
          headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
          const res = await response.json();
          console.log(res);
          notifySuccess();
        } else {
          // Request was not successful, handle the error
          const errorResponse = await response.json();
          console.error('error:', errorResponse);
          notifyError();
        }
      } catch (err) {
        // Network or other errors
        console.error('An error occurred:', err);
        notifyError('An error occurred. Please try again later.');
      }
    };
    
  return (
    <div className='signup_mainDiv'>
        {islogin===false ? <><form onSubmit={handleSubmit}>
            <span>Quick SignUp Form </span>
            <input name='name' type='text' placeholder='name' onChange={handleChange} required ></input>
            <input name='email' type='text' placeholder='email' onChange={handleChange} required ></input>
            <button type='submit'>register</button>
        </form>
        <div>or</div>
        </>
: <></>}
        <ToastContainer  autoClose={3000}/>
    </div>
  )
}

export default Signup