import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
export default function HotDeals() {
    const [product, setproduct] = useState([]);    
    const fetchData = ()=>{
        fetch(`http://${process.env.REACT_APP_URL}/hot-deal`).then((response)=>{
            return response.json();
        }).then((data)=>{
            setproduct(data)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="container-fluid bg-light pt-5 pb-3">
        <h1 className='text-center text-decoration-underline mb-5'>Hot Deals</h1>
         <div class="row mb-4 d-flex justify-content-center ">
            {product.map((data, id) =>{
                return(
                    <div class="col-lg-2 col-md-6 mb-4 mb-lg-0" style={{cursor:"pointer"}}>
                    <div class="card rounded shadow-sm border-0">
                      <div class="card-body p-4"><Link to={`/product/${data.product_id}`}><img src={data.image} alt="" class="img-fluid d-block mx-auto mb-3" width={200} height={300} /></Link>
                         <h5> <Link to={`/product/${data.product_id}`} className="text-dark">{data.product_name}</Link></h5>
                         <p class="item-price"><strike>INR {data.discounted_price}</strike>   <b>INR {data.price}</b></p>
                         <p class=" text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <ul class="list-inline small">
                          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                          <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                          <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                        </ul>
                      </div>
                    </div>
                    </div>
                )

            })}
       </div>
    </div>
  )
}
