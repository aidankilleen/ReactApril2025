/*
function HelloWorld() {

}
*/


// rules of jsx
// all tags must be closed either matching or self-closing
// only return a single root element
// use fragment to avoid adding extra parent elements in the dom <></>
// all html attributes must be lower camel cased
// use className instead of class (class is a reserved word in JavaScript)
// use {} for code pieces - substituting in variables, simple conditions, loops
// html comments don't work use {/* */} instead
// use { JSON.stringify(o)} for debugging


// use this style instead of using the function keyword
const HelloWorld = () => {

    // logic for the component
    let name = "Aidan";
  
    let r = Math.random();
  
    let o = {
      name:"Aidan", 
      email:"aidan@gmail.com"
    }
  
    let colours = ["red", "green", "blue"];
  
    // structure of the component is going to be in JSX
    //return `<div>HelloWorld Component</div>`
  
    return (
      <>
        <div className="mydiv">
        <h1 dataName="somename">HELLOWORLD</h1> 
        <input value={name}/><br/>
        <hr/>
        </div>
        <div>Welcome {name}</div>
        <div>{r} {r > 0.5 ? <div>is big</div> : <div>small</div>} </div>
  
        { /*this is a comment */}
  
        { JSON.stringify(o) }
  
        <hr/>
        <ul>
        { colours.map(colour => <li key={colour}>{colour}</li>)}
        </ul>
        <hr/>
  
      </>
      )
  
  }

export default HelloWorld;
