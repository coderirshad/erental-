import React from 'react'
import HotDealBox from './HotDealBox';
import { useState, useEffect } from 'react';

const SimilarProducts = ({category, login}) => {
    const [product, setproduct] = useState([]); 
    const fetchData = ()=>{
        fetch(`http://${process.env.REACT_APP_URL}/category/${category[0]}/product`).then((response)=>{
            return response.json();
        }).then((data)=>{
            setproduct(data);
        })
    }
    useEffect(()=>{
        fetchData();
    },[category])
  return (
        <div className='Hotdeals'>
            <div className='Hotdeals_width'>
                <div className='hotdeals_header NewProduct_after' >
                <h1 style={{}}>Similar Products</h1>
                <div className='hotdeals_view'>
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

export default SimilarProducts;
 