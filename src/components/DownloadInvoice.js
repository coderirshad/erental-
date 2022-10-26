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
  const handlePrint = ()=>{
    window.print();
  }
  return (
    <div>
    <div className="invoice-body" id='print'>
      <div className="d-flex justify-content-center bg-light m-0 text-dark row">
        <div className="col invoice-top">ERENTALS HND PVT LTD</div>
        <div className="col invoice-top">GSTN: 27AAGCE8977P1ZJ</div>
        <div className="col invoice-top">CIN: U72900MH2022PTC376733</div>
      </div>
      <div className="d-flex text-white toppest">
        <img className="invoice-logo" src="images/logo192(edited).png" alt=""/>
        <h1 className="invoice-heading">eRentals</h1>
      </div>

      <main className="invoice-container">
        <p className="invoice-date">
          Date: {date.getDate()}-{date.getMonth()}-{date.getFullYear()}{" "}
        </p>
        <hr></hr>
        <div className="invoice-starting">
          <p className="invoice-content invoice-para">
            To,
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
          <p className="invoice-content invoice-para" style={{color:"900"}}>
            As discussed with you and Abdul Ali, we are sharing a quotation for
            your requirement. Please find the quotation of the discussed items.
          </p>
        </div>
        <table className="table mt-5">
          <thead className="thead-dark invoice-table text-dark">
            <tr style={{backgroundColor:"#002060"}}>
              <th className="Table-th" scope="col">Code</th>
              <th className="Table-th" scope="col">PARTICULARS</th>
              <th className="Table-th" scope="col">UNIT RATE/DAY/PC</th>
              <th className="Table-th" scope="col">QUANTITY</th>
              <th className="Table-th" scope="col">DAYS</th>
              <th className="Table-th" scope="col">TOTAL</th>
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
              <td>Transportation and installation</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.delivery_charges}</td>
            </tr>
            <tr className="fw-bold">
              <th scope="row"></th>
              <td>Sub total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.sub_total}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Discount</td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
            </tr>
            <tr className="fw-bold">
              <th scope="row"></th>
              <td>Total Payable before taxes</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="fw-bold">{data.sub_total + 0}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>GST @18%</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.sgst+data.cgst}</td>
            </tr>
            <tr className="fw-bold" style={{backgroundColor:"#002060"}}>
              <th scope="row"></th>
              <td className="Table-th">Total payable with tax</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="Table-th">{data.total_payable}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Advance payment @25%</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{(25*data.total_payable)/100}</td>
            </tr>
          </tbody>
        </table>
        <h4 className="invoice-h2">Terms & Conditions:</h4>
        <ol className="invoice-ul">
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
            <ol className="invoice-ul fs-5">
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
            </ol>
          </li>
        </ol>
        <br></br>
        <br></br>

        <div className="invoice-starting">
        <h4 className="invoice-h2">Note:</h4>
          <p className="text-dark fs-5">
            Bank Details:
            <br></br> Bank Name: Axis Bank
            <br></br> Account Name: ERENTALS HND PVT LTD
            <br></br> Type of Account: CURRENT 
            <br></br> Branch Name: Hiranandani gardens, Powai, Mumbai, 400076
            <br></br> IFSC Code: UTIB0000246
            <br></br> Account No. 922020013377806
          </p>
          <br></br>
          <br></br>
        </div>
            
        <p className="invoice-last text-dark">
          Thanks and regards, <br></br> eRentals
        </p>
      </main>

      <div className="d-flex justify-content-around m-0 text-dark col invoice-lowest">
        <div className=" invoice-top text-dark">info@erentals.in</div>
        <div className=" invoice-top text-dark">www.erentals.in</div>
        <div className=" invoice-top text-dark">+91 8652348165</div>
      </div>
    </div>

    <div>
    <button className="btn border-dark bg-danger p-2 my-5" id="print-btn" onClick={handlePrint} style={{color:"black", fontWeight:"bolder"}}><span className="p-3">Download Invoice</span><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="black" className="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg></button> 
    </div>
    </div>
  );
}
