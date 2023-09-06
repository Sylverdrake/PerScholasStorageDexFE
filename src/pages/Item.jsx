import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuthContext } from '../hooks/useAuthContext';
import axios from "axios";

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
        <div>
            <button onClick={()=>{setEdit(!edit)}}>{edit ? 'Edit' : 'View Data'}</button>
            {/* put ternary in button = if edit is true, view data, if edit is false, view edit form */}
            {edit ? <h1>{item.name}</h1> 
            
            
            
            
            
            : <EditItem/>}
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