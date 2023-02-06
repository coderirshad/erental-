import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import GetAuthorization from './GetAuthorization';
import ErentalHeaderAndFooter from "./ErentalHeaderAndFooter";

export default function DownloadInvoice(){
  const location = useLocation();
  const [InvoiceDetails, setInvoiceDetails] = useState([]);
  const [quoteproduct, setquoteproduct] = useState([]);
  const [quotesummary, setquotesummary] = useState({});

  const fetchData = () =>{
    fetch(`http://${process.env.REACT_APP_URL}/quote`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
          }          
    })
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        setquoteproduct(data.items);
        setquotesummary(data);       
    })

}
  
  const fetchdata = async() =>{
    const response = await fetch(`http://${process.env.REACT_APP_URL}/cart?type=quote`,{
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
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

  let date = new Date();
  const handlePrint = ()=>{
    window.print();                                                                                                                                                                                                                                                                                                                                                                                                                                           
  }
  return (
    <div className="" id="Quotation-body">
    <table className="invoice-body w-100" id='print'>
        <thead>
        <ErentalHeaderAndFooter image={"Erental Quotation Header"}/>
        </thead>
      <main className="invoice-container container">
        <p className="invoice-date">
          Date: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}{" "}
        </p>
        <div className="text-start">
          <p className="invoice-content invoice-para text-start">
           <span style={{fontWeight:600}}>To,</span>
            {quotesummary.length === 0? (<></>):(
            <>
            <br></br> {quotesummary.name}, <br></br> {quotesummary.org_name}
            <br></br> GSTN-{quotesummary.gst}
            <br></br> Mobile-{quotesummary.mobile}
            <br></br> Email-{quotesummary.email}
            </>)}
          </p>
        </div>
        <div className="">
          <p className="invoice-content invoice-para text-start" style={{color:"900"}}>
          As per your request to eRentals, We have successfully generated the quotation of the required items,  
          please find the quotation and detail below.The delivery date is on {quotesummary.date} and delivery location is {quotesummary.delivery_location}.
          </p>
        </div>
        <table className="table mt-3 text-start">
          <thead className="thead-dark invoice-table text-dark">
            <tr className="align-baseline" style={{backgroundColor:"#002060"}}>
              <th className="Table-th" scope="col">CODE</th>
              <th className="Table-th" scope="col">PARTICULARS</th>
              <th className="Table-th" scope="col">UNIT RATE/DAY/PC</th>
              <th className="Table-th" scope="col">QUANTITY</th>
              <th className="Table-th" scope="col">DAYS</th>
              <th className="Table-th" scope="col">TOTAL(INR)</th>
            </tr>
          </thead>
          <tbody>
            {quoteproduct.length === 0 ? (<></>):( quoteproduct.map((element,key) => {
              return (
                <tr key={key}>
                  <th>{element.item_code}</th>
                  <td>{element.item_name}{element.is_service?<span> (s)</span>:<span> (ws)</span>}</td>
                  <td>{element.unit_price+0}</td>                                     
                  <td>{element.quantity}</td>
                  <td>{element.days}</td>
                  <td>{element.total}</td>
                </tr>
              );
            }))}

            {/* uncomment after the resolving the api issue */}

            <tr className="fw-bold">
              <th scope="row"></th>
              <td>Sub Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.sub_total}</td>
            </tr>
            
            <tr>
              <th scope="row"></th>
              <td>Transportation and installation</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{data.transportation_charge}</td>
            </tr>
            {/*<tr>
              <th scope="row"></th>
              <td>Discount</td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
            </tr>*/}
            <tr className="fw-bold">
              <th scope="row"></th>
              <td>Total Payable Before Taxes</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="fw-bold">{data.sub_total + data.transportation_charge}</td>
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
              <td className="Table-th">Total Payable With Tax</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="Table-th">{data.total}</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Advance Payment @25%</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{0.25*data.total}</td>
            </tr>
          </tbody>
        </table>
        <div><p align="left">{quotesummary.message}</p></div>
        <h4 className="invoice-h2">Terms & Conditions:</h4>
        <ol className="invoice-ul">
          <li className="invoice-li">
          25% of the bill amount needs to be paid for order confirmation. 75% payment to be made at the time 
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
              <li className="invoice-li TC-points">
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

        <div className="text-start">
        <h4 className="invoice-h2">Note:</h4>
          <p className="text-dark" style={{fontsize:"14px"}}>
            Bank Details:
            <br></br> Bank Name: IndusInd Bank
            <br></br> Account Name: ERENTALS HND PVT LTD
            <br></br> Type of Account: CURRENT 
            <br></br> Branch Name: Saki Naka
            <br></br> IFSC Code: INDB0001075
            <br></br> Account No. 259867348165
          </p>
          <br></br>
          <br></br>
        </div>
            
        <p className="text-start fw-bold fs-large text-dark" style={{fontsize:"14px"}}>
          Thanks & Regards, <br></br> eRentals
        </p>
      </main>
      <tfoot className="Erental-footer-image mt-5">
      <ErentalHeaderAndFooter image={"Erental Footer"}/>
      </tfoot>
    </table>

    <div>
    <button className="btn border-dark bg-danger p-2 my-5" id="print-btn" onClick={handlePrint} style={{color:"black", fontWeight:"bolder"}}><span className="p-3">Download Quotation</span><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="black" className="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg></button> 
    </div>
    </div>
  );
}
