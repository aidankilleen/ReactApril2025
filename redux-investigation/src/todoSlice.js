import { createSlice, nanoid } from "@reduxjs/toolkit"


export const todoSlice = createSlice({
    name: 'todos', 
    initialState: {
        todos:[
        {id:nanoid(), title: 'todo 1', completed: true}, 
        {id:nanoid(), title: 'todo 2', completed: false}, 
        {id:nanoid(), title: 'todo 3', completed: false}, 
        {id:nanoid(), title: 'todo 4', completed: false}, 
    ]}, 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title, 
                completed: false
            }
            state.todos.push(todo);
        }, 
        toggleComplete: (state, action)=>{
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
});

export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
