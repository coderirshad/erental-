import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

export default function AddProduct() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
        <div className="container " style={{marginLeft:"30%", position:"absolute", top:"80%"}} >
       <div class="row">
       <div class="col-2">
       <Button className="nextButton" onClick={handleShow}>
       Upload Image
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Featured Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>Drop File to upload!
            <br></br>
            <br></br>

        <button>Select Files</button>
        </Modal.Body>
       
      
      </Modal>
    </div>
    <div class="col-8">
    <div class="row align-items-center">
                    <div class="col-6">
                         <input type="text" id="product" class="form-control" placeholder='Product Name'/>
        
                    </div>
                </div>

             <br></br>

             <div class="row align-items-center">
                <div class="col-3">
                     <label for="price" class="form-label">Price</label>
                    <input type="text" class="form-control" id="price" placeholder='0.0'/>
                </div>
                 <div class="col-3">
                    <label for="disprice" class="form-label">Discounted Price</label>
                    <input type="text" class="form-control" id="disprice" placeholder='0.0'/>
                 </div>
            </div>

        <br></br>

            <div class="row align-items-center">
                <div class="col-6">
                    <input type="text" id="product" class="form-control" placeholder='Short Discription of the Product'/>
        
                </div>
            </div>

        <br></br>

            <div className="row justify-content ">
                <div className="col-6">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select a category</option>
                        <option value="1">January 2022</option>
                        <option value="2">February 2022</option>
                        <option value="3">March 2022</option>
                    </select>

                </div>
            </div>

                <br></br>

            <div class="row align-items-center">
                <div class="col-6">
                    <label for="tag" class="form-label">Tags</label>
                    <input type="text" id="tag" class="form-control" placeholder='select tag'/>
                    
                 </div>
            </div>
    
    </div>
  
    <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
 
</div> 
        
            </div>
        </div>
  );
}
