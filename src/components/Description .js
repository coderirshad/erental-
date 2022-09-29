import React from 'react'
import { NavLink, Outlet, useLocation,useParams } from "react-router-dom";


function Description (props) {
  const {pathname} = useLocation();
  const {id} = useParams();
  const active = pathname === `/product/${id}`;
  

  return (
    <div>
      <hr style={{border:"2px solid silver", marginTop:"4rem", marginBottom:"2rem"}} />
          <div className='Ds_div'>
            <div className='Ds-div-container'>
                    <ul>
                        <li><NavLink className={active ? 'active' :'inactive'}to="Discription">Discription </NavLink></li>
                        <li><NavLink to="Reviews">Reviews(0)</NavLink></li>
                        <li><NavLink to="Shipping">Question & Answer</NavLink></li>
                        <li><NavLink to="Delivery">shipping & delivery</NavLink></li>
                        <li><NavLink to="termandcondition">Terms & Conditions</NavLink></li>
                        <li><NavLink to="ProductEnquiry">PRODUCT ENQUIRY</NavLink></li>
                    </ul>
                </div>
            </div>
            <Outlet />
            <hr style={{marginTop:"4rem", border:"2px solid silver"}}/>
    </div>
  )
}

export default Description; 