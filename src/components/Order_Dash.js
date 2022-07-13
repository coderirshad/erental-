import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

export default function Order_Dash() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="container " style={{marginLeft:"30%", position:"absolute", top:"80%"}}>
    <ul className="nav">
<li className="nav-item">
  <a className="nav-link active" aria-current="page" href="#">All</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Completed </a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Processing</a>
</li>


<li className="nav-item">
  <a className="nav-link" href="#">Instock</a>
</li>

<li className="nav-item">
  <a className="nav-link" href="#">Instock</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Instock</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Instock</a>
</li>


</ul>

<div className="row justify-content ">
    <div className="col-2">
    <select className="form-select" aria-label="Default select example">
  <option selected>All Dates</option>
  <option value="1">January 2022</option>
  <option value="2">February 2022</option>
  <option value="3">March 2022</option>
</select>

    </div>

    <div className="col-3 ">
    <select className="form-select" aria-label="Default select example">
  <option selected>Select a category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div className="col-2 ">
  <button type="button" className="btn btn-danger">Filter</button>
  </div>
   
  </div>
<br>
</br>


 

<div className="col-4 ">
    <form className="d-flex ">
        <input className="form-control me-2" type="search" placeholder="Bulk Action" aria-label="Search"/>
        <button type="button" className="btn btn-danger">Apply</button>
      </form>
    </div>
<br></br>
<br></br>
<br></br>
    <div className="table-responsive" >
    <table className="table ">
  
  <thead>
    <tr>
      <th scope="col">Order</th>
      <th scope="col">Order Total</th>
      <th scope="col">Earning</th>
      <th scope="col">Status</th>
      <th scope="col">Customer</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  {/* <tbody>
  {
                    product.map(data => (
                     
    <tr>
   
      <td scope="row"><img src="images/sbar-6.png" alt=""/></td>
      <td>{data.name}</td>
      <td>{data.Status}</td>
      <td>{data.SKU}</td>
      <th >{data.Stock}</th>
      <td>{data.price}</td>
      <td>{data.Earning}</td>
      <td>{data.Type}</td>
      <td>{data.view}</td>
    
    </tr>
                    ))}
  </tbody>   */}
</table>
</div>


</div>
  );
}
