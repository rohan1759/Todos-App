import React, { useState, useEffect } from 'react'
import './app.css'
import Content from "./components/content/content"
import Addtodo from './components/addTodo/addtodo'
import SearchSection from './components/searchSection/searchSection'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'


const App = () => {
  const [userEmail, setUserEmail] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [data, setData] = useState([]);
  let myemail = sessionStorage.getItem('userEmail');

  async function getData(){
    const response = await fetch(`http://localhost:8080/api/todos/${myemail}?sort=${'createdAt'}`)
    const res = await response.json()
    setData(res)
  }

  useEffect(() => {
    if(myemail){
      getData().catch((err) => alert(err))
    }
  }, [myemail]);

  return (
    <div className="app_main-div">
      <div>
        <Signup isLoggedIn={isLoggedIn} />
        <Login userEmail={userEmail} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />
        <Addtodo userEmail={myemail} />
        <SearchSection data={data} setData={setData}/>
        <Content data={data} setData={setData} />
      </div>
    </div>
  )
}

export default App