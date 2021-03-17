import React from "react";
import "./TodoListItem.css";

interface ToDoListItemProps {
    todo: Todo;
    toggleTodo : ToggleTodo;
}

export const ToDoListItem : React.FC<ToDoListItemProps> = ({todo,toggleTodo}) => {
    return (<li>
                <label className={todo.completed ? "completed" : undefined}>
                    <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(todo)}/>
                    {todo.task} 
                </label>
                &nbsp; - &nbsp;
                <label>
                    Completed ON : {todo.lastupdateddate}
                </label>
            </li>);    
};