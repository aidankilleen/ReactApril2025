import { useState } from "react";

const MemberEdit = (memberToEdit) => {

    const [member, setMember] = useState(memberToEdit);
    return (
        <>
        <div>
            MemberEdit

            <input 
                value={member.name} 
                onChange={evt=>setMember(
                    current => ({...current, name:evt.target.value}))}/>
        </div>
        <div>
            {JSON.stringify(member)}
        </div>
        </>
    )
}

export default MemberEdit;