import { useState } from 'react'
import './App.css'

let memberList = [
  {id:1, name:"Alice", email:"alice@gmail.com", active:true}, 
  {id:2, name:"Bob", email:"bob@gmail.com", active:false}, 
  {id:3, name:"Carol", email:"carol@gmail.com", active:true}, 
  {id:4, name:"Dan", email:"dan@gmail.com", active:false}
];


function App() {
  
  const [members, setMembers] = useState(memberList);

  const onDeleteClicked = (id) => {
    console.log("onDeleteClicked()");

    if (confirm(`delete user ${id}`)) {
      console.log("doing the delete");

      let index = members.findIndex(member => member.id == id);
      setMembers(current => {
        console.log("setMembers()...");
        current.splice(index, 1);
        console.log(current);
        return [...current];
      })
    }
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.active ? "Active" : "Inactive"}</td>
              <td>
                <button onClick={() => onDeleteClicked(member.id)}>Delete</button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </>
  )
}

export default App