import React,{useState} from "react";




const Todo=()=>{


    const [todo,setTodo]=useState([]);
    const [item,setItem]=useState("");


    function addItem()
    {
        setTodo([...todo,item]);
    }

    function deleteItem(index)
    {
        let newTodo=[...todo];
        newTodo.splice(index,1);
        setTodo(newTodo);
    }


    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input type="text" onChange={(e)=>setItem(e.target.value)} />
                <button onClick={addItem} >Add Todo</button>
            </div>
            <ul className="todo-container">
                {
                    todo.map((item,index)=>(
                        <li className="item-container">
                            <p>{item}</p>
                            <button onClick={()=>deleteItem(index)}></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;