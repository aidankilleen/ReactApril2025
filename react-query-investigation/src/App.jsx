import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addUser, deleteUser, fetchUsers, updateUsers } from './usersApi';



function App() {

  const [name, setName] = useState("");

  const queryClient = useQueryClient();

  const {data:users, isLoading, isError, error} =useQuery({
    queryKey: ['users'], 
    queryFn: fetchUsers
  });

  const addMutation = useMutation({
    mutationFn: addUser, 
    onSuccess: () => {
      console.log("invalidateQueries");
      queryClient.invalidateQueries({queryKey:['users']});
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser, 
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['users']});
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateUsers, 
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['users']});
    }
  });

  const onAdd = () => {

    const newUser = {
      name:"ANEW User", 
      email:"anew.user@gmail.com", 
      active: true
    }

    addMutation.mutate(newUser);

  }
  if (isLoading) {
    return (<div>Loading...</div>);
  }

  if (isError) {
    return (<div>Error: {error.message}</div>)
  }

  const onDelete = (id) => {
    if (confirm("Are you sure?")) {
      
      deleteMutation.mutate(id);
    }
  }
  const onUpdate = (user) => {

    updateMutation.mutate({...user, active:!user.active});

  }

  return (
    <>
      <h1>React Query Investigation</h1>

      <input value={name} onChange={evt=>setName(evt.target.value)}/>

      <button onClick={onAdd}>Generate User</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          { users.map(user => <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.active ? "Active" : "Inactive"}</td>
              <td>
                <button onClick={() => onDelete(user.id)}>Delete</button>
                <button onClick={() => onUpdate(user)}>Toggle Active</button>
              </td>
            </tr>)}
        </tbody>
      </table>
    </>

  )
}

export default App
