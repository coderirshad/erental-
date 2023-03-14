import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Rating from '@mui/material/Rating';
import HotDealBox from './HotDealBox';

const HotDeals = ({login}) => {
    const [product, setproduct] = useState([]); 
    const navigate = useNavigate();
    const [value, setValue] = useState(4)
    
    const fetchData = ()=>{
        fetch(`http://${process.env.REACT_APP_URL}/hot-deal`).then((response)=>{
            return response.json();
        }).then((data)=>{
            setproduct(data);
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
            <div className='Hotdeals'>
                <div className='Hotdeals_width'>
                    <div className='hotdeals_header Hotdeal_after'>
                       <h1>Hot Deals</h1>
                       <div className='hotdeals_view'>
                         <p>View All</p>
                         <NavigateNextIcon style={{fontSize:"30px"}}></NavigateNextIcon>
                       </div>
                    </div>
                    <hr></hr>
                    <div className='Hotdeals_item_box'>
                      {product.map(item =>
                          <HotDealBox data={item} login={login}/>
                        )}
                    </div>
                </div>
            </div>
        )
     }


     {/*  <section className="product-area">
        <div className="container-fluid" >
          <div className="ftr-row" style={{width:"100%"}}> 
        <div className="col-md-8" style={{width:"100%"}}>
            <div className="ftr-row" >
                <div className="col-md-12 padding-fix-l20" >
                    <div className="ftr-product" >                       
                         <div className="tab-content">
                              <h2 className='my-5' style={{color:"#144169", fontWeight:"700"}}>HOT DEALS</h2>
                            <div className="tab-pane fade show active" id="all" role="tabpanel">
                            <OwlCarousel key={`carousel_${product.length}`}
                                        className="tab-slider owl-carousel" 
                                        responsive={{
                                        0: {
                                            items: 1,
                                        },
                                        400: {
                                            items: 2,
                                        },
                                        600: {
                                            items: 3,
                                        },
                                        700: {
                                            items: 4,
                                        },
                                        1000: {
                                            items: 5,

                                        }}}  nav 
                                        margin={5} 
                                        loop={true} >
                            {
                               product.map((data) => (                      
                                    <div className="tab-item" style={{margin:"5px"}}>
                                        <div className="tab-heading mt-2">
                                            <div style={{height:"20px",overflow:"hidden"}}><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></div>
                                        </div>
                                        
                                        <div className="tab-img d-flex justify-content-center">
                                            <Link to={`/product/${data.product_id}`}>
                                              <img className="main-img img-fluid" src={data.image} style={{height:"200px",width:"200px"}} alt=""/>
                                            </Link>
                                            <div className="layer-box">
                                                <a href="" className="it-comp" data-toggle="tooltip" data-placement="left" title="Compare"><img src="images/it-comp.png" alt=""/></a>
                                                <a onClick={() =>AddToQuote(data.product_id)} style={{cursor:"pointer"}} className="it-fav" data-toggle="tooltip" data-placement="left" title="Add To Quote"><img src="images/it-fav.png" alt=""/></a>
                                            </div>
                                        </div>
                                       
                                        <div className="img-content d-flex justify-content-between">
                                            <div>
                                                <ul className="list-unstyled list-inline fav">
                                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                </ul>
                                                <ul className="list-unstyled list-inline price">
                                                    <li className="list-inline-item">INR {data.discounted_price}</li>
                                                    <li className="list-inline-item">INR {data.price}</li>
                                                </ul>
                                            </div>
                                            <div style={{cursor:"pointer"}}>
                                               <a  data-toggle="tooltip" data-placement="top" title="Add to Cart"><img onClick={() =>AddToCart(data.product_id)} src="images/it-cart.png" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                 
                                    ))}
                                </OwlCarousel>   
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
        <div className="col-md-12">
            <div className="tp-bnd owl-carousel">
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-01.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-02.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-03.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-04.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-05.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-06.png" alt="" className="img-fluid"/></a>
                </div>
                <div className="bnd-items">
                    <a href="#"><img src="images/brand-07.png" alt="" className="img-fluid"/></a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </section>
    */}

export default HotDeals;