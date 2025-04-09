import { useState } from 'react'
import './App.css'
import useLocalStorage from './useLocalStorage'

function App() {
  const [count, setCount] = useState(0)

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);


  return (
    <>
      <h1>Custom Hook</h1>

      <input 
        type="checkbox"
        checked={darkMode}
        onChange={evt=>setDarkMode(evt.target.checked)}/>

      {darkMode ? "dark" : "light"}
    </>
  )
}

export default App
