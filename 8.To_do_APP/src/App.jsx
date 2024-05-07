import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [Uid, setUid] = useState("");
const [update,SetUpdate]=useState(false)





  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTask = () => {
    setList([...list, input]);
    setInput("");
  };
  //   const handleUpadte = () => {
  //     list.splice(Uid, 1, input);
  //     setList([...list, input]);
  //     setInput("");
  //   };
  const handleUpdate = () => {
    // Create a copy of the list
    const updatedList = [...list];
    // Update the item at the specified index
    updatedList[Uid] = input;
    // Set the updated list state
    setList(updatedList);
    // Clear input and Uid state
    setInput("");
    setUid("");

    SetUpdate(false);
  };
  

  const handleDelete = (i) => {
    const filterList = list.filter((elm) => elm !== list[i]);
    console.log(filterList);
    setList(filterList);
  };
  const handleEdit = (i) => {
    const filterList = list.filter((elm) => elm == list[i]);

    setInput(filterList[0]);
    setUid(i);
    SetUpdate(true)

  };

  return (
    <>
      <div className="App">
        <h2>Todo App</h2>
        <div className="container">
          <input type="text" value={input} onChange={handleInput} />
       {update ? <button className="main" onClick={handleUpdate}>
            Update task</button>:<button className="main" onClick={handleTask}> Add task</button> 
          }
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => {
              return (
                <li key={i}>
                  {item}{" "}
                  <span id="logo">
                    <i
                      onClick={() => handleEdit(i)}
                      id="delete"
                      class="fa-solid fa-pencil"
                    ></i>
                    <i
                      onClick={() => handleDelete(i)}
                      id="delete"
                      class="fa-solid fa-trash"
                    ></i>
                  </span>{" "}
                </li>
              );
            })}
            {/* {list.map((item, i) => (
             <li key={i}>{item}</li> // Rendering each item in the list as an <li> element
               ))}  */}
          </ul>
        </div>
      </div>
    </>
  );
}
