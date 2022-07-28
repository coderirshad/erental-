import React,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GetAuthorization from './GetAuthorization';
import { useNavigate } from 'react-router-dom'
import SimilarProducts from './SimilarProducts';
const SingalProduct = ({login}) => {
  const params = useParams();
  const id=params.id;
  const [product, setproduct] = useState([])
  const [quantity, setquantity] = useState(1)
  const [day, setday] = useState(1)
  const [color, setcolor] = useState("")
  const [size, setsize] = useState("")
  const [categoryList, setCategoryList] = useState([])
  const [imageList, setimageList] = useState([])
  const navigate = useNavigate();
  const IncrementQuantity=()=>{
    if(quantity<product.stock)setquantity(quantity+1);
    else {
        alert(`Sorry Stock is not available greater than ${product.stock}`)
    }
  }
  const DecrementQuantity=()=>{
    if(quantity>1)setquantity(quantity-1);
    else alert("Sorry You can't select less than 0!")
  }
  const IncrementDay=()=>{
    setday(day+1);
  }
  const DecrementDay=()=>{
    if(day>1)setday(day-1);
    else alert("Sorry You can't select less than 0!")
  }
  const AddToCart = async ()=>{
    if(login){
        await fetch(`http://${process.env.REACT_APP_URL}/cart`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
            },
            body:JSON.stringify(
                {
                    cart_item_id:id,
                    quantity:quantity,
                    color:color,
                    size:size,
                    day:day
               }
            )
        }).then((response)=>{
        })
        navigate('/cart');
    }
    else{
        alert("please login!!")
        navigate('/login')
    }
    
  }
 
  const fetchData = async ()=>{
    await fetch(`http://${process.env.REACT_APP_URL}/product/${params.id}`)
    .then((response)=>{ 
        return response.json();
    })
    .then((data)=>{       
        setproduct(data);
        setimageList(data.images);
        setCategoryList(data.category);
    }
    )
  }
 
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <section class="sg-product">

            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="sg-img">                                    
                                    <OwlCarousel key={`carousel_${imageList.length}`} className="tab-content owl-carousel" items={1} nav loop>
                                    {imageList.map((imagelink,imageid)=>(
                                         <div key={imageid} className="tab-pane fade show active" id="sg1" role="tabpanel">
                                            <img src={imagelink} alt="" className="img-fluid"/>
                                        </div>
                                    ))}
                                    </OwlCarousel>                                    
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="sg-content">
                                    <div class="pro-tag">
                                        <ul class="list-unstyled list-inline">
                                            <li class="list-inline-item"><a href="">{product.category_id} ,</a></li>
                                            <li class="list-inline-item"><a href="">{product.name}</a></li>
                                        </ul>
                                    </div>
                                     <div class="pro-name">
                                         <p>{product.name}</p>
                                     </div>
                                     <div class="pro-rating">
                                         <ul class="list-unstyled list-inline">
                                             <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                             <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                             <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                             <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                             <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                             <li class="list-inline-item"><a href="">( 09 Review )</a></li>
                                         </ul>
                                     </div>
                                     <div class="pro-price">
                                         <ul class="list-unstyled list-inline">
                                             <li class="list-inline-item">{product.currency} {product.price}</li>
                                             <li class="list-inline-item">{product.currency} {product.price+product.discounted_price}</li>
                                         </ul>
                                         <p>Availability : {product.is_available && ( <><span>In Stock</span> <label>({product.stock} Available)</label></>)}{!product.is_available && <span>OutOff Stock</span> } </p>
                                     </div>
                                     <div class="colo-siz">
                                        
                                         
                                         <div class="qty-box">
                                             <ul class="list-unstyled list-inline">
                                                 <li class="list-inline-item">Day : </li>
                                                 <li class="list-inline-item quantity buttons_added">
                                                     <input onClick={()=>DecrementDay()} style={{color:"red",fontSize:"25px"}} type="button" value="-" class="minus"/>
                                                     <input onClick={()=>setday(this.value)}  type="number" step="1" min="1" max="10" value={day} class="qty text" size="4" readonly/>
                                                     <input onClick={()=>IncrementDay()} style={{color:"green",fontSize:"25px"}} type="button" value="+" class="plus"/>
                                                 </li>
                                             </ul>
                                         </div>
                                         <div class="qty-box">
                                             <ul class="list-unstyled list-inline">
                                                 <li class="list-inline-item">Qty : </li>
                                                 <li class="list-inline-item quantity buttons_added">
                                                     <input onClick={()=>DecrementQuantity()} style={{color:"red",fontSize:"25px"}} type="button" value="-" class="minus"/>
                                                     <input onClick={()=>setquantity(this.value)}  type="number" step="1" min="1" max="10" value={quantity} class="qty text" size="4" readonly/>
                                                     <input onClick={()=>IncrementQuantity()} style={{color:"green",fontSize:"25px"}} type="button" value="+" class="plus"/>
                                                 </li>
                                             </ul>
                                         </div>
                                         <div class="pro-btns">
                                              <a onClick={()=>AddToCart()} href='/cart' class="cart">Add To Cart</a>
                                              <a href="" class="fav-com" data-toggle="tooltip" data-placement="top" title="Wishlist"><FavoriteBorderIcon></FavoriteBorderIcon></a>
                                              <a href="" class="fav-com"  data-toggle="tooltip" data-placement="top" title="Compare"><FavoriteBorderIcon></FavoriteBorderIcon></a>
                                         </div>
                                     </div>
                                </div>
                            </div>
                            <SimilarProducts category={categoryList}></SimilarProducts>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
  );
}

export default SingalProduct;
