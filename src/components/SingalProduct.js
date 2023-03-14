import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GetAuthorization from './GetAuthorization';
import { useNavigate } from 'react-router-dom'
import SimilarProducts from './SimilarProducts';
import SuggestProduct from './SuggestProduct';
import Description from './Description ';
import PathHeader from './PathHeader';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
  
import { width } from '@mui/system';
const SingalProduct = ({ login }) => {
    const params = useParams();
    const id = params.id;
    const [product, setproduct] = useState({})
    const [quantity, setquantity] = useState(1)
    const [day, setday] = useState(1)
    const [color, setcolor] = useState("")
    const [loader, setLoader] = useState(false);
    const [size, setsize] = useState("")
    const [categoryList, setCategoryList] = useState([])
    const [imageList, setimageList] = useState([])
    const [service, setService] = useState([])
    const [service_id, setServiceid] = useState("without_service");
    const [dayprice, setDayPrice] = useState([])
    const [flaglenght, setFalglength] = useState(true);
    const [Length, setLength] = useState("26");
    const [Width, setWidth] = useState("26");
    const [state, setState] = useState({activeService:"Without Service",activeButton:"Rental"})

    const handleActiveService = (value) => {
        setState(prev=>({
            ...prev,
            activeService:value
        }))
    }

    const handleActiveButton = (value) => {
        setState(prev=>({
            ...prev,
            activeButton:value
        }))
    }
    const options = {
        margin: 30,
        // loop: true,
        responsiveClass: true,
        // autoplay: true,
        // autoplayHoverPause: true,
        smartSpeed: 500,
        // nav:true,
        // navText:[
        //     (imageList.map((imageLink)=>{
        //         return (
        //             `<img src=${imageLink} style={{width:'100px',height:'100px'}}></img>`
        //         )
        //     }))
        // ],
    };
    const navigate = useNavigate();
    const IncrementWidth = () => {
        setWidth(parseInt(Width) + 1);
    }
    const DecrementWidth = () => {
        if (Width > 1) setWidth(parseInt(Width) - 1);
        else alert("Sorry You can't select less than 0!")
    }
    const IncrementLength = () => {
        setLength(parseInt(Length) + 1);
    }
    const DecrementLength = () => {
        if (Length > 1) setLength(parseInt(Length) - 1);
        else alert("Sorry You can't select less than 0!")
    }
    const IncrementQuantity = () => {
        setquantity(parseInt(quantity) + 1);
    }
    const DecrementQuantity = () => {
        if (quantity > 1) setquantity(parseInt(quantity) - 1);
        else alert("Sorry You can't select less than 0!")
    }
    const IncrementDay = () => {
        setday(parseInt(day) + 1);
    }
    const DecrementDay = () => {
        if (day > 1) setday(parseInt(day) - 1);
        else alert("Sorry You can't select less than 0!")
    }
    const AddToCart = async () => {
        
        setState(prev=>({
            ...prev,
            activeButton:'Cart'
        }))
        if (login) {
            await fetch(`http://${process.env.REACT_APP_URL}/cart`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': GetAuthorization(),
                },
                body: JSON.stringify(
                    {
                        cart_item_id: id,
                        quantity: quantity,
                        color: color,
                        size: size,
                        day: day,
                        service_id:service_id,
                        width: Width,
                        length: Length,
                        type:"cart"
            
                    }
                )
            }).then((response) => {
            })
            navigate('/cart');
        }
        else {
            alert("please login!!")
            navigate('/login')
        }

    }
    const AddToQuote = async () => {
        setState(prev=>({
            ...prev,
            activeButton:'Quote'
        }))

        if (login) {
            await fetch(`http://${process.env.REACT_APP_URL}/cart`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': GetAuthorization(),
                },
                body: JSON.stringify(
                    {
                        cart_item_id: id,
                        quantity: quantity,
                        color: color,
                        size: size,
                        day: day,
                        service_id:service_id,
                        width: Width,
                        length: Length,
                        type:"quote"
            
                    }
                )
            }).then((response) => {
            })
            navigate('/myaccount/Quotes');
        }
        else {
            alert("please login!!")
            navigate('/login')
        }

    }
    const AddToRental = () => {
        setState(prev=>({
            ...prev,
            activeButton:'Rental'
        }))
    }

    const fetchData = () => {
             fetch(`http://${process.env.REACT_APP_URL}/product/${params.id}`, {
                method:"GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': GetAuthorization()
                  }  
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                 setproduct(data);
                 setimageList(data.images);
                 setCategoryList(data.category);          
            })
    }

    const serviceapi = async() =>{
        const response = await fetch(`http://${process.env.REACT_APP_URL}/product/service`)
        const data = await response.json();
        setService(data);
    }

    const dayandprice = async() =>{
        const response = await fetch(`http://${process.env.REACT_APP_URL}/product/price?product_id=${id}&day=${day}&quantity=${quantity}&service=${service_id}&length=${Length}&width=${Width}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }
        })
        const data = await response.json();
        setDayPrice(data);
        setLoader('f')
    }
     const handlechange = (value) =>{
        setServiceid(value.id)
        handleActiveService(value.name)
     }
     useEffect(()=>{
        fetchData();
        setday(1);
        setquantity(1);
     },[id])
    useEffect(() => {
        serviceapi();
    }, [service_id])

    useEffect(() => {
        setLoader(true)
        dayandprice();
    }, [day, quantity, service_id,Length,Width])

    return (
        <section className="sg-product mb-sm-0">
            <PathHeader path="Home > Table > Product Name"></PathHeader>
            <div className="container">
                <div className="row">
                        <div className="row1">
                            <div className="col-md-5">
                                <div className="sg-img">
                                    <OwlCarousel key={`carousel_${imageList.length}`} className="owl-theme" {...options} items={1}>
                                        {imageList.map((imagelink,id) => (
                                           <img key={id} src={imagelink} alt="" />
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="sg-content">
                                    
                                    <div className="pro-name">
                                        <div className='productName'>{product.product_name}</div>
                                    </div>
                                    <div className="pro-price">
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item">INR {dayprice.final_price}</li>
                                            <li className="list-inline-item">INR {dayprice.price}</li>
                                        </ul>
                                    </div>

                                    <div className="pro-rating">
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            <span style={{marginLeft:"20px",fontSize:"22px"}}>|</span>
                                            <li className="list-inline-item"><a href="">50 Customer Review</a></li>
                                        </ul>
                                    </div>

                                    <div className='description'>
                                        <p>
                                            {product.short_description}
                                        </p>
                                    </div>                                
                                    
                                    <div className="colo-siz">
                                        {product.is_area_based
                                        ?
                                        (<>
                                            <div className="qty-box">
                                                <ul className="list-unstyled list-inline">
                                                    <li className="list-inline-item">Size(width in {product.width_unit}): </li>
                                                    <li className="list-inline-item quantity buttons_added size">
                                                        <input onClick={() => DecrementWidth()} style={{fontSize: "25px", backgroundColor:'#FBEBB5' }} type="button" value="-" className="minus" />
                                                        <input onChange={(e) => setWidth(e.target.value)} type="number" step="1" min="1" max="10" value={Width} className="qty text" size="40"  />
                                                        <input onClick={() => IncrementWidth()} style={{fontSize: "25px", backgroundColor:'#FBEBB5' }} type="button" value="+" className="plus" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="qty-box">
                                                <ul className="list-unstyled list-inline">
                                                    <li className="list-inline-item">Size(length in {product.length_uniit}) : </li>
                                                    <li className="list-inline-item quantity buttons_added size">
                                                        <input onClick={() => DecrementLength()} style={{fontSize: "25px", backgroundColor:'#FBEBB5' }} type="button" value="-" className="minus" />
                                                        <input onChange={(e) => setLength(e.target.value)} type="number" step="1" min="1" max="10" value={Length} className="qty text" size="40" />
                                                        <input onClick={() => IncrementLength()} style={{fontSize: "25px",  backgroundColor:'#FBEBB5' }} type="button" value="+" className="plus" />
                                                    </li>
                                                </ul>
                                        </div>
                                        </>)
                                        :""
                                        }
                                        
                                    </div>
                                    <div className="colo-siz">
                                        <div className="qty-box">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">Days: </li>
                                                <li className="list-inline-item quantity buttons_added">
                                                    <input onClick={() => DecrementDay()} style={{fontSize: "25px"}} type="button" value="-" className="minus" />
                                                    <input onChange={(e) => setday(e.target.value)} type="number" step="1" min="1" max="10" value={day} className="qty text" size="40"  />
                                                    <input onClick={() => IncrementDay()} style={{fontSize: "25px"}} type="button" value="+" className="plus" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="qty-box">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">Quantity: </li>
                                                <li className="list-inline-item quantity buttons_added">
                                                    <input onClick={() => DecrementQuantity()} style={{fontSize: "25px"}} type="button" value="-" className="minus" />
                                                    <input onChange={(e) => setquantity(e.target.value)} type="number" step="1" min="1" max="10" value={quantity} className="qty text" size="40" />
                                                    <input onClick={() => IncrementQuantity()} style={{fontSize: "25px"}} type="button" value="+" className="plus" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='services'>
                                        <div className='label'>Service</div>
                                        <ul>
                                            {service.map((option,id)=>{
                                                return ( <li key={id} className={`${state.activeService === option.name ? "active" : "inactive"}`} onClick={()=>handlechange(option)}>{option.name}</li>
                                                )
                                            })
                                            }
                                        </ul>
                                    </div>
                                    <div className='availability'>
                                        <p>Availability : {product.stock > 1 ? <label>({product.stock}) available</label> : <lable style={{color:'red'}}>Out Of Stock</lable> } </p>
                                    </div>
                                    <div className='addItem'>
                                        <ul>
                                            <li className={`${state.activeButton === "Rental" ? "active" : "inactive"}`} onClick={()=> AddToRental()}>Add To Rental</li>
                                            <li className={`${state.activeButton === "Quote" ? "active" : "inactive"}`} onClick={() => AddToQuote()}>Add To Quote</li>
                                            <li className={`${state.activeButton === "Cart" ? "active" : "inactive"}`} onClick={() => AddToCart()} href='/cart'>Add To Cart</li>
                                        </ul>
                                    </div>
                                    <div className='table'>
                                        <table>
                                            <tr>
                                                <th>Category:</th>
                                                <td>{product.category?.map((item,id)=>(
                                                                <>{item}, </>
                                                                ))}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Tags:</th>
                                                <td>{product.tag?.map((item,id)=>(
                                                               <>{item}, </>
                                                            ))}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Share :</th>
                                                <td>
                                                    <ul>
                                                        <li>
                                                            <FacebookShareButton url={window.location.href} quote={'Erental Product!'} hashtag="#erental">
                                                                <FacebookIcon size={30} style={{color:'#000000',fontSize:'24px'}} round></FacebookIcon>
                                                            </FacebookShareButton>                                                        
                                                        </li>
                                                        <li>
                                                            <LinkedinShareButton url={window.location.href} quote={'Erental Peoduct!'} hashtag="#erental">
                                                                <LinkedInIcon size={30} style={{color:'#000000',fontSize:'24px'}} round></LinkedInIcon>
                                                            </LinkedinShareButton>
                                                        </li>
                                                        <li>
                                                            <TwitterShareButton url={window.location.href} quote={'Erental Peoduct!'} hashtag="#erental">
                                                                <TwitterIcon size={30} style={{color:'#000000',fontSize:'24px'}} round></TwitterIcon>
                                                            </TwitterShareButton>
                                                        </li>
                                                        <li>
                                                            <WhatsappShareButton url={window.location.href} quote={'Erental Peoduct!'} hashtag="#erental">
                                                                <WhatsAppIcon size={30} style={{color:'#000000',fontSize:'24px'}} round></WhatsAppIcon>
                                                            </WhatsappShareButton>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                    {/* {product.is_area_based ?
                                       (
                                        <div className='d-flex justify-content-around flex-column mb-2' style={{fontSize:"14px"}}>
                                           <div>
                                             <label className='text-secondary'>Length : </label>
                                             <input type='text' onChange={(e) => setLength(e.target.value)} className='w-25 ml-2 mb-3' placeholder='Type In Meter' /> <label>{product.length_uniit} </label>
                                           </div>
                                           <div className='d-flex justify-content-center m-auto w-50 mb-1'>
                                               <div>
                                                    <label className='text-secondary'>Width : </label>
                                                    <input type='text' onChange={(e) => setWidth(e.target.value)} className='w-50 ml-4'placeholder='Type In Meter'/> <label>{product.width_unit} </label>
                                                </div>
                                            </div>
                                        </div>
                                       )  :(
                                        null
                                       )  
                                    } */}
                                        {/* <div>
                                            <select onChange={handlechnage} style={{marginLeft:"40%", marginBottom:"30px", fontsiz:"20px"}} className="form-select form-select-sm w-25" aria-label=".form-select-sm example">
                                                {service.map((option) =>{
                                                    return(
                                                        <option value={option.id}>{option.name}</option>
                                                    )
                                                        
                                                })}
                                            </select>
                                        </div> */}
                                        <div className="pro-btns">
                                            {/* <a onClick={() => AddToCart()} href='/cart' className="cart">Add To Cart</a>
                                            <a onClick={() => AddToQuote()} className="cart bg-primary">Add To Quote</a> */}
                                            {/* <a href="" className="fav-com" data-toggle="tooltip" data-placement="top" title="Wishlist"><FavoriteBorderIcon></FavoriteBorderIcon></a>
                                            <a href="" className="fav-com" data-toggle="tooltip" data-placement="top" title="Compare"><FavoriteBorderIcon></FavoriteBorderIcon></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* <SimilarProducts category={categoryList} login={login}></SimilarProducts> */}
                </div>
            </div>
            <Description />
            {/* {useMemo(() => <SimilarProducts category={categoryList} login={login} />, [categoryList])} */}
        </section>

    );
}
export default SingalProduct;











