// import {Checkbox,IconButton, ListItem ,Typography} from "@material-ui"
import React from "react";
// import CloseIcon from "@material-ui/icons/Close";

function Todo({todo ,toggleComplete,removeTodo}) {
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(){
        removeTodo(todo.id);
    }



return(
    <div style ={{display : "flex"}} >
    <input type ="checkbox" onClick={handleCheckboxClick} />
    {/* // onClick={handleCheckboxClick}  */}
    <li
     style={{
        color:"white",
        textDecoration: todo.completed? "line-through" : null
     }}
     >
      {todo.task}   
     </li>

     <button  onClick ={handleRemoveClick}>X</button>
    
    </div>
    );
}

export default Todo;
