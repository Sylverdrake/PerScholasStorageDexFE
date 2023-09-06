import { useState } from "react"
import { useItemContext } from '../hooks/useItemsContext';
import { useAuthContext } from "../hooks/useAuthContext";
const NewItem = () =>
{
    const { dispatch } = useItemContext();
    const {user} = useAuthContext();
    
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
;
    const handleSubmit = async (e) =>
    {
        e.preventDefault()
            if(!user)
            {
                setError('You must be logged in.')
                return
            }
        const item = {name, location, category, description}
        const response = await fetch('/api/items', 
        {
            method: 'POST',
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
                setEmptyFields(json.emptyFields)
            }
            if(response.ok)
            {
                setName('')
                setLocation('')
                setCategory('')
                setDescription('')
                setError(null)
                setEmptyFields([])
                console.log('New Item Added', json)
                dispatch({type:'CREATE_ITEM', payload: json})
            }
    };

    return(
        <form className="newItem" onSubmit={handleSubmit}>
            <h3>Add A New Item</h3>
            <label>Item Name:</label>
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)} 
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>Item Location:</label>
            <input 
                type="text" 
                onChange={(e) => setLocation(e.target.value)} 
                value={location}
                className={emptyFields.includes('location') ? 'error' : ''}
            />

            <label>Item Category:</label>
            <input 
                type="text" 
                onChange={(e) => setCategory(e.target.value)} 
                value={category}
                className={emptyFields.includes('category') ? 'error' : ''}
            />

            <label>Item Description:</label>
            <input
                type="text" 
                onChange={(e) => setDescription(e.target.value)} 
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />
        <button>Add Item</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default NewItem