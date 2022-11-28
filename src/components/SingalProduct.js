import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GetAuthorization from './GetAuthorization';
import { useNavigate } from 'react-router-dom'
import SimilarProducts from './SimilarProducts';
import SuggestProduct from './SuggestProduct';
import Description from './Description ';
import DescriptionData from './DescriptionData';
const SingalProduct = ({ login }) => {
    const params = useParams();
    const id = params.id;
    const [product, setproduct] = useState({})
    const [quantity, setquantity] = useState(1)
    const [day, setday] = useState(1)
    const [color, setcolor] = useState("")
    const [size, setsize] = useState("")
    const [categoryList, setCategoryList] = useState([])
    const [imageList, setimageList] = useState([])
    const [service, setService] = useState([])
    const [service_id, setServiceid] = useState("without_service");
    const [dayprice, setDayPrice] = useState([])
    const navigate = useNavigate();
    const IncrementQuantity = () => {
        setquantity(quantity + 1);
    }
    const DecrementQuantity = () => {
        if (quantity > 1) setquantity(quantity - 1);
        else alert("Sorry You can't select less than 0!")
    }
    const IncrementDay = () => {
        setday(day + 1);
    }
    const DecrementDay = () => {
        if (day > 1) setday(day - 1);
        else alert("Sorry You can't select less than 0!")
    }
    const AddToCart = async () => {
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
        const response = await fetch(`http://${process.env.REACT_APP_URL}/product/price?product_id=${id}&day=${day}&quantity=${quantity}&service=${service_id}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }
        })
        const data = await response.json();
        setDayPrice(data);
    }
     const handlechnage = (e) =>{
        setServiceid(e.target.value)
     }
     useEffect(()=>{
        fetchData();
        setday(1);
        setquantity(1);
     },[id])
    useEffect(() => {
        fetchData();
        serviceapi();
        dayandprice();
    }, [id,day, quantity, service_id])

    return (
        <section className="sg-product mb-sm-0">

            <div className="container">
                <div className="row">

                    <div className="col-md-9 mb-3">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="sg-img">
                                    <OwlCarousel key={`carousel_${imageList.length}`} className="tab-content owl-carousel" items={1} nav loop>
                                        {imageList.map((imagelink, imageid) => (
                                            <div key={imageid} className="tab-pane fade show active" id="sg1" role="tabpanel">
                                                <img src={imagelink} alt="" className="img-fluid" />
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="sg-content">
                                    <div className="pro-tag">
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><a href="">{product.category_id} ,</a></li>
                                            <li className="list-inline-item"><a href="">{product.product_name}</a></li>
                                        </ul>
                                    </div>
                                    <div className="pro-name">
                                        <p>{product.product_name}</p>
                                    </div>
                                    <div className="pro-rating">
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            <li className="list-inline-item"><a href="">( 09 Review )</a></li>
                                        </ul>
                                    </div>
                                    <div className="pro-price">
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item">INR {dayprice.final_price}</li>
                                            <li className="list-inline-item">INR {dayprice.price}</li>
                                        </ul>
                                        <p>Availability : {product.is_available && (<><span>In Stock</span> <label>({product.stock} Available)</label></>)}{!product.is_available && <span>OutOff Stock</span>} </p>
                                        
                                    </div>
                                    <div className="colo-siz">


                                        <div className="qty-box">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">Day : </li>
                                                <li className="list-inline-item quantity buttons_added">
                                                    <input onClick={() => DecrementDay()} style={{ color: "red", fontSize: "25px" }} type="button" value="-" className="minus" />
                                                    <input onClick={() => setday(this.value)} type="number" step="1" min="1" max="10" value={day} className="qty text" size="4" readonly />
                                                    <input onClick={() => IncrementDay()} style={{ color: "green", fontSize: "25px" }} type="button" value="+" className="plus" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="qty-box">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">Qty : </li>
                                                <li className="list-inline-item quantity buttons_added">
                                                    <input onClick={() => DecrementQuantity()} style={{ color: "red", fontSize: "25px" }} type="button" value="-" className="minus" />
                                                    <input onClick={() => setquantity(this.value)} type="number" step="1" min="1" max="10" value={quantity} className="qty text" size="4" readonly />
                                                    <input onClick={() => IncrementQuantity()} style={{ color: "green", fontSize: "25px" }} type="button" value="+" className="plus" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <select onChange={handlechnage} style={{marginLeft:"40%", marginBottom:"30px", fontsiz:"20px"}} className="form-select form-select-sm w-25" aria-label=".form-select-sm example">
                                                {service.map((option) =>{
                                                    return(
                                                        <option value={option.id}>{option.name}</option>
                                                    )
                                                        
                                                })}
                                            </select>
                                        </div>
                                        <div className="pro-btns">
                                            <a onClick={() => AddToCart()} href='/cart' className="cart">Add To Cart</a>
                                            <a onClick={() => AddToQuote()} href='/myaccount/Quotes' className="cart bg-primary">Add To Quote</a>
                                            {/* <a href="" className="fav-com" data-toggle="tooltip" data-placement="top" title="Wishlist"><FavoriteBorderIcon></FavoriteBorderIcon></a>
                                            <a href="" className="fav-com" data-toggle="tooltip" data-placement="top" title="Compare"><FavoriteBorderIcon></FavoriteBorderIcon></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SuggestProduct />
                </div>
            </div>
            <Description />
            <SimilarProducts category={categoryList}></SimilarProducts>
        </section>

    );
}
export default SingalProduct;











