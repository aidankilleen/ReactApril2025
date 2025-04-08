import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemberEdit from './MemberEdit';

let memberList = [
  {id:1, name:"Alice", email:"alice@gmail.com", active:true}, 
  {id:2, name:"Bob", email:"bob@gmail.com", active:false}, 
  {id:3, name:"Carol", email:"carol@gmail.com", active:true}, 
  {id:4, name:"Dan", email:"dan@gmail.com", active:false}
];


function App() {
  
  const [members, setMembers] = useState(memberList);
  const [editing, setEditing] = useState(false);
  const [memberToEdit, setMemberToEdit] = useState({});

  const onDeleteClicked = (id) => {
    console.log("onDeleteClicked()");

    if (confirm(`delete user ${id}`)) {
      console.log("doing the delete");

      let newMembers = members.filter(member=>member.id != id);
      setMembers(newMembers);


/*
      let index = members.findIndex(member => member.id == id);
      setMembers(current => {
        console.log("setMembers()...");
        //current.
        current.splice(index, 1);

        console.log(current);

        return [...current];

      })
        */

    }
  }

  const onEditClicked = (member) => {

    console.log(member);
    setEditing(prev => !prev);
    setMemberToEdit({...member});

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
                <button onClick={() => onEditClicked(member)}>Edit</button>
              </td>
            </tr>))}
        </tbody>
      </table>
      <div>
        {/*<MemberEdit member={memberToEdit}/>*/}
        { editing && <MemberEdit {...memberToEdit}/>}
      </div>
    </>
  )
}

export default App
