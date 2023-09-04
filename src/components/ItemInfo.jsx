const ItemInfo = ({item}) =>
{
    return(
        <div className="itemInfo">
            <h3 className="itemName">{item.name}</h3>
            <h4 className="itemLocation">{item.location}</h4>
            <h5 className="category">{item.category}</h5>
            <p className="description">{item.description}</p>
            <p>{item.createdAt}</p>
        </div>
    )
}

export default ItemInfo