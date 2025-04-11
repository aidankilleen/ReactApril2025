import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { useForm } from "react-hook-form";

const AddTodoForm = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const { register, handleSubmit, formState:{errors}} = useForm();
    

    const onSubmit = evt => {

        //evt.preventDefault();

        if (value) {
            dispatch(addTodo({title:value}));
        } 
    }
    return (
        <>
            <h2>AddTodoForm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input 
                    {...register('name', {required:'Name is required'})}
                    placeholder="Enter Todo"
                    value={value}
                    onChange={evt=>setValue(evt.target.value)}/>{value}

                <button type="submit">Save</button>

                {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
            </form>
        </>
    )
}

export default AddTodoForm;

