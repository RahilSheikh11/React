const ItemList = ({ items }) => {
    return (
        <div>
            {items.map=(item)=>{
                <div
                key ={item?.card?.info?.id}
                className = "p-2 m-2 border-gray-200 border-b-2 text-left flex">
             
                <div className="w-8/12">
                <div className="py-2"> 
                <span>{item.card.info.name}</span>
                <span>{item.card.info.price
                    ? item.card.info.price/100 : item.card.info.defaultprice / 100}</span>
                 </div> 
                 <p classname = "font-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-2">  
                <div classname="absolute">
                    <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Add+</button>
                </div>
                 <img src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageid} className="w-full"/></div>
                    
                </div>
            }}
        </div>
    )
}

export default ItemList;