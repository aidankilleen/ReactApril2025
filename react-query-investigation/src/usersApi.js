
const API_URL = 'http://localhost:3000/users';

export const fetchUsers = async () => {
    console.log("fetchUsers");
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Network Response Error");
    }
    return res.json();
}
export const addUser = async(user) => {

    const res = await fetch(API_URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(user)
    });

    if (!res.ok) {
        throw new Error("Error adding user");
    }
    return res.json();
}
export const deleteUser = async(id) => {
    const res = await fetch(
        `${API_URL}/${id}`, 
        {
            method: "DELETE"
        }
    );
    if (!res.ok) {
        throw new Error("Error deleting user");
    }
    return res.json();
}

export const updateUsers = async(user) => {
    const res = await fetch(
        `${API_URL}/${user.id}`, 
        {
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(user)            
        }
    );

    if (!res.ok) {
        throw new Error("Error deleting user");
    }
    return res.json();    
}

