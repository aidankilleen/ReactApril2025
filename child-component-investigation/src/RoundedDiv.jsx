import './RoundedDiv.css';
const RoundedDiv = ({title, backgroundColor, borderWidth, children}) => {

    let styles = {
        backgroundColor, 
        borderWidth: `${borderWidth}px`
    }
    console.log(styles);
    return(
        <div className="rounded-div" style={styles}>

            { title && <h2>{title}</h2>}
            {children}
        </div>
    )

}

export default RoundedDiv;