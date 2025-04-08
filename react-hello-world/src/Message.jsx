import './Message.css';

//const Message = (props) => {
//const Message = ({title, content}) => {


const Message = (message) => {

    let styles = {
        backgroundColor: message.urgent ? "lightcoral" : "lightgreen", 
    }

    return (
        <>
        <div className="message" style={styles}>
            {message.urgent && <div>URGENT</div>}
            <h1>{message.title}</h1>
            <p>{message.content}</p>

            <div style={{display:message.urgent?"block":"none"}}>URGENT***</div>
            <div>
                {JSON.stringify(message)}
            </div>
        </div>
        </>
    )
}
export default Message;