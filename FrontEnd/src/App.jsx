import Header from "./Components/Header"
import './App.css';
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import Bag from "./Components/Bag";
import { useState } from "react";
import SignUp from "./Components/SignUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";
const App = () => {


  const [ClickedItem, SetClickedItem] = useState("Container");
  const [count,setcount] = useState(0);
  
  const BagHandler = (item) => {
    console.log("clicked ", item);
    SetClickedItem(item);
  }
  const SignUpHandler = (data) => {
    console.log("cliked", data);
    SetClickedItem(data);
  }

  const [Items, setItems] = useState([
    {
      id: 1,
      itemName: 'shirts',
      img: 'https://www.supershoes.com/on/demandware.static/-/Library-Sites-SuperShoesSharedLibrary/default/dwe5d7f1ee/images/homepage/2024-05-07/hero-mens-casual-mobile.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod',
      company: 'clut fit',
      currentPrice: 2000,
      orginalPrice: 2500,
      discountPrice: "20%",
      rating: '3.8'
    },
    {
      id: 2,
      itemName: 'Vivo mobile',
      img: 'https://5.imimg.com/data5/SELLER/Default/2023/3/296178265/EX/FQ/OZ/186724856/vivo-mobile-phone.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod',
      company: 'adids',
      currentPrice: 18000,
      orginalPrice: 20000,
      discountPrice: "10%",
      rating: '4.5'
    },
    {
      id: 3,
      itemName: 'shoes',
      img: 'https://www.tracerindia.com/cdn/shop/files/01_3_c52bf142-d83e-42e7-96f3-5a3ce6bc5c03.jpg?v=1688547156',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod',
      company: 'adids',
      currentPrice: 2250,
      orginalPrice: 3000,
      discountPrice: "25%",
      rating: '3.5'
    }
  ]);

  const [Bagitem, SetBagItem] = useState([]);
  const [nameChange, SetnameChange] = useState({});

  const AddtoCart = (item) => {
    SetBagItem((prevItem) => [...prevItem, item]);
    SetnameChange((prevItem) => ({ ...prevItem, [item.id]: true }));
    setcount(count => count+1);
    toast.success("item added")
  }

  // calculating the total value
  const culculateTotal = (items) => {
    return items.reduce((total, item) => total + item.orginalPrice, 0)
  }
  const calculateDiscount = (items) => {
    return items.reduce((discount, item) => {
      const dispercetage = parseFloat(item.discountPrice) || 0;
      const itemdiscoutnt = (item.orginalPrice) * (dispercetage / 100);
      return itemdiscoutnt + discount;
    }, 0)
  }

  const calculatefinalTotal = (total, discount) => {
    const conveience = 99;
    return total - discount + conveience;
  }

  const total = culculateTotal(Bagitem);
  const discount = calculateDiscount(Bagitem);
  const finalTotal = calculatefinalTotal(total, discount);


  const removefrombag = (itemid) => {
    console.log("delete the item friom the cart.");
    SetBagItem((prevItem) => prevItem.filter(item => item.id !== itemid));
    setcount(count => count-1);
    alert("Really u want delete");
    toast.warning("item delete")
  }


  return <>
    <Header count={count} AddToCartHandler={BagHandler} SignUpHandler={SignUpHandler} />

    {/* <Outlet> */}

    {/* </Outlet> */}


    {ClickedItem === "Container" && <Container BagHandler={BagHandler} addtocart={AddtoCart} Items={Items} nameChange={nameChange} />}

    {ClickedItem === "Sign-up" && <SignUp />}

    {ClickedItem === "Bag" && <Bag removefrombag={removefrombag} total={total} discount={discount} finalTotal={finalTotal} Bagitem={Bagitem} />}

    <Footer></Footer>
    <ToastContainer />
  </>
}
export default App;

