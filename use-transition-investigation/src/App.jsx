import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;
  const handleChange = (evt) => {
    setName(evt.currentTarget.value);

    startTransition(()=>{
      const l = [];
      for (let i=0; i< LIST_SIZE; i++) {
        l.push(evt.target.value);
      }
      setList(l);
    });
  }
  return (
    <>
      <h1>Use Transition Investigation</h1>
      <input 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleChange}/>{name}<br/>
        

        { 
          isPending ? <img src="/src/assets/lg.gif"/> :
          list.map((item, index) => <div key={index}>{item}</div>)
        }
    </>
  )
}

export default App
