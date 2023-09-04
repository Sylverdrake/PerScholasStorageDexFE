import { useState } from "react"
import { useItemContext } from '../hooks/useItemsContext'
const NewItem = () =>
{
    const { dispatch } = useItemContext()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>
    {
        e.preventDefault()
        const item = {name, location, category, description}
        const response = await fetch('/api/items', 
        {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json()
            if(!response.ok)
            {
                setError(json.error)
            }
            if(response.ok)
            {
                setName('')
                setLocation('')
                setCategory('')
                setDescription('')
                setError(null)
                console.log('New Item Added', json)
                dispatch({type:'CREATE_ITEM', payload: json})
            }
    };

    return(
        <form className="newItem" onSubmit={handleSubmit}>
            <h3>Add A New Item</h3>
            <label>Item Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>

            <label>Item Location:</label>
            <input type="text" onChange={(e) => setLocation(e.target.value)} value={location}/>

            <label>Item Category:</label>
            <input type="text" onChange={(e) => setCategory(e.target.value)} value={category}/>

            <label>Item Description:</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
        <button>Add Item</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default NewItem