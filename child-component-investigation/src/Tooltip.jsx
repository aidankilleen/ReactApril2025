import './Tooltip.css';


const Tooltip = ({message, children}) => {

    return (
        <div className="tooltip">
            {children}
            <div className="tooltip-content">{message}</div>
        </div>
    )
}

export default Tooltip;

