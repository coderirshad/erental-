import React,{useEffect,useState} from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function SuggestProduct(){
    const [suggestProduct, setSuggestproduct] = useState([]) 
    const params = useParams(); 
    const suggestProductapi = async ()=>{
    await fetch(`http://${process.env.REACT_APP_URL}/suggest/product/${params.id}
    `)
    .then((response)=>{ 
        return response.json();
    })
    .then((data)=>{      
       setSuggestproduct(data);
    }
    )
  }

  useEffect(() => {
   suggestProductapi();
  }, [suggestProduct])

  return (
    <div className="col-md-3">
    <section className="product-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bt-deal">
                                <div className="sec-title">
                                    <h6>Suggest Product</h6>
                                </div>
                               
                                <OwlCarousel key={`carousel_${suggestProduct.length}`} className="bt-body owl-carousel" items={1} nav loop  >
                                <div className="bt-items" >
                                    {suggestProduct.map((data,id)=>(                                     
                                            <div className="bt-box d-flex" key={id} >
                                                <div className="bt-img">
                                                    <Link to={`/product/${data.product_id}`}><img src={data.image} alt=""/></Link>
                                                </div>
                                                <div className="bt-content">
                                                    <p><Link to={`/product/${data.product_id}`}>{data.product_name}</Link></p>
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
                                            </div>                                                                             
                                    ))}    
                                </div>    
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}
