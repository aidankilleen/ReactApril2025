import { useState } from 'react'
import './App.css'
import MemberDialog from './MemberDialog';
import MemberTable from './MemberTable';

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
This did not work
NB: make a new array using filter or map
Do not modify current or members directly

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

  const onSave = (updatedMember) => {

    const newList = members.map(
      member => member.id == updatedMember.id ? updatedMember : member);
    setMembers(newList);
    setEditing(false);

  }
  return (
    <>
      <MemberTable 
        members={members} 
        onDelete={onDeleteClicked}
        onEdit={onEditClicked}/>
      
      <div>
        {/*<MemberEdit member={memberToEdit}/>*/}
        { editing && <MemberDialog member={memberToEdit} 
                        onSave={onSave} 
                        onCancel={()=>setEditing(false)}/>}
      </div>
    </>
  )
}

export default App
