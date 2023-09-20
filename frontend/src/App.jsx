import React, { useState, useEffect } from 'react'
import './app.css'
import Content from "./components/content/content"
import Navbar from "./components/navbar/navbar"
import Addtodo from './components/addTodo/addtodo'
import SearchSection from './components/searchSection/searchSection'


const App = () => {
  const [data, setData] = useState([]);

  async function getData(){
    const response = await fetch(`http://localhost:8080/api/todos/ram@gmail.com?sort=${'createdAt'}`)
    const res = await response.json()
    setData(res)
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="app_main-div">
      <div>
        <Addtodo/>
        <SearchSection data={data} setData={setData}/>
        <Content data={data} setData={setData} />
      </div>
    </div>
  )
}

export default App