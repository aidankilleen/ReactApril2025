import { useNavigate } from "react-router-dom";

const ContactPage = () => {

    const navigate = useNavigate();


    const goHome = () => {

        navigate("/");
    }
    return (
        <div>
            <h2>Contact Us</h2>

            <button onClick={goHome}>Go Home</button>
        </div>
    )
}

export default ContactPage;