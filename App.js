
  import React, { useState,useEffect} from 'react';
  // import logo from './logo.svg';
  import  './App.css';
  // import TodoForm from "./components/TodoForm"
  // import { render } from '@testing-library/react';
  import TodoForm from "./components/TodoForm";
  import TodoList from "./components/TodoList" ;
  import Todo from  "./components/Todo"

  const LOCAL_STORAGE_KEY ="react-todo-list-todos";


    function App() {
    const[todos, setTodos]=useState([]);



    useEffect(() => {
      const storageTodos =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(storageTodos) {
        setTodos(storageTodos);
      }
    },[]);

    useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
    },[todos]);

    function addTodo(todo){
      setTodos([todo,...todos]);
    }

    function toggleComplete(id){
      setTodos(
        todos.map(todo => {
          if (todo.id == id) {
            return{
              ...todo,
              completed : !todo.completed
            };
          }
          return todo;
        })
      );
    }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id!==id));
  }


    return(
      <div className="App">
      {/* <Typography style={{padding :16}} variant ="h1"> */}
      {/* <p>React Todo</p> */}
      {/* </Typography> */}
        <header className ="App-header">
        <p>React Todo</p>
          <TodoForm addTodo ={addTodo} />
          <TodoList 
          todos ={todos} 
          toggleComplete={toggleComplete } 
          removeTodo={removeTodo}
          />
        </header>
      </div>
    );
  }
  export default App



// export default () =>{

//   const[todos,setTodos]=useState([]);
  
//   return(
//     <div className="App">
//       <TodoForm 
//       onSubmit ={text =>setTodos ([{text,complete:false},...todos])} 
//       />
//     {/* <div>count:{count}</div>
//     <button onClick={() => setCount(count+1)}> button</button> }
//     <div>
//       {
//         todos.map()
//       }
//     </div>
//     </div>
//   );

// };
// */
