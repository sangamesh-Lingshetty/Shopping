import "../App.css"
// import { calculateItem } from "./Bag";

import { MdOutlineCurrencyRupee } from "react-icons/md";


const Summary = ({total,discount,finalTotal}) => {
console.log(total,discount,finalTotal);
    return <>
        <div className="card summarycard" style={{ width: "18rem" }}>
            <div className="card-body">
                <div className="bag-details-container">
                    <div className="price-header">PRICE DETAILS Items </div>
                    <div className="price-item">
                        <span className="price-item-tag">Total MRP</span>
                        <span className="price-item-value"><MdOutlineCurrencyRupee />{total}</span>
                    </div>
                    <div className="price-item">
                        <span className="price-item-tag">Discount on MRP</span>
                        <span className="price-item-value priceDetail-base-discount">-<MdOutlineCurrencyRupee />{discount}</span>
                    </div>
                    <div className="price-item">
                        <span className="price-item-tag">Convenience Fee</span>
                        <span className="price-item-value"><MdOutlineCurrencyRupee />99</span>
                    </div>
                    <hr/>
                        <div className="price-footer">
                            <span className="price-item-tag">Total Amount</span>
                            <span className="price-item-value"><MdOutlineCurrencyRupee />{finalTotal}</span>
                        </div>
                </div>
                <button className="btn-place-order">
                    <div className="css-xjhrni">PLACE ORDER</div>
                </button>
                <p>You will save <MdOutlineCurrencyRupee />{discount-99} on this order</p>
      
            </div>
        </div>
    </>
}
export default Summary;