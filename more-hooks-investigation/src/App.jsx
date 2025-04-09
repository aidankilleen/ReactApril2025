import { useRef } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const buttonRef = useRef();
  const renderCountRef = useRef(0);

  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  
  useEffect(()=>{
    buttonRef.current.focus();
  }, []);

  // setRenderCount(current => current + 1);

  // this gets called every render
  useEffect(()=>{
    //setRenderCount(current => current + 1);

    renderCountRef.current++;
  }); // this gets called each re-render

//  without the useEffect it gets called twice (Strict - mode)

  return (
    <>
      <h1>More Hooks Investigation</h1>
      Re-renders:{renderCountRef.current}

    <button onClick={()=>renderCountRef.current++}>++</button>

      <button onClick={
        ()=>buttonRef.current.focus()
      }>Set Focus to other button</button><br/>

      <input value={name} onChange={evt=>setName(evt.target.value)}/>{name}<br/>
      <input/><br/>
      <input/><br/>

      <button ref={buttonRef}>Press Me</button>
    </>
  )
}

export default App
