import { useContext } from "react";
import { DarkModeContext } from "../App";

const ContactDetails = () => {

    const {darkMode, setDarkMode} = useContext(DarkModeContext);

    return (
        <>
            <h3>Contact Details</h3>

            {darkMode ? "Dark" : "Light"}


                <button onClick={()=>setDarkMode(true)}>Set Dark Mode</button>
        </>
    )
}

export default ContactDetails;