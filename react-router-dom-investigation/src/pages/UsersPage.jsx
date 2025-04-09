import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{

        fetch('https://api.acodingtutor.com/users?_page=1&_per_page=10')
        .then(res => res.json())
        .then(data => setUsers([...data]));

    }, []);
    return (
        <div>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr>
                        <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.active ? 'Active' : 'Inactive'}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage;