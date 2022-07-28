import React , { useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';

export default function FooterArea() {
    const [tagList, settagList] = useState([]);
    const fetchdata = async() =>{
        const response = await fetch(`http://${process.env.REACT_APP_URL}/tag`);
        const now = await response.json() ;
        let sz = now.length ;
        for ( let i = 0 ; i < sz - 5 ; i ++ ) {
            now.pop() ;
        }
        settagList(now);
    }
    useEffect(() => {
        fetchdata();
    }, []);

    const navigate = useNavigate();
    const handleClick = async ( tagIid ) =>{
        navigate('/tagProductList',{state:{id:  tagIid }});
    }
  return (
    <section className="footer-top" id = 'foot'>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="f-contact">
                    <h5>Contact Info</h5>
                    <div className="f-add">
                        <i className="fa fa-map-marker"></i>
                        <span>Address : CITY CENTER MALL, MUMBAI</span>
                    </div>
                    <div className="f-email">
                        <i className="fa fa-envelope"></i>
                        <span>Email : Info@erentals.in</span>
                    </div>
                    <div className="f-phn">
                        <i className="fa fa-phone"></i>
                        <span>Phone : +91 9867348165</span>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="f-cat">
                    <h5>Tags</h5>
                    <ul className="list-unstyled">
                    {
                        tagList.map((tag) => (  
                        <li>                 
                        <button className = 'footbutton' onClick= {() => handleClick ( tag.id ) } >
                            <p><a href=""><i className="fa fa-angle-right"></i><strong>{tag.name}</strong></a></p>
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="f-link">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/myaccount"><i className="fa fa-angle-right"></i>My Account</a></li>
                        <li><a href="/cart"><i className="fa fa-angle-right"></i>Shopping Cart</a></li>
                        <li><a href="/checkout"><i className="fa fa-angle-right"></i>Checkout</a></li>
                        <li><a href="/order/history"><i className="fa fa-angle-right"></i>Order History</a></li>
                        <li><a href="/location"><i className="fa fa-angle-right"></i>Our Locations</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="f-sup">
                    <h5>Support</h5>
                    <ul className="list-unstyled">
                        <li><a href="/contact"><i className="fa fa-angle-right"></i>Contact Us</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Payment Policy</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Return Policy</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Privacy Policy</a></li>
                        <li><a href="/termsandconditions"><i className="fa fa-angle-right"></i>Terms & Condition</a></li>
                        <li><a href="/"><i className="fa fa-angle-right"></i>Delivery Info</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
