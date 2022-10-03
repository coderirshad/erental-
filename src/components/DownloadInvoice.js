import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import GetAuthorization from './GetAuthorization';



export default function DownloadInvoice(){

  const location = useLocation();
  const [InvoiceDetails, setInvoiceDetails] = useState([]);

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
  return (
    <>
    <div className="invoice-body" >
      <div className="d-flex justify-content-center bg-white m-0 text-dark row invoice-toppest">
        <div className="col-3 invoice-top">ERENTALS HND PVT LTD</div>
        <div className="col-3 invoice-top">PAN: AAGCE8977P</div>
        <div className="col-3 invoice-top">CIN: U72900MH2022PTC376733</div>
      </div>
      <div className="d-flex text-white toppest">
        <img className="invoice-logo" src="images/logo192(edited).png" alt=""/>
        <h1 className="invoice-heading">eRenTals</h1>
      </div>

      <main className="invoice-container">
        <p className="invoice-date">
          Date: {date.getDate()}-{date.getMonth()}-{date.getFullYear()}{" "}
        </p>
        <hr></hr>
        <div className="invoice-starting">
          <p className="invoice-content invoice-para">
            To, <br></br>
            {data.length === 0? (<></>):(
            <>
            <br></br> Decibel Plus Event Solutions, <br></br> GSTN-{data.gstn}{" "}
            <br></br> {data.address.address1}, {data.address.city},{" "}
            {data.address.district}, {data.address.state} - {data.address.pin_code}
            </>)}
          </p>
          <br></br>
          <br></br>
        </div>
        <div className="invoice-center">
          <p className="invoice-content invoice-para">
            As discussed with you and Abdul Ali, we are sharing a quotation for
            your requirement. Please find the quotation of the discussed items.
          </p>
        </div>
        <table className="table mt-5">
          <thead className="thead-dark invoice-table text-dark">
            <tr>
              <th scope="col">Code</th>
              <th scope="col">PARTICULARS</th>
              <th scope="col">UNIT RATE/DAY/PC</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">DAYS</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (<></>):( data.items.map((element,key) => {
              return (
                <tr key={key} >
                  <th>{element.item_code}</th>
                  <td>{element.item_name}</td>
                  <td>{element.unit_price}</td>
                  <td>{element.quantity}</td>
                  <td>{element.days}</td>
                  <td>{element.total}</td>
                </tr>
              );
            }))}

            {/* uncomment after the resolving the api issue */}
            
            <tr>
              <th scope="row"></th>
              <td>TRANSPORTATION (PICKUP & DELIVERY)</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.delivery_charges}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>SUB TOTAL</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.sub_total}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>GST @18%</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.gst}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>TOTAL PAYABLE</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.total_payable}</td>
            </tr>
          </tbody>
        </table>
        <h2 className="invoice-h2">Terms & Conditions:</h2>
        <ul className="invoice-ul">
          <li className="invoice-li">
          50% of the bill amount needs to be paid for order confirmation. 50% payment to be made at the time 
          of delivery of the items at your place.
          </li>
          <li className="invoice-li">
          If payment is to be made through cheque, 10% of the bill amount needs to be paid as advance for booking 
          confirmation. The cheque is to be provided at the time of delivery of items.
          </li>
          <li className="invoice-li">
          Customer will ensure quality and quantity of items at the time of delivery 
          </li>
          <li className="invoice-li">
          For the safety of the items, there is provision of refundable security deposit to be paid by customer in 
          advance.
          </li>
          <li className="invoice-li">
          The refund amount will be credited back within 24-48 hours of return of items in sound conditions.
          </li>
          <li className="invoice-li">
          If there is any damage, proportionate amount will be charged to the customers
          </li>
          <li className="invoice-li">
          If a confirmed order is cancelled due to some reasons the paid amount will be refunded in the following ways -
            <ul className="invoice-ul">
              <li className="invoice-li">
                If cancellation is 24 hours prior to the event, 100% refund will
                be done.
              </li>
              <li className="invoice-li">
                If cancellation is 24-12 hours prior to the event, 50% refund
                will be done.
              </li>
              <li className="invoice-li">
                If cancellation is less than 12 hours prior to the event, 10%
                refund will be done.
              </li>
            </ul>
          </li>
        </ul>
        <br></br>
        <br></br>
        <p className="invoice-last">
          Thanks and regards, <br></br> eRentals
        </p>
      </main>

      <div className="d-flex justify-content-center bg-white m-0 text-dark row invoice-toppest">
        <div className="col-3 invoice-top">info@erentals.in</div>
        <div className="col-3 invoice-top">www.erentals.in</div>
        <div className="col-3 invoice-top">+91 8652348165</div>
      </div>
    </div>  
    </>
  );
}
