import React,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const SingalProduct = () => {
  const params = useParams();
  const id=params.id;
  const [product, setproduct] = useState([])
  const [quantity, setquantity] = useState(1)
  const [color, setcolor] = useState("")
  const [size, setsize] = useState("")
  const [colorList, setcolorList] = useState([])
  const [sizeList, setsizeList] = useState([])
  
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

  const AddToCart = ()=>{   
    fetch("http://140.238.230.250:4545/product",{
        method:"PUT",
        body:JSON.stringify(
            {
                product_id:id,
                quantity:quantity,
                color:color,
                size:size
           }
        )
    })
  }
  const fetchData = ()=>{
    fetch(`http://localhost:8080/product/${params.id}`)
    .then((response)=>{ 
        return response.json();
    })
    .then((data)=>{       
        setproduct(data);
        setcolorList(data.attribute.color);
        setsizeList(data.attribute.size);
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
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="sg1" role="tabpanel">
                                            <img src={product.image} alt="" class="img-fluid"/>
                                        </div>
                                        <div class="tab-pane" id="sg2" role="tabpanel">
                                            <img src="images/tab-2.png" alt="" class="img-fluid"/>
                                        </div>
                                        <div class="tab-pane" id="sg3" role="tabpanel">
                                            <img src="images/tab-3.png" alt="" class="img-fluid"/>
                                        </div>
                                        <div class="tab-pane" id="sg4" role="tabpanel">
                                            <img src="images/tab-4.png" alt="" class="img-fluid"/>
                                        </div>
                                    </div>
                                    <div class="nav d-flex justify-content-between">
                                        <a class="nav-item nav-link active" data-toggle="tab" href="#sg1"><img src="images/tab-1.png" alt=""/></a>
                                        <a class="nav-item nav-link" data-toggle="tab" href="#sg2"><img src="images/tab-2.png" alt=""/></a>
                                        <a class="nav-item nav-link" data-toggle="tab" href="#sg3"><img src="images/tab-3.png" alt=""/></a>
                                        <a class="nav-item nav-link" data-toggle="tab" href="#sg4"><img src="images/tab-4.png" alt=""/></a>
                                    </div>
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
                                         <div class="color">
                                             <ul class="list-unstyled list-inline">
                                             <li>Color :</li>
                                               {colorList.map((data,id1)=>(                                                
                                                        <li class="list-inline-item" key={id1}>
                                                            <input onClick={()=>setcolor(data.name)} style={{backgroundColor:`${data.color_code}`}} type="radio" id="color-2"  name="color" value={data.name}/>
                                                            <label for="color-2"><span><i class="fa fa-check"></i></span></label>
                                                        </li>
                                               ))}
                                                
                                             </ul>
                                         </div>
                                         <div class="size">
                                             <ul class="list-unstyled list-inline">
                                                 <li>Size :</li>
                                                 {sizeList.map((data)=>(                                                
                                                    <li class="list-inline-item">
                                                        <input onClick={()=>setsize(data.Name)}  type="radio" id="size-1" name="size" value={data.Name}/>
                                                        {data.Name=="Small" && <label for="size-1">S</label>}
                                                        {data.Name=="Medium" && <label for="size-1">M</label>}
                                                        {data.Name=="Large" && <label for="size-1">L</label>}
                                                    </li>
                                               ))}
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
                                              <a onClick={()=>AddToCart()} href="/cart" class="cart">Add To Cart</a>
                                              <a href="" class="fav-com" data-toggle="tooltip" data-placement="top" title="Wishlist"><FavoriteBorderIcon></FavoriteBorderIcon></a>
                                              <a href="" class="fav-com"  data-toggle="tooltip" data-placement="top" title="Compare"><FavoriteBorderIcon></FavoriteBorderIcon></a>
                                         </div>
                                     </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="sg-tab">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#pro-det">Product Details</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#rev">Reviews (03)</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="pro-det" role="tabpanel">
                                        
                                            <p>{product.about}</p>
                                        </div>
                                        <div class="tab-pane fade" id="rev" role="tabpanel">
                                            <div class="review-box d-flex">
                                                <div class="rv-img">
                                                    <img src="images/testimonial-1.jpg" alt=""/>
                                                </div>
                                                <div class="rv-content">
                                                    <h6>Michel Kolins <span>(Feb 10, 2020)</span></h6>
                                                    <ul class="list-unstyled list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a deleniti dolorem architecto quae eligendi voluptatem omnis beatae at aut eveniet repellendus voluptas.</p>
                                                </div>
                                            </div>
                                            <div class="review-box d-flex">
                                                <div class="rv-img">
                                                    <img src="images/testimonial-2.jpg" alt=""/>
                                                </div>
                                                <div class="rv-content">
                                                    <h6>Jenus Doe <span>(Feb 10, 2020)</span></h6>
                                                    <ul class="list-unstyled list-inline">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                    </ul>
                                                    <p>Consectetur adipisicing elit. Dignissimos a deleniti dolorem architecto quae eligendi voluptatem omnis beatae at aut eveniet repellendus voluptas.</p>
                                                </div>
                                            </div>
                                            <div class="review-form">
                                                <h6>Add Your Review</h6>
                                                <form action="#">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="star-rating">
                                                                <label>Your Rating*</label>
                                                                <span class="fa fa-star-o" data-rating="1"></span>
                                                                <span class="fa fa-star-o" data-rating="2"></span>
                                                                <span class="fa fa-star-o" data-rating="3"></span>
                                                                <span class="fa fa-star-o" data-rating="4"></span>
                                                                <span class="fa fa-star-o" data-rating="5"></span>
                                                                <input type="hidden" name="whatever1" class="rating-value" value="0"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label>Your Name*</label>
                                                            <input type="text" name="name" required=""/>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label>Your Email*</label>
                                                            <input type="text" name="email" required=""/>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label>Your Review*</label>
                                                            <textarea required=""></textarea>
                                                            <button type="submit">Add Review</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="sim-pro">
                                    <div class="sec-title">
                                        <h5>Similar Product</h5>
                                    </div>
                                    <div class="sim-slider owl-carousel">
                                        <div class="sim-item">
                                            <div class="sim-img">
                                                <img class="main-img img-fluid" src="images/tab-5.png" alt=""/>
                                                <img class="sec-img img-fluid" src="images/tab-16.png" alt=""/>
                                                <div class="layer-box">
                                                    <a href="" class="it-comp" data-toggle="tooltip" data-placement="left" title="Compare"><img src="images/it-comp.png" alt=""/></a>
                                                    <a href="" class="it-fav" data-toggle="tooltip" data-placement="left" title="Favourite"><img src="images/it-fav.png" alt=""/></a>
                                                </div>
                                            </div>
                                            <div class="sim-heading">
                                                <p><a href="">Item Title Here</a></p>
                                            </div>
                                            <div class="img-content d-flex justify-content-between">
                                                <div>
                                                    <ul class="list-unstyled list-inline fav">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <ul class="list-unstyled list-inline price">
                                                        <li class="list-inline-item">120.00</li>
                                                        <li class="list-inline-item">150.00</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <a href="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><img src="images/it-cart.png" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sim-item">
                                            <div class="sim-img">
                                                <img class="main-img img-fluid" src="images/tab-11.png" alt=""/>
                                                <img class="sec-img img-fluid" src="images/tab-16.png" alt=""/>
                                                <div class="layer-box">
                                                    <a href="" class="it-comp" data-toggle="tooltip" data-placement="left" title="Compare"><img src="images/it-comp.png" alt=""/></a>
                                                    <a href="" class="it-fav" data-toggle="tooltip" data-placement="left" title="Favourite"><img src="images/it-fav.png" alt=""/></a>
                                                </div>
                                            </div>
                                            <div class="sim-heading">
                                                <p><a href="">Item Title Here</a></p>
                                            </div>
                                            <div class="img-content d-flex justify-content-between">
                                                <div>
                                                    <ul class="list-unstyled list-inline fav">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <ul class="list-unstyled list-inline price">
                                                        <li class="list-inline-item">120.00</li>
                                                        <li class="list-inline-item">150.00</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <a href="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><img src="images/it-cart.png" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sim-item">
                                            <div class="sim-img">
                                                <img class="main-img img-fluid" src="images/tab-7.png" alt=""/>
                                                <img class="sec-img img-fluid" src="images/tab-16.png" alt=""/>
                                                <div class="layer-box">
                                                    <a href="" class="it-comp" data-toggle="tooltip" data-placement="left" title="Compare"><img src="images/it-comp.png" alt=""/></a>
                                                    <a href="" class="it-fav" data-toggle="tooltip" data-placement="left" title="Favourite"><img src="images/it-fav.png" alt=""/></a>
                                                </div>
                                            </div>
                                            <div class="sim-heading">
                                                <p><a href="">Item Title Here</a></p>
                                            </div>
                                            <div class="img-content d-flex justify-content-between">
                                                <div>
                                                    <ul class="list-unstyled list-inline fav">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <ul class="list-unstyled list-inline price">
                                                        <li class="list-inline-item">120.00</li>
                                                        <li class="list-inline-item">150.00</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <a href="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><img src="images/it-cart.png" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sim-item">
                                            <div class="sim-img">
                                                <img class="main-img img-fluid" src="images/tab-9.png" alt=""/>
                                                <img class="sec-img img-fluid" src="images/tab-16.png" alt=""/>
                                                <div class="layer-box">
                                                    <a href="" class="it-comp" data-toggle="tooltip" data-placement="left" title="Compare"><img src="images/it-comp.png" alt=""/></a>
                                                    <a href="" class="it-fav" data-toggle="tooltip" data-placement="left" title="Favourite"><img src="images/it-fav.png" alt=""/></a>
                                                </div>
                                            </div>
                                            <div class="sim-heading">
                                                <p><a href="">Item Title Here</a></p>
                                            </div>
                                            <div class="img-content d-flex justify-content-between">
                                                <div>
                                                    <ul class="list-unstyled list-inline fav">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <ul class="list-unstyled list-inline price">
                                                        <li class="list-inline-item">120.00</li>
                                                        <li class="list-inline-item">150.00</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <a href="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><img src="images/it-cart.png" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sim-item">
                                            <div class="sim-img">
                                                <img class="main-img img-fluid" src="images/tab-13.png" alt=""/>
                                                <img class="sec-img img-fluid" src="images/tab-16.png" alt=""/>
                                                <div class="layer-box">
                                                    <a href="" class="it-comp" data-toggle="tooltip" data-placement="left" title="Compare"><img src="images/it-comp.png" alt=""/></a>
                                                    <a href="" class="it-fav" data-toggle="tooltip" data-placement="left" title="Favourite"><img src="images/it-fav.png" alt=""/></a>
                                                </div>
                                            </div>
                                            <div class="sim-heading">
                                                <p><a href="">Item Title Here</a></p>
                                            </div>
                                            <div class="img-content d-flex justify-content-between">
                                                <div>
                                                    <ul class="list-unstyled list-inline fav">
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                        <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                                    </ul>
                                                    <ul class="list-unstyled list-inline price">
                                                        <li class="list-inline-item">120.00</li>
                                                        <li class="list-inline-item">150.00</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <a href="" data-toggle="tooltip" data-placement="top" title="Add to Cart"><img src="images/it-cart.png" alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="category-box">
                            <div class="sec-title">
                                <h6>Categories</h6>
                            </div>
                            {/* <!-- accordion --> */}
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header">
                                        <a href="" data-toggle="collapse" data-target="#collapse1">
                                            <span>Clothing</span>
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse1" class="collapse">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 1</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 2</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 3</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 4</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a href="" data-toggle="collapse" data-target="#collapse2">
                                            <span>Electronics</span>
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse2" class="collapse">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 1</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 2</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 3</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 4</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a href="" data-toggle="collapse" data-target="#collapse3">
                                            <span>Home Appliance</span>
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse3" class="collapse">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 1</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 2</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 3</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 4</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a href="" data-toggle="collapse" data-target="#collapse4">
                                            <span>Smartphone</span>
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse4" class="collapse">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 1</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 2</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 3</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 4</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a href="" data-toggle="collapse" data-target="#collapse5">
                                            <span>Computer</span>
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse5" class="collapse">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 1</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 2</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 3</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 4</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a href="" data-toggle="collapse" data-target="#collapse6">
                                            <span>Kids Collection</span>
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse6" class="collapse">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 1</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 2</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 3</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 4</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a href="" data-toggle="collapse" data-target="#collapse7">
                                            <span>Automobile</span>
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                    </div>
                                    <div id="collapse7" class="collapse">
                                        <div class="card-body">
                                            <ul class="list-unstyled">
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 1</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 2</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 3</a></li>
                                                <li><a href=""><i class="fa fa-angle-right"></i> Catagory 4</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ht-offer">
                            <div class="sec-title">
                                <h6>Hot Offer</h6>
                            </div>
                            
                         
                            <OwlCarousel class="ht-body owl-carousel" items={1} nav loop >
                                <div class="ht-item">
                                    <div class="ht-img">
                                        <a href="#"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" class="img-fluid"/></a>
                                        <span>- 59%</span>
                                        <ul class="list-unstyled list-inline counter-box">
                                            <li class="list-inline-item">185 <p>Days</p></li>
                                            <li class="list-inline-item">11 <p>Hrs</p></li>
                                            <li class="list-inline-item">39 <p>Mins</p></li>
                                            <li class="list-inline-item">51 <p>Sec</p></li>
                                        </ul>
                                    </div>
                                    <div class="ht-content">
                                        <p><a href="">Items Title Name Enter Here</a></p>
                                        <ul class="list-unstyled list-inline fav">
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                        </ul>
                                        <ul class="list-unstyled list-inline price">
                                            <li class="list-inline-item">$120.00</li>
                                            <li class="list-inline-item">$150.00</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ht-item">
                                    <div class="ht-img">
                                        <a href="#"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" class="img-fluid"/></a>
                                        <span>- 58%</span>
                                        <ul class="list-unstyled list-inline counter-box">
                                            <li class="list-inline-item">185 <p>Days</p></li>
                                            <li class="list-inline-item">11 <p>Hrs</p></li>
                                            <li class="list-inline-item">39 <p>Mins</p></li>
                                            <li class="list-inline-item">51 <p>Sec</p></li>
                                        </ul>
                                    </div>
                                    <div class="ht-content">
                                        <p><a href="">Items Title Name Enter Here</a></p>
                                        <ul class="list-unstyled list-inline fav">
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                                        </ul>
                                        <ul class="list-unstyled list-inline price">
                                            <li class="list-inline-item">$120.00</li>
                                            <li class="list-inline-item">$150.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div class="add-box">
                            <a href=""><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
 alt="" class="img-fluid"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default SingalProduct;
