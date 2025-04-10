import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {

    const getStoredValue = () => {

        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            return initialValue;
        }
    }

    const [value, setValue] = useState(getStoredValue());

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