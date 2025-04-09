import { useNavigate } from "react-router-dom";
import ContactDetails from "../components/ContactDetails";

const ContactPage = () => {

    const navigate = useNavigate();


    const goHome = () => {

        navigate("/");
    }
    return (
        <div>
            <h2>Contact Us</h2>

            <button onClick={goHome}>Go Home</button>

            <ContactDetails/>
        </div>
    )
}

export default ContactPage;