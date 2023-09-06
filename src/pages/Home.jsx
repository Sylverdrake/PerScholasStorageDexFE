import React, { useEffect} from 'react';
import { useItemContext } from '../hooks/useItemsContext';
import {useAuthContext} from '../hooks/useAuthContext';

//Components
import ItemInfo from '../components/ItemInfo'
import NewItem from '../components/NewItem'

const Home = () =>
{
    const {items, dispatch} = useItemContext()
    const {user} = useAuthContext()
    useEffect(()=>
    {
        const fetchItems = async () =>
        {
            const response = await fetch('/api/items/',
            {headers:{'Authorization': `Bearer ${user.token}`}})
            const json = await response.json()
                if (response.ok)
                {
                    dispatch({type: 'SET_ITEMS', payload: json})
                }
        }
        if (user)
        {
        fetchItems()
        }
    }, [dispatch, user]);

    return(
        <div className="home">
            <div className="items">
                {items && items.map((item)=>(
                    <ItemInfo key={item._id} item={item}/>
                ))}
            </div>
            <NewItem/>
        </div>
    )
}

export default Home