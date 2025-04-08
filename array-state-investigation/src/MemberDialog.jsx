import { useState } from "react";
import './MemberDialog.css';

const MemberDialog = ({member:memberToEdit, 
                    onSave, onCancel}) => {

    //const onSave = props.onSave;
    //console.log(props);
    const [member, setMember] = useState({
        ...memberToEdit
    });
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onCancel}>&times;</span>
                <h2>MemberEdit</h2>

                <input 
                    value={member.name} 
                    onChange={evt=>setMember(
                        current => ({...current, name:evt.target.value}))}/><br/>

                <input 
                    value={member.email} 
                    onChange={evt=>setMember(
                        current => ({...current, email:evt.target.value}))}/><br/>
                        
                <input 
                    type="checkbox"
                    checked={member.active} 
                    onChange={evt=>setMember(
                        current => ({...current, active:evt.target.checked}))}/><br/>


                <button onClick={()=>onSave(member)}>Save</button>
                <button onClick={()=>onCancel()}>Cancel</button>
            </div>
        </div>
    )
}

export default MemberDialog;