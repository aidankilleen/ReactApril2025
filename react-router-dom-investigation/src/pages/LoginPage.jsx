import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../App";

const LoginPage = () => {

    const navigate = useNavigate();

    const {loggedIn, setLoggedIn} = useContext(LoggedInContext);

    const [credentials, setCredentials] = useState({username:"", password:""})

    const onLogin = () => {
        if (credentials.username == "Aidan" && credentials.password == "LetMeIn") {
            console.log("logged in");
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }

    }
    const onCancel = () => {
        navigate('/');
    }

    return (
        <>
        <h3>Login</h3>
        username:<input 
                    value={credentials.username} 
                    onChange={
                        evt=>setCredentials(prev=>({...prev, username:evt.target.value}))
                    }/><br/>
        password:<input
                    type="password"
                    value={credentials.password}
                    onChange={evt=>setCredentials(prev=>({...prev, password:evt.target.value}))
                    }/><br/>
        <button onClick={onLogin}>Login</button>
        <button onClick={onCancel}>Cancel</button>
        </>
    )
}

export default LoginPage;