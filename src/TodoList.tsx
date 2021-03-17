import React from "react";
import { ToDoListItem } from "./TodoListItem";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo : ToggleTodo
}

export const TodoList: React.FC<TodoListProps>  = ({ todos, toggleTodo }) => {
    return <ul>{todos.map(todo => {
            return <ToDoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        }
    )}</ul>
}