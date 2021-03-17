import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Array<Todo> = [
  {id:"0961809283019856",task : "Clean the car", completed : true,createddate : new Date().toDateString(), lastupdateddate : new Date().toDateString()},
  {id:"1628094180698",task : "Wash the dishes",completed : false,createddate : new Date().toDateString(), lastupdateddate : new Date().toDateString()},
  {id:"6873470938746687",task : "Buy groceries", completed: true,createddate : new Date().toDateString(), lastupdateddate : new Date().toDateString()}
];


const App: React.FC = () => {
  const [todos,setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
        if(todo === selectedTodo)
        {
          return {
            ...todo,
          completed : !todo.completed
          }
        }
        return todo;
      });
      setTodos(newTodos);    
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
    setTodos([...todos,{ task: newTodo, 
      completed : false,
      createddate : new Date().toDateString(),
      id : "128397128957198279387",
      lastupdateddate : new Date().toDateString()
    }]);
  };

  return (<React.Fragment>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <AddTodoForm addTodo={addTodo}/>
        </React.Fragment>)
}

export default App; 
