
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoBagHandle } from "react-icons/io5";

import { Link, useLocation } from 'react-router-dom';

const Header = ({ count,AddToCartHandler, SignUpHandler }) => {
  const location = useLocation();
  const data = location.state || {};
  const name = data.name || 'Guest';

  console.log("recieved data: ", data);
  console.log("count",count);
  return <>
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom header">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none myntra">
            <img className='logoimgs' src="https://static.vecteezy.com/system/resources/previews/011/598/887/original/ecommerce-logo-icon-free-vector.jpg" alt="" />
            <h3>Myntra</h3>
          </a>

        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2">Features</a></li>
          <li>Welcome &nbsp;
            {name}
          </li>
        </ul>

        <div className="col-md-3 text-end">
         
          <button onClick={() => AddToCartHandler("Bag")} type="button" class="btn btn-primary position-relative">
           Bag  <IoBagHandle className='bagicon' />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
            </span>
          </button>


          {/* <Link to="/sign-up"> */}
          <button onClick={() => SignUpHandler("Sign-up")} type="button" className="btn btn-primary">Sign-up</button>
          {/* </Link> */}

        </div>
      </header>
    </div>
  </>
}
export default Header;