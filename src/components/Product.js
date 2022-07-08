import React ,{useEffect,useState}from 'react'

import { Link } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Product() {

  const params = useParams();

const[name,setname] = useState("");
const[Earning,setearning] = useState("");
const[price,setprice] = useState("");

const[Stock,setstock] = useState("");

const[Type,setType] = useState("");

const[SKU,setsku] = useState("");

const[view,setview] = useState("");

const[Status, setstatus] = useState("");




function savepro(){

  console.warn({name,price,Earning,Stock,SKU,Type,Status,view});
  let data= {name,price,Earning,Stock,SKU,Type,Status,view}
  fetch("http://140.238.230.250:4545/product",{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)

    
  }).then((result)=>{
    console.warn("result",result)
  })
}
  

// const fetch = ()=>{
//   fetch(`http://140.238.230.250:4545/product`)
//   .then((response)=>{ 
//       return response.json();
//   })
//   .then((data)=>{   

//       setname(data);
//       setearning(data);
//    setstock(data);
//    setType(data);
//       setprice(data);
//       setsku(data);
//       setstatus(data);
//       setview(data);
     
//   }
//   )
// }
// useEffect(() => {
//   fetchData()
// }, [])


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] =  useState([]);
  const fetchData =()=>{
      fetch("http://140.238.230.250:4545/product")
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
    <div className="container"  >
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
   <Link  to=" /admin/addproduct"><button type="button" className="btn btn-danger">Add Product</button></Link>
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
                         <input type="text"value={name} onChange={(e)=>{setname(e.target.value)}} id="product" class="form-control" placeholder='Product Name'/>
        
                    </div>
                </div>

             <br></br>

             <div class="row align-items-center">
                <div class="col-3">
                     <label for="price" class="form-label">Price</label>
                    <input type="text"value={price} onChange={(e)=>{setprice(e.target.value)}} class="form-control" id="price" placeholder='0.0'/>
                </div>
                 <div class="col-3">
                    <label for="disprice" class="form-label">Earning</label>
                    <input type="text" value={Earning} onChange={(e)=>{setearning(e.target.value)}} class="form-control" id="disprice" placeholder='0.0'/>
                 </div>
                 <div class="col-3">
                    <label for="disprice" class="form-label">Staus</label>
                    <input type="text" value={Status} onChange={(e)=>{setstatus(e.target.value)}} class="form-control" id="disprice" placeholder='0.0'/>
                 </div>
                 <div class="col-3">
                    <label for="disprice" class="form-label">SKU</label>
                    <input type="text" value={SKU} onChange={(e)=>{setsku(e.target.value)}} class="form-control" id="disprice" placeholder='0.0'/>
                 </div>
                 <div class="col-3">
                    <label for="disprice" class="form-label">Stock</label>
                    <input type="text" value={Stock} onChange={(e)=>{setstock(e.target.value)}} class="form-control" id="disprice" placeholder='0.0'/>
                 </div>
                 <div class="col-3">
                    <label for="disprice" class="form-label">Type</label>
                    <input type="text" value={Type} onChange={(e)=>{setType(e.target.value)}} class="form-control" id="disprice" placeholder='0.0'/>
                 </div>
                 <div class="col-3">
                    <label for="disprice" class="form-label">View</label>
                    <input type="text" value={view} onChange={(e)=>{setview(e.target.value)}} class="form-control" id="disprice" placeholder='0.0'/>
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
  
    {/* <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
 
</div>  */}

<button type="button"  onClick={savepro} className="btn btn-danger">save</button>
        
            </div>
        </div>
</div>

  )
}
