import { useState } from 'react'

import './App.css'
import { useSelector } from 'react-redux'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  console.log("App()");

  //const todos = useSelector(state => state);
  
  const todos = useSelector(state => {

    console.log(state);
    return state.todos
  });
  

  return (
    <>
      <h1>Redux Investigation</h1>
      
      <TodoList/>

      <hr/>
      <AddTodoForm/>


      <hr/>
      {JSON.stringify(todos)}
    </>
  )
}

export default App
