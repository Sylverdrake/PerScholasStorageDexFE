import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from '../hooks/useAuthContext';

//External Imports
import axios from "axios";

//Components
import EditItem from "../components/EditItem";
const Item = () =>
{
    let {id} = useParams();
    const [item, setItem] = useState({});
    const [edit, setEdit] = useState(true);
    // const {dispatch} = useItemContext()
    const {user} = useAuthContext();
    
    const getItem = async () =>
    {
        const res = await axios.get(`/api/items/${id}`, 
        {headers:
            {
                'Authorization': `Bearer ${user.token}`
            }})
        setItem(res.data)
    }

    useEffect(()=>
    {
        getItem()
    }, []);
    return(
        <div className="showContainer">
            <button className='showBtn' onClick={()=>{setEdit(!edit)}}>{edit ? 'Edit' : 'View Data'}</button>
            {/* put ternary in button = if edit is true, view data, if edit is false, view edit form */}
            {edit ? 
            <div className='showItem'>
                <div className="siHeader">
                    <h1 id='si'>Name: {item.name} </h1>
                    <h1 id='si'>Location: {item.location}</h1>
                    <h1 id='si'>Category: {item.category}</h1>
                </div>
                <hr/>
                <div><h1 id='si'>Description:</h1><p id='siDesc'>{item.description}</p></div>
            </div>
            
            : <EditItem item={item}/>}
        </div>

        //Show Name, Location, Category, Timestamp & Description
        //Add Edit Button which changes fields to edit form and on submit->
        //change back to normal view with changed results which persist
        // <span className="material-symbols-outlined">
        // Edit
        // </span>
        )
}

export default Item