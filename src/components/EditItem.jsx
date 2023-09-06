import { useState } from "react"
import { useItemContext } from '../hooks/useItemsContext'
const EditItem = () =>
{
    const { dispatch } = useItemContext()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) =>
    {
        e.preventDefault()
        const item = {name, location, category, description}
        const response = await fetch('/api/items', 
        {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json()
            if(!response.ok)
            {
                setError(json.error)
                setEmptyFields(json.emptyFields)
            }
            if(response.ok)
            {
                setError(null)
                setEmptyFields([])
                console.log('Updated Item', json)
                dispatch({type:'Updated_ITEM', payload: json})
            }
    };

    return(
        <form className="editItem" onSubmit={handleSubmit}>
            <h3>Edit Item</h3>
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

export default EditItem