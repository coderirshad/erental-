import React from 'react';
import '../css/style.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Invoice() {
  return (
   <section className='invoice'>
    <div className='container'>

        <div class="section-title">
          <h1>HOPE & DREAM</h1>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="e-contact">
                    <h5>ERENTALS H&D PVT LTD</h5>
                    <div className="e-add">
                        <i className="fa fa-map-marker"></i>
                        <span>Address :</span>
                        <p>7Shop No. 234, City Centre Mall,SV Road,
Goregaon West, Mumbai, Maharashtra,
PIN Code 400104, India</p>
                    </div>
                    <div className="e-email">
                        <i className="fa fa-envelope"></i>
                        <span>Email :</span>
                        <p>info@erentals.in </p>
                        <p>hopeanddream.14@gmail.com</p>

                    </div>
                    <div className="e-phn">
                        <i className="fa fa-phone"></i>
                        <span>Phone :</span>
                        <p>9867348165/8652348165</p>
                    </div>
                  
                </div>
            </div>
            <div className="col-md-4">

            <div className="bill">
                    <h5>BILL TO</h5>
                    <div className="b-name">
                        <i className="fa fa-map-marker"></i>
                        <span>Name :</span>
                        <p>Sushma Maloo</p>
                    </div>
                    <div className="b-add">
                        <i className="fa fa-map-marker"></i>
                        <span>Address :</span>
                        <p>Nornament, Zaveri house,
Hughes Road, Mumbai400007</p>
                    </div>
        
                    <div className="b-phn">
                        <i className="fa fa-phone"></i>
                        <span>Phone :</span>
                        <p>9819266457</p>
                    </div>
                  
                </div>
              
            </div>

            <div className="col-md-4">

                    <div className="ship">
                            <h5>SHIP TO</h5>
                            <div className="s-add">
                                <i className="fa fa-map-marker"></i>
                                <span>Address :</span>
                                <p>Shri Maheshwari Bhavan,
                                    Near flyover, Bhayandar
                                    west, Thane-401101
                                    </p>
                            </div>
                            <div className="s-name">
                                <i className="fa fa-map-marker"></i>
                                <span>Name :</span>
                                <p>Sushma Maloo</p>
                            </div>
                          

                            <div className="s-phn">
                                <i className="fa fa-phone"></i>
                                <span>Phone :</span>
                                <p>9819266457</p>
                            </div>
                        
                        </div>
  
</div>
            {/* <div className="col-md-3">
                <div className="f-link">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/account"><i className="fa fa-angle-right"></i>My Account</a></li>
                        <li><a href="/cart"><i className="fa fa-angle-right"></i>Shopping Cart</a></li>
                        <li><a href="/wishlist"><i className="fa fa-angle-right"></i>My Wishlist</a></li>
                        <li><a href="/checkout"><i className="fa fa-angle-right"></i>Checkout</a></li>
                        <li><a href="/order/history"><i className="fa fa-angle-right"></i>Order History</a></li>
                        <li><a href="/login"><i className="fa fa-angle-right"></i>Log In</a></li>
                        <li><a href="/location"><i className="fa fa-angle-right"></i>Our Locations</a></li>
                    </ul>
                </div>
            </div> */}
          
        </div>
<div className='bill_list'>
 <TableContainer component={Paper} style={{width:"1000px"}}>
      <Table  aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
          
            <TableCell align="left" >Serial No.</TableCell>
            <TableCell align="left" >Particular</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Days</TableCell>
            <TableCell align="right">Unit rate</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow key="">
              <TableCell component="th" scope="row">
                45
              </TableCell>
              <TableCell >55</TableCell>
              <TableCell align="right">55</TableCell>
              <TableCell align="right">55</TableCell>
              <TableCell align="right">55</TableCell>
              <TableCell align="right">55</TableCell>
            </TableRow>

            <TableRow >
            <TableCell rowSpan={2} />

            <TableCell colSpan={4}>Subtotal</TableCell>
            <TableCell align="right">hkj</TableCell>
          </TableRow>
          <TableRow>
          
            <TableCell colSpan={4}>Subtotal</TableCell>
            <TableCell align="right">hkj</TableCell>
          </TableRow>  
          <TableRow>
          <TableCell rowSpan={1} />

          <TableCell colSpan={4}>Total payable amount at the time of delivery (₹ Seven thousand two hundred only) </TableCell>
          <TableCell align="right">hkj</TableCell>
        </TableRow>  
     
      
        </TableBody>
      </Table>
</TableContainer>
</div>
<br>
</br>
<div class="terms">
          <h3>Terms & Conditions :</h3>

<br></br>
          <ul className="list-unstyled">
                        <li>1. Customer will ensure quality and quantity of items at the time of delivery</li>
                        <li>2. For the safety of the items, there is provision of refundable security deposit to be paid by customer in advance
</li>
                        <li>3. The refund amount will be credited back within 24 hours of return of items in sound conditions</li>
                        <li>4. If there is any damage, proportionate amount will be charged to the customers</li>
  
                        <li>5. There will be KYC completion of the customer by reviewing the following documents- Id and 
address proof in the same name and at the same(local) address. If customer is not able to 
provide the following documents, then any reference person having local id and address 
proofs would work.</li>
                        <li>6. Please be careful during delivery and pick of the items and mark accordingly.</li>
                    </ul>
        </div>
<br></br>
<div className='list'>
    <h3>Check List of Items</h3>
 <TableContainer component={Paper} style={{width:"1000px"}}>
      <Table  aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead> 
          <TableRow >
          
            <TableCell align="left" >Serial No.</TableCell>
            <TableCell align="left" >Particular</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Warehouse </TableCell>
            <TableCell align="right">Customer at delivery</TableCell>
            <TableCell align="right">Customer at return</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
         
            <TableRow key="">
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell >Jewelry counter </TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">55</TableCell>
              <TableCell align="right">55</TableCell>
              <TableCell align="right">55</TableCell>
            </TableRow>


            <TableRow key="">
              <TableCell component="th" scope="row">
                2
              </TableCell>
              <TableCell >Jewelry showcase </TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
</TableContainer>
</div>
<br></br>

<div className='list'>
    <h3>Persons involved in the deal</h3>
 <TableContainer component={Paper} style={{width:"1000px"}}>
      <Table  aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead> 
          <TableRow  >
          
            <TableCell align="left">Person</TableCell>
            <TableCell align="left" >Name</TableCell>
            <TableCell align="right" >Signature</TableCell>
           
          </TableRow>
        </TableHead>
        
        <TableBody>
         
            <TableRow key="">
              <TableCell component="th" scope="row">
              Manager
              </TableCell>
              <TableCell >Abdul Ali </TableCell>
              <TableCell align="right">2</TableCell>
              
            </TableRow>


            <TableRow key="">
              <TableCell component="th" scope="row">
              Delivery person
              </TableCell>
              <TableCell >Arman (1000D)</TableCell>
              <TableCell align="right">2</TableCell>
             
            </TableRow>
        </TableBody>

        <TableRow key="">
              <TableCell component="th" scope="row">
              Person at warehouse 
              </TableCell>
              <TableCell >Ramakant (1044)</TableCell>
              <TableCell align="right">2</TableCell>
             
            </TableRow>
        

        <TableRow key="">
              <TableCell component="th" scope="row">
              Customer
              </TableCell>
              <TableCell >Sushma Maloo</TableCell>
              <TableCell align="right">2</TableCell>
             
            </TableRow>

      </Table>
</TableContainer>
</div>


<br></br>


<div class="note">
          <h3>Note :</h3>

<br></br>
          <ul className="list-unstyled">
            <li>Bank Details</li>
            <li>Bank Name: Axis Bank </li>
            <li>Company Name: ERENTALS HND PVT LTD</li>
            <li>Branch Name: Hiranandani gardens, Powai, Mumbai 400076</li>
            <li>IFSC Code: UTIB0000246</li>
<li>Account No. 922020013377806</li>
<li>Gpay Number: 8652348165</li>
                    </ul>
        </div>
    </div>

   </section>
  );
}
