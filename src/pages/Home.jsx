import React, { useEffect, useState } from 'react'

//Components
import ItemInfo from '../components/ItemInfo'

const Home = () =>
{
    const [items, setItems] = useState(null)
    useEffect(()=>
    {
        const fetchItems = async () =>
        {
            const response = await fetch('/api/items/')
            const json = await response.json()
                if (response.ok)
                {
                    setItems(json)
                }
        }
        fetchItems()
    }, []);

    return(
        <div className="home">
            <div className="items">
                {items && items.map((item)=>(
                    <ItemInfo key={item._id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Home