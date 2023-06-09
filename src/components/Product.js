import React ,{useEffect,useState,useMemo}from 'react'

import { Link } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddProduct from './AddProduct';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import GetAuthorization from './GetAuthorization';
export default function Product() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);
  const [product, setProduct] =  useState([]);

  const handleclick =(e) =>{
    e.preventDefault();
  }
  const fetchData =()=>{
    setLoading(true);
      fetch(`http://${process.env.REACT_APP_URL}/vendor/product`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': GetAuthorization()
          }
    })
      .then((response)=>{
          return response.json();
      }).then((data)=>{
        console.clear();
        console.log(data) 
        setProduct(data)       
        setLoading(false);

    })
  }

  const filteredProducts = useMemo(() => {
    const searchVal = search.toLowerCase();
    return product?.filter(item => {
      const productName = item?.sku?.toLowerCase();
      return productName?.includes(searchVal);
    })
  }, [search])

  const deleteProduct = async (product_id)=>{
    await fetch(`http://${process.env.REACT_APP_URL}/product/${product_id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }
        });
        fetchData();
  }
  const handleDelete = (id) =>{
    deleteProduct(id);
  }
  useEffect(()=>{
      fetchData();
  },[])
  return (
    <div className="container-fluid w-75"  style={{marginLeft:"28%", position:"absolute", top:"18%"}} >
      <ul className="nav mb-3">
  <li className="nav-item">
    <a className="nav-link active h3" aria-current="page" href="#">All</a>
  </li>
  <li className="nav-item">
    <a className="nav-link h3" href="#">Online</a>
  </li>
  <li className="nav-item">
    <a className="nav-link h3" href="#">Instock</a>
  </li>
 
</ul>
  <div className="row justify-content mt-2">
    <div className="col-2">
    <select className="form-select form-select-lg" aria-label="Default select example">
  <option selected>All Dates</option>
  <option value="1">January 2022</option>
  <option value="2">February 2022</option>
  <option value="3">March 2022</option>
</select>

    </div>

    <div className="col-3">
    <select className="form-select form-select-lg" aria-label="Default select example">
  <option selected>Select a category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>

    <div className="col-4 ">
    <form className="d-flex " onSubmit={handleclick}>
        <input onChange={(e) => setSearch(e.target.value)} value={search} className="form-control form-select-lg me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className="btn btn-danger">Search</button>
      </form>
    </div>
  </div>
<br>
</br>

<div className="fliterDown">
  <div className="col-3">
    <div className="d-flex">
    <select className="form-select me-2 form-select-lg" aria-label="Default select example">
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
    <select className="form-select me-2 form-select-lg" aria-label="Default select example">
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
   </div>
<br></br>
<div className="table-responsive" >
    <table className="table">
  
  <thead>
    <tr className='h4'>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Stock</th>
      <th scope="col">EventManagerPrice</th>
      <th scope="col">Price</th>
      <th scope="col">DiscountedPrice</th>
      <th scope="col">View</th>
      <th scope="col">Delete</th>     

    </tr>
  </thead>
  <tbody>
  { !search && !loading && product.map(data => <Product data={data} handleDelete={handleDelete} />) }
  { search && !loading && filteredProducts.map(data => <Product data={data} handleDelete={handleDelete} />) }
  { loading && <h1>Loading</h1>}
  </tbody>  
</table>
</div>





</div>

  )

function Product({data, handleDelete}){
  return (
    <tr className='h5'>
      <td scope="row"><Link to={`/addproduct/${data.product_id}`}><img style={{widht:"80px",height:"80px"}} src={data.images[0]} alt=""/></Link></td>
      <td><Link to={`/addproduct/${data.product_id}`}>{data.product_name} ({(data.sku)})</Link></td>
      <th >{data.stock}</th>
      <td>{data.event_manager_price}</td>
      <td>{data.price}</td>
      <td>{data.discounted_price}</td>
      <td>{data.view}</td>
      <td onClick={()=>handleDelete(data.product_id)}><DeleteForeverTwoToneIcon style={{color:"red",fontSize:"25px"}}></DeleteForeverTwoToneIcon></td>
    </tr>
  )
}}
