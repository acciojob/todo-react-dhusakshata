
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState([]);

  const handleInputVal = (e) => {
    console.log(inputVal);
    setInputVal(e.target.value);
  }

  const handleAddTodoBtn = () => {
    if (inputVal) {
      const newList = [...list, inputVal]; // Create a new array with the updated data
      setList(newList); // Update the state with the new array
      setInputVal(""); // Clear the input field
    }
    
  }

  const handleDelete = (index) => {
    // Create a new array excluding the todo item to delete
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  }

  return (
    <div className="main-div">
        <h1 className="h1">To Do List</h1>
          <div className="input-box">
                <input
                className="input"
                type="text"
                onChange={handleInputVal}
                value={inputVal}
                />
                <button 
                className="btn"
                onClick={handleAddTodoBtn}>Add Todo</button>
          </div>
          <ul className="doto-container">
             {
               list.map((listItem, index) => {
                return (
                  <li className='todolist-container'>
                      <p>{listItem}</p>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                  </li>
                )
              })
            }
          </ul>
    </div>
  )
}

export default App