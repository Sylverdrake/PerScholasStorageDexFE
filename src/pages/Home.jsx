import React, { useEffect, useState } from 'react'

const Home = () =>
{
    const [items, setItems] = useState(null)
    useEffect(()=>
    {
        const fetchItems = async () =>
        {
            const response = await fetch('http://localhost:3000/api/items/')
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
                    <p key={item._id}>{item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Home