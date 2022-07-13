import React ,{useEffect,useState}from 'react'

import { Link } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddProduct from './AddProduct';

export default function Product() {




  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] =  useState([]);
  const fetchData =()=>{
      fetch(`http://${process.env.REACT_APP_URL}/product`)
      .then((response)=>{
          return response.json();
      }).then((data)=>{
           console.log(data);
       
        
          setProduct(data)

        
      })
  }
  useEffect(()=>{
      fetchData();
  },[])
  return (
    <div className="container"  style={{marginLeft:"30%", position:"absolute", top:"80%"}} >
      <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">All</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Online</a>
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

    <div className="col-4 ">
    <form className="d-flex ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className="btn btn-danger">Search</button>
      </form>
    </div>
  </div>
<br>
</br>


  <div className="col-3">
    <div className="d-flex">
    <select className="form-select me-2 " aria-label="Default select example">
  <option selected>Product Type</option>
  <option value="1">January 2022</option>
  <option value="2">February 2022</option>
  <option value="3">March 2022</option>
</select>

<button type="button" className="btn btn-danger">Filter</button>
</div>
    </div>
    <br>
</br>
    <div className="col-3 ">
    <div className="d-flex">
    <select className="form-select me-2" aria-label="Default select example">
  <option selected>Bulk Action</option>
  <option value="1">January 2022</option>
  <option value="2">February 2022</option>
  <option value="3">March 2022</option>
</select>
<button type="button" className="btn btn-danger">Apply</button>


</div>


    </div>
    <br></br>
   <div className='col-4'>
   <div className="d-flex">
   <Link  to="/addproduct"><button type="button" className="btn btn-danger">Add Product</button></Link>
   </div>
   </div>
<br></br>
<div className="table-responsive" >
    <table className="table ">
  
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">SKU</th>
      <th scope="col">Stock</th>
      <th scope="col">Price</th>
      <th scope="col">Earning</th>
      <th scope="col">Type</th>
      <th scope="col">View</th>
      

    </tr>
  </thead>
  <tbody>
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
  </tbody>  
</table>
</div>




</div>

  )
}
