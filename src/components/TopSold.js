import React from 'react'
import HotDealBox from './HotDealBox';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const TopSold = () => {
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
                    <HotDealBox />
                    <HotDealBox />
                    <HotDealBox />
                    <HotDealBox />
                    <HotDealBox />
                    <HotDealBox />
                    <HotDealBox />
                    <HotDealBox />
                    <HotDealBox />
                    <HotDealBox />
                </div>
            </div>
        </div>
    )
}

export default TopSold