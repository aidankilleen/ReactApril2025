import { useState } from 'react';
import './App.css'
import { useMemo } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [arraySize, setArraySize] = useState(10000000);

  const n = useMemo(()=>{
    return [...Array(arraySize).keys()].reduce((p, c) => p + c);
  }, [arraySize]);

  return (
    <>
      <h1>Memo Investigation</h1>
      <input type="number" 
        value={arraySize} 
        onChange={evt=>{setArraySize(parseInt(evt.target.value))}}/>
      {n}
      <hr/>
      {count}

      <button onClick={() => setCount(prev=>prev+1)}>++</button>
    </>
  )
}

export default App
