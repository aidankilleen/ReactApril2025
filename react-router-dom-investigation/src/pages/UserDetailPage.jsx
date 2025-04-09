import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetailPage = () => {

    const [user, setUser] = useState({});

    const {id} = useParams('id');

    useEffect(()=>{
        fetch(`https://api.acodingtutor.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser({...data}))
    }, []);
    return (
        <div>
            <h2>UserDetail Page</h2>
            {id}
            {JSON.stringify(user)}
        </div>
    )
}

export default UserDetailPage;