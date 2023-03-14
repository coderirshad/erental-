import React from 'react'
import HotDealBox from './HotDealBox';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState, useEffect } from 'react';

const TopSold = ({login}) => {

    const [topRated, settopRated] = useState([]);
    const fetchData = ()=>{
       
        fetch(`http://${process.env.REACT_APP_URL}/top-sold-product`)
        .then((response)=>{ 
            return response.json();
        })
        .then((data)=>{       
            settopRated(data);
        }
        )
    }
    useEffect(() => {
      fetchData();    
    }, [])

    return (
        <div className='Hotdeals'>
            <div className='Hotdeals_width'>
                <div className='hotdeals_header Topsold_after'>
                    <h1>Top Sold</h1>
                    <div className='hotdeals_view'>
                        <p>View All</p>
                        <NavigateNextIcon style={{ fontSize: "30px" }}></NavigateNextIcon>
                    </div>
                </div>
                <hr></hr>
                <div className='Hotdeals_item_box'>
                     {topRated.map(item =>
                          <HotDealBox data={item} login={login}/>
                        )} 
                </div>
            </div>
        </div>
    )
}

export default TopSold