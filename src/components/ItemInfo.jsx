import { useItemContext } from "../hooks/useItemsContext"

const ItemInfo = ({item}) =>
{
    const {dispatch} = useItemContext()
    const handleClick = async () =>
    {
        const response = await fetch('/api/items/' + item._id,
        {
            method: 'DELETE'
        })
        const json = await response.json()
            if(response.ok)
            {
                dispatch({type: 'DELETE_ITEM', payload: json})
            }
        
    } 

    return(
        <div className="itemInfo">
            <h3 className="itemName">{item.name}</h3>
            <h4 className="itemLocation">{item.location}</h4>
            <h5 className="category">{item.category}</h5>
            <p className="description">{item.description}</p>
            <p>{item.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default ItemInfo