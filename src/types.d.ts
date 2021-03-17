type Todo = {
    id: ID,
    task : string,
    createddate : date,
    completed : boolean,
    lastupdateddate: date
}

type ToggleTodo = (selected: Todo) => void;

type AddTodo = (newTodo: string) => void;