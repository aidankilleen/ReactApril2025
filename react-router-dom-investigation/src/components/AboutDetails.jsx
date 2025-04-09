const AboutDetails = ({darkMode}) => {


    const styles = {

        color: darkMode ? "white" : "black",
        backgroundColor: darkMode ? "black" : "white"

    }


    return (
        <div style={styles}>
            <h3>About Details</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique corrupti sunt quia exercitationem placeat sequi iusto consectetur, id autem cupiditate eos necessitatibus molestias nam nisi cum incidunt recusandae atque?</p>
            <p>Officiis ad exercitationem rem amet odit reiciendis ullam similique eum repellendus doloremque incidunt maxime nobis, suscipit, ducimus porro ab, omnis accusamus. Qui et quas perferendis? Asperiores tempore molestias neque repudiandae!</p>
            <p>Officia, impedit. Vitae voluptates earum commodi? Laudantium voluptatum reprehenderit id quam quis, nihil voluptatem odio sit ratione eius quidem iure dicta? Sapiente sed, illum a sunt quis non eius tempore.</p>
            <p>Rem sunt doloribus iste non omnis cupiditate sed maxime officiis similique officia ea reiciendis blanditiis distinctio nemo, quae nulla incidunt neque quasi temporibus, architecto voluptatibus deleniti, impedit necessitatibus vero! Molestiae!</p>
            <p>Dolor, molestias necessitatibus! Omnis atque error ipsum esse quos maiores sint nihil ex tempora, nobis consequuntur porro ipsam ratione id? Adipisci provident nesciunt a cupiditate consequuntur blanditiis est eius sequi.</p>
        </div>
    )
}

export default AboutDetails;