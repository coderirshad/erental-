import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import GetAuthorization from './GetAuthorization';
import '../css/style.css';
import ErentalHeaderAndFooter from "./ErentalHeaderAndFooter";

export default function Invoice() {
  const location = useLocation();
  const [InvoiceDetails, setInvoiceDetails] = useState([]);

  var counter_product = 0;
  var counter_other = 0;

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const fetchdata = async() =>{
    const response = await fetch(`http://${process.env.REACT_APP_URL}/invoice/${location.state.product.Order_id}`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
          }  
    });
    setInvoiceDetails(await response.json());
}
    const data = InvoiceDetails;
    
    useEffect(() => {
        fetchdata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

  let date = new Date();
  const handlePrint = ()=>{
    window.print();
  }
  return (
    <div>
    {data.length === 0 ? (<></>):(
        <table className="w-100 border-none" id="print">                                                                                                                               
        <thead className="Erental-header-image w-100 border-none">
          <div className="position-relative">
          <ErentalHeaderAndFooter image={"Erental Invoice Header"}/>
          <div className="header position-absolute text-light">INVOICE: 123456</div>
        <div className="header-date position-absolute text-light">{month[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</div>
          </div>
        </thead>

        <div className="container">                                                                     
        <div className="row my-3">                                                         
            <div className="col">
                <div className="text-start">
                    <h5 className='fw-semibold fst-italic textColor m-3' id="invoice-head">ERENTALS H&D PVT LTD</h5>
                    <div className="e-add d-flex flex-row m-0">
                      <i className="textColor fa fa-home pe-3"></i>
                      <div className='text-dark fs-6'>7Shop No. 234, City Centre Mall,SV Road,
                            Goregaon West, Mumbai, Maharashtra,
                            PIN Code 400104, India</div>
                    </div>
                    <div className="e-phn d-flex flex-row align-items-center m-0">
                        <i className="textColor fa fa-phone pe-3"></i>
                        <div className='text-dark fs-6'>9867348165 / 8652348165</div>
                    </div>
                    <div className="e-email d-flex flex-column m-0">
                      <div className='d-flex flex-row align-items-center'>
                        <i className="textColor fa fa-at pe-3"></i>
                        <div className='text-dark fs-6'>info@erentals.in</div>
                      </div>
                      <div className='d-flex flex-row align-items-center'>
                        <i className="textColor fa fa-at pe-3"></i>
                        <div className='text-dark fs-6'>hopeanddream.14@gmail.com</div>
                      </div>
                    </div>
                    <div className="e-email d-flex flex-column m-0">
                      <div className='d-flex flex-row align-items-center'>
                        <i className="textColor fa fa-globe pe-3"></i>
                        <a className='text-decoration-none text-dark fs-6' href='https://www.erentals.in/'>www.erentals.in</a>
                      </div>
                      <div className='d-flex flex-row align-items-center'>
                        <i className="textColor fa fa-angle-right pe-3"></i>
                        <div className='text-dark fs-6'>GSTN: 27AAGCE8977P1ZJ</div>
                      </div>
                      <div className='d-flex flex-row align-items-center'>
                        <i className="textColor fa fa-angle-right pe-3"></i>
                        <div className='text-dark fs-6'>HSN/SAC: 998596</div>
                      </div>
                    </div>
                </div>
            </div>

            <div className="col">
            <div className="text-start">
                    <h5 className='fw-semibold fst-italic textColor m-3' id="invoice-head">BILL TO</h5>
                    <div className="b-name d-flex flex-row m-0">
                    <i className="textColor fa fa-user-alt pe-3"></i>
                      <div className='text-dark fs-6'>{data.billing_address.name}</div>
                    </div>

                    <div className="b-add d-flex flex-row m-0">
                      <i className="textColor fa fa-home pe-3"></i>
                      <div className='text-dark fs-6'>{data.billing_address.address1}, {data.billing_address.address2}, {data.billing_address.city}, {data.billing_address.district}, {data.billing_address.state} - {data.billing_address.pin_code}</div>
                    </div>
        
                    <div className="b-phn d-flex flex-row align-items-center m-0">
                        <i className="textColor fa fa-phone pe-3"></i>
                        <div className='text-dark fs-6'>{data.billing_address.mobile}</div>
                    </div>

                    <div className="b-phn d-flex flex-column m-0">
                        <div className='text-dark fs-6'>GSTN - {data.billing_address.gstn}</div>
                        <div className='text-dark fs-6'>Date- {data.billing_address.date}</div>
                    </div>
                </div>
            </div>

            <div className="col">

                    <div className="text-start">
                            <h5 className='fw-semibold fst-italic textColor m-3' id="invoice-head">SHIP TO</h5>
                            <div className="s-add d-flex flex-row  m-0">
                              <i className="textColor fa fa-home pe-3"></i>
                              <div className='text-dark fs-6'>{data.shipping_address.address1}, {data.shipping_address.address2}, {data.shipping_address.city}, {data.shipping_address.district}, {data.shipping_address.state} - {data.shipping_address.pin_code}</div>
                            </div>
                            <div className="s-name d-flex flex-row m-0">
                              <i className="textColor fa fa-user-alt pe-3"></i>
                              <div className='text-dark fs-6'>{data.shipping_address.name}</div>
                            </div>
                          

                            <div className="d-flex flex-row m-0">
                              <i className="textColor fa fa-phone pe-3 pt-1"></i>
                            <div className="s-phn d-flex flex-column">
                              <div className='text-dark fs-6'>{data.shipping_address.mobile}</div>
                              <div className='text-dark fs-6'>Date- {data.shipping_address.date}</div>
                            </div>
                            </div>
                        
                        </div>
  </div>     
        </div>
        <div className='bg-danger w-100' style={{height:"0.2rem"}}/>

  <table className="table mt-5 invoice-main-table fs-5 text-start border-top border-bottom border-dark" >
            <thead className="textColor">
              <tr className="invoice-main-table-head align-baseline">
                <th scope="col">Sr. No</th>
                <th scope="col">Particulars</th>
                <th scope="col">Quantity</th>
                <th scope="col">Days</th>
                <th scope="col">{"Unit rate(INR)"}</th>
                <th scope="col">{"Amount(INR)"}</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (<></>):(
                data.items.map((element,key) => {
                  counter_product++;
                return (
                  <tr key={key} >
                    <th>{counter_product}</th>
                    <td>{element.item_name}</td>
                    <td>{element.quantity}</td>
                    <td>{element.days}</td>
                    <td>{element.unit_price}</td>
                    <td>{element.total}</td>
                  </tr>
                );
              }))}

            {/* uncomment after the resolving the api issue */}
            
            <tr>
              <th scope="row"></th>
              <td>Sub total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.sub_total}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Transportation</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.delivery_charges}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Discount</td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Total Payable before taxes</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.sub_total + 0}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>CGST@9%</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.cgst}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>SGST@9%</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.sgst}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Total payable with taxes</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.total_payable}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Advance paid</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.advacne_paid}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Total payable amount at the time of delivery</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.total_payable_at_delivery}</td>
            </tr>
          </tbody>
        </table>
