import { useItemContext } from "../hooks/useItemsContext";
import { useAuthContext } from "../hooks/useAuthContext";

import {Link} from 'react-router-dom';

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

    // const handleView = async () =>
    // {
    //     const response = await fetch('/api/items/' + item._id,
    //     {
    //         method: 'GET',
    //         headers:
    //         {
    //             'Authorization': `Bearer ${user.token}`
    //         }
    //     })
    //     const json = await response.json()
    //         if(response.ok)
    //         {
    //             dispatch({type: 'SET_ITEM', payload: json})
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
            <Link to={`/${item._id}`} >
            <span id='view' className="material-symbols-outlined">Description</span>
            </Link>
            {/* <span onClick={handleUpdate}>Edit</span> */}
        </div>
    )
}

export default ItemInfo