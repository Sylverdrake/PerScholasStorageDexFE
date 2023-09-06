import { useItemContext } from "../hooks/useItemsContext"


//Date FNS
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const ItemInfo = ({item}) =>
{
    const {dispatch} = useItemContext()
    const handleDelete = async () =>
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

    // const handleUpdate = async () =>
    // {
    //     const response = await fetch('/api/items/' + item._id,
    //     {
    //         method: 'PATCH'
    //     })
    //     const json = await response.json()
    //         if(response.ok)
    //         {
    //             dispatch({type: 'UPDATE_ITEM', payload: json})
    //         }
    // }

    return(
        <div className="itemInfo">
            <h3 className="itemName">{item.name}</h3>
            <h4 className="itemLocation">{item.location}</h4>
            <h5 className="category">{item.category}</h5>
            <p className="description">{item.description}</p>
            <p>{formatDistanceToNow(new Date(item.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleDelete}>Delete</span>
            {/* <span onClick={handleUpdate}>Edit</span> */}
        </div>
    )
}

export default ItemInfo