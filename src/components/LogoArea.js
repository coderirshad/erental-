import { React, useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
// import { Avatar, Menu } from "@material-ui/core";
// import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
// import GetAuthorization from "./GetAuthorization";
import { Link, useNavigate } from "react-router-dom";
import CustomizedMenus from "./CustomizeMenus";

export default function LogoArea({ role, login, setlogin }) {
  // const [cartproduct, setcartproduct] = useState([]);
  // const [wishlistproduct, setwishlistproduct] = useState([]);
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();
  // const handleChange = (e) => {
  //   setSearchField(e.target.value);
  // };
  const fetchData = () => {
    // fetch(`http://${process.env.REACT_APP_URL}/cart`,{
    //     method:"GET",
    //     headers: {
    //        'Content-Type': 'application/json',
    //        'Authorization': GetAuthorization()
    //     }
    // })
    // .then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //      setcartproduct(data)
    // })
    // fetch(`http://${process.env.REACT_APP_URL}/cart`,{
    //     method:"GET"
    //     headers: {
    //        'Content-Type': 'application/json',
    //        'Authorization': GetAuthorization()
    //     }
    // })
    // .then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //      setwishlistproduct(data)
    // })
  };
  const handlebtnClick = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/ProductSearch",
      search: `?value=${searchField}`,
    });
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header  className="Header dCenter">
      <nav className="Header_nav dBetween">
        <div className="img_Logonav" id="">
          <Link to="/">
            <img src="images/logo3.png" alt="" className="img-logo" />
          </Link>
        </div>
         <div className="input_nav_container">
          <form onSubmit={(e) =>handlebtnClick(e)}>
            <span className="nav_log_search"><SearchIcon style={{fontSize:"25px"}}></SearchIcon></span>
            <input 
              type="search"
              className="input_nav"
              placeholder="Search Itmes...."
              onChange={(e) =>setSearchField(e.target.value)}
            />
            <span className="nav_log_menu"><MenuIcon style={{fontSize:"25px"}}></MenuIcon></span>
          </form>
         </div>
         <div className="nav_quote_cart_component">
            <div className="quote_nav">
                <Link to="/myaccount/Quotes" className="dCenter">
                    <img src="images/2.png" alt="" className="quote_logo" />
                     <span className="quote_logotext">Quote</span>
                </Link>
            </div>
            <span className="divider"></span>
            <div className="cart_nav">
                <Link to="/cart" className="dCenter">
                    <img src="images/1.png" alt="" className="cart_logo" />
                    <span className="quote_logotext">Cart</span>
                </Link>
            </div>
            <span className="divider"></span>
            <div>
               <CustomizedMenus
                role={role}
                login={login}
                setlogin={setlogin}
              ></CustomizedMenus>
            </div>
         </div>




          {/* <form class="" id="input-width">
            <input
              class="form-control"
              id="input"
              type="search"
              placeholder="Search, Product, Categories..."
              aria-label="Search"
              onChange={handleChange}
            />

            <button
              class="btn btn-outline-success"
              id="inputbtn"
              type="submit"
              onClick={(e) => handlebtnClick(e)}
            >
              <SearchIcon
                style={{ fontSize: "30px", color: "white" }}
                title="search"
              ></SearchIcon>
            </button>
          </form> */}
          {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
                         {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                               <div className="wsh-box ml-auto modified_wishlist" style={{marginRight:"10px" }}>
                                 <a href="/wishlist" data-toggle="tooltip" data-placement="top" title="Voice Search">
                                <SettingsVoiceIcon style={{fontSize:"30px"}}></SettingsVoiceIcon>
                                 </a>
                                </div>
                        </div>
                        <div className="wsh-box ml-auto modified_wishlist" style={{marginRight:"15px" }}>
                            <a href="/myaccount/Quotes" data-toggle="tooltip" data-placement="top" title="Quotelist">
                                <FavoriteBorderIcon style={{fontSize:"30px"}}></FavoriteBorderIcon>
                                <span>{wishlistproduct.length}</span>
                                <img style={{height:"30px", width:"30px"}} src='images/2.png'/>
                            </a>
                        </div>
                        <div className="cart-box ml-4 modified_cart" style={{marginRight:"15px" }}>
                            <a href="/cart" data-toggle="tooltip" data-placement="top" title="Shopping Cart" className="cart-btn ">
                                <AddShoppingCartIcon style={{fontSize:"30px"}}></AddShoppingCartIcon>
                                <span>{cartproduct.length}</span>
                                <img style={{height:"30px", width:"30px"}} src='images/1.png'/>
                            </a>
                        </div> */}
                        {/* <div style={{marginRight:"10px" , marginLeft : "20px"}} className="wsh-box ml-auto modified_wishlist"> 
                           
                        </div> */}
            {/* <div className="wsh-box ml-auto modified_wishlist">
              <CustomizedMenus
                role={role}
                login={login}
                setlogin={setlogin}
              ></CustomizedMenus>
            </div> */}
          
      </nav>
    </header>
  );
}
