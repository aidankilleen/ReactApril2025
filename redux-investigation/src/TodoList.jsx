import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

    
    const todos = useSelector(state => state.todos)

    return (
        <>
        <h1>Todo List</h1>

        <ul>
            
            {todos.map(todo=><TodoItem key={todo.id} todo={todo}/>)}

        </ul>
        </>
    )
}

export default TodoList;

