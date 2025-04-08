import React from "react";


const Highlighter = ({children}) => {
    
    const modifiedChildren = React.Children.map(children, child => {

        return <div style={{backgroundColor:"lightcoral"}}>{child}</div>;
    });

    return (
        <div>
            {modifiedChildren}
        </div>
    )
}

export default Highlighter;