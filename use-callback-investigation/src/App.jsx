import { useCallback, useState } from 'react'
import './App.css'
import List from './List';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [number, setNumber] = useState(0);

  const styles = {
    color: darkMode ? "white": "black", 
    backgroundColor: darkMode ? "black" : "white"
  }

  // getItems() is recreated for each render - so List is updated each render
  //const getItems = () => {
  //  return [number, number + 1, number + 2]
  //}

  // useCallback means getItems is only changed when number changes (dependency list)
  // so List is only updated when number changes. (not when dark / light mode changes)
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number]);


  return (
    <>
    DarkMode:<input 
      type="checkbox" 
      checked={darkMode} onChange={evt => setDarkMode(evt.target.checked)}
      />{ darkMode ? "dark" : "light"}
    
    <div className="fullScreen" style={styles}>
      <h1>Use Callback Investigation</h1>

      <input 
        type="number" 
        value={number} 
        onChange={evt => setNumber(parseInt(evt.target.value))}/>{number}


      <List getItems={getItems}/>

    </div>
    </>
  )
}

export default App
