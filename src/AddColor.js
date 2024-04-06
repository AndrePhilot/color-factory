import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddColor({ addColor }) {
    const navigate = useNavigate();

    const INITIAL_VALUES = {
        name: "",
        value: "#FF0000"
    };
    
    const [ formData, setFormData ] = useState(INITIAL_VALUES);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        addColor(formData);
        setFormData(INITIAL_VALUES);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Color name</label>
            <input 
                type="text"
                name="name" 
                value={ formData.name } 
                onChange={handleChange} 
                placeholder="Enter a name for the color">
            </input>
            <label>Color value</label>
            <input 
                type="color" 
                name="value" 
                value={ formData.value } 
                onChange={handleChange}>
            </input>
            <button type="submit">Add this color</button>
        </form>
    )
}

export default AddColor;