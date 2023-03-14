import React from 'react'
import HotDealBox from './HotDealBox';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState, useEffect } from 'react';

const NewProduct = ({login}) => {
    const [product, setproduct] = useState([]); 

    const fetchData = ()=>{
        fetch(`http://${process.env.REACT_APP_URL}/new-product`).then((response)=>{
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
                <div className='hotdeals_header NewProduct_after'>
                <h1>New Products</h1>
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

export default NewProduct