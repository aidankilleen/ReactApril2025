import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(initialValue);

    useEffect(()=>{

        try {

            localStorage.setItem(key, JSON.stringify(value))
        }catch(err) {
            console.log("Error");
        }


    }, [key, value]);


    return [value, setValue];
}

export default useLocalStorage;