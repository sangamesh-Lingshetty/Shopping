import Summary from "./Summary";
import BagItem from "./BagItem";
const Bag = ({ Bagitem, total, discount, finalTotal, removefrombag }) => {

    if (!Bagitem) {
        console.error('Bagitem is undefined');
        return null;
      }
      
    return <>
        <div className="Bag">
            {Bagitem.length === 0 ? (<h2>Empty item shop now...</h2>
            ) : (
                <>
                    <div className="eachitem">
                        {Bagitem.map((item) => (
                            <BagItem removefrombag={removefrombag} item={item} key={item.id} />
                        ))}
                    </div>
                    <Summary total={total} discount={discount} finalTotal={finalTotal} key={BagItem.id} />
                </>
            )}
        </div>
    </>

}

export default Bag;


