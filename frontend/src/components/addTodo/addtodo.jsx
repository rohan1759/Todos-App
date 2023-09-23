import React, { useState } from 'react'
import './addtodo.css'

const Addtodo = ({userEmail}) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    dueDate: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    // console.log(event.target, event.target.value)
    setNewTodo((prevData)=> ({...prevData, [name]: value}))
  }
  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      const response = await fetch(`https://todos-app-backend-p2bbc7dlo-rohan1759.vercel.app/api/todos/${userEmail}`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { "Content-Type": "application/json" }
    })
    const res = await response.json()
    console.log(res)
    window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='addtodo_maindiv'>
        <form action='/api' onSubmit={handleSubmit}>
            <input id='text_input' type='text' name='title' placeholder='Add New Task...' onChange={handleChange} ></input>
            <div>
                <input title='Set Due-Date' id='date_input' name='dueDate' type='date' onChange={handleChange} ></input>
                <button type='submit'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default Addtodo