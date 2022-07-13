import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddProduct( ) {
 

  

 

  // const params = useParams();

  const[name,setname] = useState("");
  const[Earning,setearning] = useState("");
  const[price,setprice] = useState("");
  
  const[Stock,setstock] = useState("");
  
  const[Type,setType] = useState("");
  
  const[SKU,setsku] = useState("");
  
  const[view,setview] = useState("");
  
  const[Status, setstatus] = useState("");
  const[image, setimage] =useState("");
  const[tag, setTag] =useState("");
 

  
  const [category, setcategory] = useState([]);



  const fetchdata = async() =>{
      const response = await fetch('http://140.238.230.250:4545/category');
      setcategory(await response.json());
        
  }
  useEffect(() => {
      fetchdata();
  }, []);
  


  function savepro(){
  
    console.warn({name,price,Earning,Stock,SKU,Type,Status,view, image,tag,category});
    let data= {name,price,Earning,Stock,SKU,Type,Status,view, image,tag,category}
    fetch(`http://${process.env.REACT_APP_URL}/product`,{
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





    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
     <div className="container " style={{marginLeft:"30%", position:"absolute", top:"80%"}} >
      <div class="row">
        <div class="col-8">
         <div>
            <TextField
              required
              id="product"
              label="Product Name"
              value={name} 
              onChange={(e)=>{setname(e.target.value)}}
              defaultValue="Name"
            />

            <TextField
                required
                id="price"
                label="Price"
                value={price}
                 onChange={(e)=>{setprice(e.target.value)}}
                defaultValue="Enter Price"
            />
            <TextField
              required
              id="earning"
              label="Earning"
              value={Earning}
              onChange={(e)=>{setearning(e.target.value)}}
              defaultValue="Earning"
            />
          </div>
          <div>
            <TextField
              required
              id="status"
              label="Status"
              value={Status}
              onChange={(e)=>{setstatus(e.target.value)}}
              defaultValue="status"
            />
              <TextField
              required
              id="stock"
              label="Stock"
              value={Stock}
              onChange={(e)=>{setstock(e.target.value)}}
              defaultValue="Enter Stock"
            />

<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Category"  >
          <option aria-label="None" value="" />
{category.map( eachcategory => (
          <optgroup label={eachcategory.name}>

            {eachcategory.map( (c) => (
            <option value={category} onChange={(e)=>{setcategory(e.target.value)}}> {c.name}</option>
            ))}
          </optgroup>
          ))}
        </Select>
      </FormControl>
           </div>
            <div>
                  <TextField
                    required
                    id="sku"
                    label="SKU"
                    value={SKU}
                    onChange={(e)=>{setsku(e.target.value)}}
                    defaultValue="SKU"
                  />
                    <TextField
                    required
                    id="status"
                    label="Status"
                    value={Status}
                    onChange={(e)=>{setstatus(e.target.value)}}
                    defaultValue="Status"
                  />
                  <TextField
                    required
                    id="type"
                    label="Type"
                    value={Type} onChange={(e)=>{setType(e.target.value)}}
                    defaultValue="Type"
                  />
                
            </div>
            <div>
                  <TextField
                    required
                    id="view"
                    label="View"
                    value={view} onChange={(e)=>{setview(e.target.value)}}
                    defaultValue="View"
                  />
                    <TextField
                    required
                    id="tag"
                    label="Tag"
                    defaultValue="Tag"
                    value={tag} onChange={(e)=>{setTag(e.target.value)}}
                  />
                
                    
            </div>
          <br></br>
            <div className="row justify-content ">
            <div className="col-6">
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

                        <input type="file" value={image} onChange={(e)=>{setimage(e.target.value)}}id="image" class="form-control" />
                        </Modal.Body>
                      </Modal>
                      </div>
                      <div className="col-3">
            <button type="button"  onClick={savepro} className="btn btn-danger" >Save Product</button>
            </div>
            </div>
            
   </div>
    </div>
  
    </div>
  </Box>

  );
}
