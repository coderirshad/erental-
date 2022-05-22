import React,{useEffect,useState} from 'react';

export default function Payment() {

    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch("http://144.24.99.210:4545/payment-method")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             console.log(data);
         
          
            setProduct(data)

          
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
      
    <section className="checkout">
    <div className="container">
        <div className="row">
    <div className="col-md-12">
            <div className="pay-meth">
                <h5>Payment Method</h5>
                <div className="pay-box">
                    <ul className="list-unstyled">
                    {
                    product.map(data => (
                        <li>
                            <input type="radio" id="pay1" name="payment" value="pay1" checked/>
                            <label for="pay1"><span><i className="fa fa-circle"></i></span>{data.name}</label>
                            <p>{data.details}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <button type="button" name="button" className="ord-btn">Place Order</button>
        </div>
        </div></div></section>
  );
}
