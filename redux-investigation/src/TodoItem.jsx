import { useDispatch } from 'react-redux'
import './TodoItem.css'
import { deleteTodo, toggleComplete } from './todoSlice';

const TodoItem = ({todo}) => {

    const dispatch = useDispatch();

    const handleCheckboxClick = () => {

        //call the toggleComplete reducer in the slice
        dispatch(toggleComplete({id:todo.id, completed:!todo.completed}))

    }
    const handleDeleteClick = () => {
        if (confirm("Are you sure")) {
            dispatch(deleteTodo({id: todo.id}));
        }
    }

    return (
        <>

        <li><span className={todo.completed ? "done" : ""}>{todo.title}</span>
            <input type="checkbox" checked={todo.completed} onChange={handleCheckboxClick}/>
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
        </>
    )
}

export default TodoItem;