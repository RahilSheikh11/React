import ItemList from "./ItemList";

const RestaurantCategory = (data, showItems, setShowIndex) =>{

   
    const handleClick = () => {
       setShowItems();
    }
    return(
        <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
        <span className = " font-bold text-lg">
            {data?.title} ({data?.itemcards?.length})</span>
            <span>
                🔽
            </span>
</div>
        </div>
        {showItems && <ItemList items={data?.itemcards} />}
        </div>
    );

};

export default RestaurantCategory;