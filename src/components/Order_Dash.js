import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

export default function Order_Dash() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="container ">
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
  <form className="d-flex ">
      <input className="form-control me-2" type="integer" placeholder="Date" />

    </form>

  </div>

  <div className="col-2 ">

  <Button className="nextButton" onClick={handleShow}>
       Filter By Registred customer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body><form className="d-flex ">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button type="button" className="btn btn-danger">Search</button>
    </form>
            <br></br>
            <br></br>

 <p>Press enter one or more character</p>
        </Modal.Body>
       
      
      </Modal>

     
  </div>

  <div className="col-4 ">
  <button type="button" className="btn btn-danger">Filter</button>
  </div>
  <div className="col-4 ">
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-danger">Export All</button>

  </div>
  <div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-danger">Export Filter</button>

  </div>
</div>
</div>
</div>


</div>
  );
}
