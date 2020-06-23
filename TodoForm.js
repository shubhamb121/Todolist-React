 import React ,{useState} from 'react';

function TodoForm({addTodo}) {
    const[todo,setTodo]=useState({
        id:"",
        task:"",
        completed:false

    });

    function handleTaskInputChange(e){
        setTodo({...todo,task:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
          addTodo({...todo, id:'a'});  

          setTodo({...todo,task:""});
        }
    }

    return(
        <form onSubmit ={handleSubmit}>
            <input
             name="task"
             type="text"
             value={todo.task}
             onChange={handleTaskInputChange}
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default TodoForm;
/*
import React, {useState} from "react";

const useInputValue = initialValue =>{
    const[value, setValue] = useState(initialValue);


return{
    value,
    onChange: e => setValue(e.target.value)
    };
};

export default ({onSubmit }) =>{
    const text =useInputValue("");
    // const email =useInputValue("");

    return (
    <form 
        onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
    }}
    >

//         <input {...text} />
//         /* <input {...email} /> */
//         </form>

//     );
// };
// */