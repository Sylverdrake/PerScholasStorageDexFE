import { useState } from "react";
import { useParams } from "react-router-dom";

import { useItemContext } from '../hooks/useItemsContext';
import { useAuthContext } from "../hooks/useAuthContext";

const EditItem = (props) =>
{
    let item = props.item;
    let {id} = useParams();

    const { dispatch } = useItemContext();
    const {user} = useAuthContext();
    
    const [name, setName] = useState(`${item.name}`);
    const [location, setLocation] = useState(`${item.location}`);
    const [category, setCategory] = useState(`${item.category}`);
    const [description, setDescription] = useState(`${item.description}`);
    const [error, setError] = useState(null);
    // const [emptyFields, setEmptyFields] = useState([item]);

    const handleSubmit = async (e) =>
    {
        e.preventDefault()
            if(!user)
            {
                setError('You must be logged in.')
                return
            }
        const item = {name, location, category, description}
        const response = await fetch(`/api/items/${id}`, 
        {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: 
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
            if(!response.ok)
            {
                setError(json.error)
                console.log("Error")
                // setEmptyFields(json.emptyFields)
            }
            if(response.ok)
            {
                setError(null)
                // setEmptyFields([])
                console.log('Item edited.', json)
                dispatch({type:'UPDATE_ITEM', payload: json})
            }
    };
    return(
        <form className="newItem" onSubmit={handleSubmit}>
        <h3>Edit Item</h3>
        <label>Item Name:</label>
        <input 
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            defaultValue={item.name}
            // className={emptyFields.includes(`${item.name}`) ? 'error' : ''}
        />

        <label>Item Location:</label>
        <input 
            type="text" 
            onChange={(e) => setLocation(e.target.value)} 
            defaultValue={item.location}
            // className={emptyFields.includes(`${item.location}`) ? 'error' : ''}
        />

        <label>Item Category:</label>
        <input 
            type="text" 
            onChange={(e) => setCategory(e.target.value)} 
            defaultValue={item.category}
            // className={emptyFields.includes(`${item.category}`) ? 'error' : ''}
        />

        <label>Item Description:</label>
        <input
            type="text" 
            onChange={(e) => setDescription(e.target.value)} 
            defaultValue={item.description}
            // className={emptyFields.includes(`${item.description}`) ? 'error' : ''}
        />
    <button>Edit Item</button>
    {error && <div className="error">{error}</div>}
    </form>
    )
}

export default EditItem