<br>
</br>
<div className="text-start text-dark TC-invoice" id="page-break-avoid">
          <h4 className="textColor fw-bold m-2" id="invoice-head">Terms & Conditions :</h4>
          <ul className="list-unstyled">
                        <li>1. Customer will ensure quality and quantity of items at the time of delivery</li>
                        <li>2. For the safety of the items, there is provision of refundable security deposit to be paid by customer in advance</li>
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
<div className="text-start text-dark">
    <h4 className="textColor fw-bold mb-3" id="invoice-head">Check List of Items</h4>
    <table className="table fs-5 text-start border-top border-bottom border-dark">
            <thead className="textColor">
              <tr className="align-baseline">
                <th scope="col">Serial No</th>
                <th scope="col">Particulars</th>
                <th scope="col">Quantity</th>
                <th scope="col">Person at warehouse</th>
                <th scope="col">Customer at delivery</th>
                <th scope="col">Customer at return</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (<></>):(
                data.items.map((element,key) => {
                  counter_other++;
                return (
                  <tr key={key} className="align-middle">
                    <th>{counter_other}</th>
                    <td>{element.item_name}</td>
                    <td>{element.quantity}</td>
                    <td><input type="checkbox" style={{height:"3rem", width:"6rem"}}/></td>
                    <td><input type="checkbox" style={{height:"3rem", width:"6rem"}}/></td>
                    <td><input type="checkbox" style={{height:"3rem", width:"6rem"}}/></td>
                  </tr>
                );
              }))}
          </tbody>
        </table>
</div>
<br></br>

<div className='text-start text-dark'>
    <h4 className="textColor fw-bold mb-3" id="invoice-head">Persons involved in the deal</h4>
    <table className="table fs-5 text-start border-top border-bottom border-dark">
            <thead className="textColor">
              <tr>
                <th scope="col">Person</th>
                <th scope="col">Name</th>
                <th scope="col">Signature</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>Manager</td>
                    <td>Fatima Khatoon</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Delivery person</td>
                    <td>Sushil (1044)</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Person at warehouse</td>
                    <td>Ramakant (1044)</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Customer</td>
                    <td>{data.shipping_address.name}</td>
                    <td></td>
                  </tr>
          </tbody>
        </table>
</div>


<br></br>


<div className="text-start text-dark" id="page-break-avoid">
          <h5 className="textColor fw-bold" id="invoice-head">Note:</h5>
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
        <tfoot className="Erental-footer-image mt-5">
        <ErentalHeaderAndFooter image={"Erental Footer"}/>
      </tfoot>
        </table>
    )}
   <div>
    <button className="btn border-dark bg-danger p-2 my-5" id="print-btn" onClick={handlePrint} style={{color:"black", fontWeight:"bolder"}}><span className="p-3">Download Invoice</span><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="black" className="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg></button> 
    </div>
   </div>
  );
}
