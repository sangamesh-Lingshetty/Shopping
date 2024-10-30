
import Card from "./Card";
const Container = ({ addtocart, Items,nameChange,BagHandler }) => {
    if (!Items) {
        console.error('Items is undefined');
        return null;
      }

    return <>
        <div className="CardContainer">
            {Items.map((item) => (
                <Card BagHandler={BagHandler} nameChange={nameChange} addtocart={addtocart} key={item.id} item={item} />
            ))}

        </div>
    </>
}
export default Container;


// export 