import React from 'react'
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const HotDealBox = () => {
    const [value, setValue] = useState(4)

              return (
                      <div className='Hotdeals_item'>
                           <div className='Hotdeal_image'>
                              <img src='https://drive.google.com/uc?export=view&id=13tS9doCqrMN6FObi2nL_cZT8UsR-sh9y' alt="img_product" />
                              <div className='Hotdeal_image_discount'>56%<div style={{lineHeight:"4px"}}>OFF</div></div>
                           </div>
                           <div className='Hotdeal_content'>
                             <Link><h3>Madhuri Table White</h3></Link>
                              <div className='Hotdeal_rating text-secoundry'>
                                <div>
                                   <Rating 
                                    value={value}
                                   />
                                </div>
                                <div style={{color:"#9B9B9B", position:'relative',bottom:"3px", marginLeft:"2px"}}>
                                    (3)
                                </div>
                              </div>
                              <hr></hr>
                              <div className='Hotdeal_price dBetween'>
                                <h5><del>₹14999</del></h5>
                                <h5>₹10499</h5>
                              </div>
                           </div>
                           <div className='Hotdeal_cart_quote'>
                                <Link>
                                    <div className='Hotdeal_quote_image'>
                                        <img src="images/2.png" alt='quote' />Quote
                                    </div>
                                </Link>
                                <Link>
                                    <div className='Hotdeal_cart_image'>
                                        <img src="images/1.png" alt='quote' />Cart
                                    </div>
                                </Link>
                           </div>
                           <div className='Hotdeal_addrental'>
                              <Link>
                                 <div>Add To Rental</div>
                              </Link>
                           </div>
                       </div>
                   )
               }

export default HotDealBox