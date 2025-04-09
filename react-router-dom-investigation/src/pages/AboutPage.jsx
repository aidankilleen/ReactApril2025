import AboutDetails from "../components/AboutDetails";

const AboutPage = ({darkMode}) => {

    return (
        <div>
            <h2>About Page</h2>

            <AboutDetails darkMode={darkMode}/>
        </div>
    )
}

export default AboutPage;