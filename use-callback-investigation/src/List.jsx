import { useEffect, useState } from "react";

const List = ({getItems}) => {


    const [items, setItems] = useState([]);

    useEffect(() => {

        console.log("updating items");
        setItems(getItems());
    }, [getItems]);

    return (
        <>
            <h2>List</h2>

            <ul>
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
}

export default List;