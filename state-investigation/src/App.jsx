import { useState } from 'react'
import './App.css'

const testPerson = {
  id:1, 
  name: "Alice", 
  email: "alice@gmail.com", 
  active: true
}

function App() {
  console.log("App() called");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("alice");

  const [person, setPerson] = useState(testPerson);

  //let show = false;

  const onClick = () => {
    console.log(`onClick() called`);
    //show = !show;
    setShow(!show);
    console.log(`show:${show}`);
  }
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const increaseByTwo = () => {

    // if you are changing a state value
    // using the currentValue
    // don't use setCount(count+1)

    setCount(prev => prev+1);
    setCount(prev => prev+1);
/*
    setCount(count + 1);
    console.log(count)
    setCount(count + 1);
    console.log(count);
    */
  }
  const modifyCount = (amount)=>{
    console.log(`modifying Count... ${amount}`);
    setCount(prev => prev + amount);
  }
  const onChangeName = (evt) => {
    setName(evt.target.value);
  }

  const onActiveChanged = evt => {
    console.log("onActiveChanged() called");
    //person.active = evt.target.checked;
    // referential equality bug
    // react doesn't recognise changes to the contents of an object hence doesn't refresh
    // react does recognise when an object changes - i.e. becomes a new object
    //setPerson(person);
    //setPerson({...person, active: evt.target.checked});

    // recommendation - use the callback version of the set to ensure you have the current value of the object
    setPerson(current => ({...current, active: evt.target.checked}));

    console.log(person)

  }
  return (
    <>
      <h1>State Investigation</h1>

      <input value={name} onChange={evt=>setName(evt.target.value)}/>
      <button onClick={()=>setName("")}>Clear</button>
      <hr/>
      {name}
      <hr/>

      <button onClick={onClick}>Press Me</button>
      {console.log("rerendering")}
      {show && <div>Click button to toggle</div>}

      <hr/>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={increaseByTwo}>++</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => modifyCount(-2)}>--</button>
      <hr/>

      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>{person.id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{person.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td><input 
                  value={person.email} 
                  onChange={evt=>setPerson(current=>({...current, email:evt.target.value}))}/></td>
          </tr>
          <tr>
            <td>Active:</td>
            <td><input type="checkbox" 
                  checked={person.active}
                  onChange={onActiveChanged}  
                />{person.active}</td>
          </tr>
        </tbody>
      </table>
      <hr/>
      {JSON.stringify(person)}
    </>
  )
}

export default App
