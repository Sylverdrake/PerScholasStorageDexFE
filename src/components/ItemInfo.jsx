import { useItemContext } from "../hooks/useItemsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//Date FNS
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const ItemInfo = ({item}) =>
{
    const { dispatch } = useItemContext();
    const { user } = useAuthContext();
    const handleDelete = async () =>
    {
        if(!user)
        {
            return
        }

        const response = await fetch('/api/items/' + item._id,
        {
            method: 'DELETE',
            headers:
            {
                'Authorization': `Bearer ${user.token}`
            }
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
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.location}</td>
                        <td>{item.category}</td>
                        <td>{formatDistanceToNow(new Date(item.createdAt), {addSuffix: true})}</td>
                    </tr>
                </tbody>
            </table>
            <span id='delete' className="material-symbols-outlined" onClick={handleDelete}>Delete</span>
            <br/>
            <span id='view' className="material-symbols-outlined" >Description</span>
            {/* <span onClick={handleUpdate}>Edit</span> */}
        </div>
    )
}

export default ItemInfo