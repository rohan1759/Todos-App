import React, {useState} from 'react'
import './auth.css'

const Login = ({ isLoggedIn, setIsLoggedIn, userEmail, setUserEmail }) => {
    const [emailInput, setEmailInput] = useState('');

    let checklog = sessionStorage.getItem('islogin') 
    let islogin= checklog ? checklog : false;

    // let debounceTimeout;

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(emailInput){
            setUserEmail(emailInput)
            sessionStorage.setItem("userEmail", emailInput)
            sessionStorage.setItem("islogin", true)
            setIsLoggedIn(true)
            console.log("email : ", userEmail)
        }
    }
    
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value)
    }
    const handleLogout = () => {
        console.log("hell")
        sessionStorage.clear()
        window.location.reload()
        setIsLoggedIn(false)
    }

  return (
    <div className='login_mainDiv'>
        {islogin===false ? <form>
            <span>LOGIN </span>
            <input type='text' placeholder='email' onChange={handleEmailChange} required ></input>
            <button type='submit' onClick={handleSubmit}>login</button>
        </form>: <>
            <span>welcome, <b><u>{sessionStorage.getItem('userEmail') .split("@")[0]}</u></b> </span>
            <button onClick={handleLogout}>logout</button>
        </>}
    </div>
  )
}

export default Login