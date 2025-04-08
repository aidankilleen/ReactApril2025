import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import Message from './Message';

function App() {
//  const [count, setCount] = useState(0)

  let m = {
    id: 1,
    title: "Message 1",
    content: "This is message 1", 
    author: "Aidan"
  }

  // spread operator
  let {title, content, ...rest} = m;
  console.log("Destructuring:");
  console.log(title, content);
  console.log(rest);

  let messages = [
    {id:1, title:"Message 1", content:"this is message 1", author:"Aidan", urgent:true}, 
    {id:2, title:"Message 2", content:"this is message 2", author:"Bob", urgent:true}, 
    {id:3, title:"Message 3", content:"this is message 3", author:"Carol", urgent:false}, 
    {id:4, title:"Message 4", content:"this is message 4", author:"Dan", urgent:false}, 
  ];

  let [first, second, ...others] = messages;

  console.log(first);
  console.log(second);
  console.log(others);

  console.log("===========================");
  console.log(m)

  let c = {...m}; // create a proper copy of the original m

  console.log(c);

  c.name = "CHANGED";
  console.log(m)
  console.log(c);


  console.log("===========================");


  let name = "Aidan";

  return (
    <>
      <h1>Hello {name}</h1>
      {messages.map(message =><Message key={message.id}{...message}/>)}
    </>
  )
}

export default App
