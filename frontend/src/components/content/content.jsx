import React, { useEffect, useState } from "react";
import "./content.css";
import Tile from "../tiles/tile";

const Content = ({data, setData}) => {

  const handleComplete = (id) => {
    fetch("http://localhost:8080/api/todos/", {method: "PATCH" , headers: {"todoid": id}})
      .then((data) => console.log(data))
  }

  const handleDelete = async (id) => {
    const newTodo = data.filter((l) => l.title !== id)
    setData(newTodo)
    fetch("http://localhost:8080/api/todos/", {method: "DELETE" , headers: {"deleteid": id}})
      .then((data) => console.log(data))
  }
  
  setTimeout(() => {
    console.log(1, data)
  }, 1000);

  return (
    <div className="content_main-div">
        {data.map((d) => {
          return (
            <Tile
              key={d._id}
              title={d.title}
              status={d.status}
              dueDate={d.dueDate}
              createdAt={d.createdAt}
              indexId={10}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          );
        })}
    </div>
  );
};

export default Content;