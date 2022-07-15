import React,{useEffect,useState} from 'react';
import GetAuthorization from './GetAuthorization';

const Order_review=()=>{   
    
    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch("http://144.24.99.210:4545/order-review",{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }          
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             console.log(data.products);

       
             setProduct(data)
                    
           
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

         
// console.log(product)

  return (
    <>
    <section className="checkout">
    <div className="container">
        <div className="row">
    <div className="col-md-5">
    <div className="row">
        <div className="col-md-12">
            <div className="order-review">
                <h5>Order Review</h5>
                <div className="review-box">
                    <ul className="list-unstyled">
                    {
                    product.products.map((data) => (
        
                        
                    //    <li>Product <span>Total</span></li>
                        <li className="d-flex justify-content-between">
                            <div className="pro">
                                <img src="images/sbar-1.png" alt=""/>
                                <p>{data.name}</p>
                                <span>1 X $49.00</span>
                            </div>
                            <div className="prc">
                                <p>$49.00</p>
                            </div>
                        </li>
                        // <li>Sub Total <span>$167.00</span></li>
                        // <li>Shipping & Tax <span>$00.00</span></li>
                        // <li>Grand Total <span>$167.00</span></li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
        </div>
        </div>
            </div>
        </section>
        </>
  );
}
export default Order_review;