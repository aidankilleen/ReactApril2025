import { useEffect, useRef, useState } from 'react'
import './App.css'
import useLocalStorage from './useLocalStorage'

function App() {

  const txtName = useRef();
  const txtEmail = useRef();
  const selSubscription = useRef();
  const txtPhone = useRef();

  const [count, setCount] = useState(0)

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const [settings, setSettings] = useLocalStorage("settings", {
    name:"aidan", 
    email:"aidan@gmail.com", 
    subscription:"professional",
    phone:"087 1234568"
  })

  const onNameChange = evt => {
    
    setSettings(prev => {
      return {
        ...prev, 
        name: evt.target.value
      }
    })
  }
  const onSave = evt => {
    let name = txtName.current.value;
    let email = txtEmail.current.value;
    let subscription = selSubscription.current.value;
    let phone = txtPhone.current.value;

    setSettings({name, email, subscription, phone});
  }


  useEffect(()=>{
    txtName.current.value = settings.name;
    txtEmail.current.value = settings.email;
    selSubscription.current.value = settings.subscription;
    txtPhone.current.value = settings.phone;
  }, [settings]);
  
  return (
    <div style={{
      color:darkMode?"white":"black", 
      backgroundColor:darkMode?"black":"white", 
      width: "100%", 
      height: "100vh"
    }}>
      <h1>Custom Hook</h1>

      <input 
        type="checkbox"
        checked={darkMode}
        onChange={evt=>setDarkMode(evt.target.checked)}/>

      {darkMode ? "dark" : "light"}

      <div>{JSON.stringify(settings)}</div>
      <hr/>

      Name: <input ref={txtName}/><br/>
      Email: <input ref={txtEmail}/><br/>
      Subscription: <select ref={selSubscription}>
          <option>professional</option>
          <option>personal</option>
          <option>free</option>
        </select><br/>
      Telephone: <input ref={txtPhone}/><br/>
      {/*<input value={settings.name} 
        onChange={onNameChange}/>*/}

      <button onClick={onSave}>Save</button>

    </div>
  )
}

export default App
