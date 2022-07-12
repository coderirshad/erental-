import {React ,useState, useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Link } from 'react-router-dom';
export default function LogoArea() {
    const [cartproduct, setcartproduct] = useState([])
    const [wishlistproduct, setwishlistproduct] = useState([])
    const fetchData = () =>{
        fetch(`http://${process.env.REACT_APP_URL}/cart`,{
            method:"GET"
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             setcartproduct(data)       
        })
       
        fetch(`http://${process.env.REACT_APP_URL}/cart`,{
            method:"GET"
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             setwishlistproduct(data)       
        })
    }

    useEffect(() => {
        fetchData()            
     }, [])
  return (
    <section className="logo-area2">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="logo">
                        <Link to="/"><img  src="images/logo.png" alt=""/></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-7 padding-fix">
                    <form action="#" className="search-bar d-flex">
                        <input type="text" name="search-bar" placeholder="I'm not available..."/>
                        <div className="search-cat">
                            <select className="form-control scat-id">
                                <option>All Categories</option>
                                <option>Category One</option>
                                <option>Category Two</option>
                                <option>Category Three</option>
                                <option>Category Four</option>
                                <option>Category Five</option>
                                <option>Category Six</option>
                                <option>Category Seven</option>
                            </select>
                        </div>
                        <button type="submit"><SearchIcon style={{fontSize:"30px",color:"green"}}  title="search"></SearchIcon></button>
                    </form>
                    
                </div>
                <div className="col-lg-3 col-md-2">
                    <div className="carts-area d-flex">
                        {/* <div className="wsh-box ml-auto modified_wishlist">
                                <button>Login
                                <ul>
                                    <a href='/'><li>Login</li></a>
                                    <a href='/'><li>Login</li></a>
                                    <a href='/'><li>Login</li></a>
                                    <a href='/'><li>Login</li></a>
                                    <a href='/'><li>Login</li></a>
                                </ul>
                                </button>
                            
                        </div> */}
                        <div className="wsh-box ml-auto modified_wishlist">
                            <a href="/wishlist" data-toggle="tooltip" data-placement="top" title="Voice Search">
                                <SettingsVoiceIcon style={{fontSize:"35px"}}></SettingsVoiceIcon>
                            </a>
                        </div>
                        <div className="wsh-box ml-auto modified_wishlist">
                            <a href="/wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <FavoriteBorderIcon style={{fontSize:"35px"}}></FavoriteBorderIcon>
                                <span>{wishlistproduct.length}</span>
                            </a>
                        </div>
                        <div className="cart-box ml-4 modified_cart">
                            <a href="/cart" data-toggle="tooltip" data-placement="top" title="Shopping Cart" className="cart-btn ">
                                <AddShoppingCartIcon style={{fontSize:"35px"}}></AddShoppingCartIcon>
                                <span>{cartproduct.length}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
