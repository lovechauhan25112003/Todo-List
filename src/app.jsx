import { useState } from "react";
import "./app.css";
import Navbar from "./Components/Navbar";

export function App() {
  let [todoList, setTodoList] = useState([]);

  let savaTodoList = (event) => {
    let todoName = event.target.todoName.value; // take value from input
    if (!todoList.includes(todoName)) {
      let finalTodoList = [...todoList, todoName];
      setTodoList(finalTodoList);
    } else {
      alert("Todo Name Already Exists....");
    }

    event.preventDefault(); //pause the refresh
  };

  let list = todoList.map((value,index)=>{
    return(
      <TodoListItems value={value} key={index} indexNumber={index} 
      todoList={todoList} 
      setTodoList={setTodoList}
      />
    )
  })
  return (
    <>
      <Navbar/>
      <div className="container">
        <h1 className="heading">Todo List - Manage Your Task</h1>
        <hr></hr>
        <form onSubmit={savaTodoList}>
          <input type="text" name="todoName" id="" /> <button>Save</button>
        </form>
        <div className="outerDiv">
          <ul>{list}</ul>
        </div>
      </div>
    </>
  );
}

function TodoListItems({value,indexNumber,todoList,setTodoList}) {
  
  let [status,setStatus]=useState(false)
  let deleteRow = ()=>{
    let finalData = todoList.filter((v,i)=>i!=indexNumber)
    setTodoList(finalData)
  }

  let checkStatus = ()=>{
    setStatus(!status)

  }

  return (
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}>
      {indexNumber+1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
