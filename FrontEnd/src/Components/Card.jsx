
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
const Card = ({ addtocart, item, nameChange,BagHandler }) => {

    return <>
        <div className="card cards" >
            <img src={item.img} className="card-img-top photo" alt="...loading" />
            <div className="card-body">
                <h5 className="card-title">{item.itemName}</h5>
                <h4 className="card-title">{item.company}</h4>
                <p className="card-text">{item.description}</p>
                <h4><MdOutlineCurrencyRupee />{item.orginalPrice} </h4>
                <h5><MdOutlineCurrencyRupee />{item.discountPrice}</h5>
                <h5>{item.rating} <FaStar /></h5>
                    {nameChange[item.id] ? <a onClick={()=>BagHandler("Bag")} className="btn btn-success">See in Bag</a> : <a onClick={() => addtocart(item)} className="btn btn-danger">Add to cart</a>}
             
            </div>
        </div>
    </>
}
export default Card;
