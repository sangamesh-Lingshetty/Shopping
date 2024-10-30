

import { MdOutlineCurrencyRupee } from "react-icons/md";

import { FaStar } from "react-icons/fa";

const BagItem = ({ item, removefrombag }) => {

    return <>

        <div className="card mb-3 bagbox">
            <div className="row g-0">
                <div className="col-md-4 bagcontainer">
                    <img src={item.img} className="img-fluid rounded-start bagimg" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.itemName}</h5>
                        <h4 className="card-title">{item.comapny}</h4>
                        <p className="card-text">{item.description}</p>
                        <h4><MdOutlineCurrencyRupee />{item.orginalPrice}</h4>
                        <h6><MdOutlineCurrencyRupee />{item.currentPrice}</h6>
                        <h6> <MdOutlineCurrencyRupee />{item.discountPrice}</h6>
                        <h6>{item.rating}<FaStar /></h6>
                        <button onClick={() => removefrombag(item.id)} type="button" className="btn btn-secondary">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default BagItem;