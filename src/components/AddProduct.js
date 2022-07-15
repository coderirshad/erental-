import React, {useState,useEffect} from 'react';
import GetAuthorization from './GetAuthorization';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';
export default function AddProduct( ) {


  const[name,setname] = useState("");
  const[Earning,setearning] = useState("");
  const[price,setprice] = useState("");
  const[discounted_price,setdiscounted] = useState("");
  const[stock,setstock] = useState("");
  
  const[Type,setType] = useState("");
  
  const[sku,setsku] = useState("");
  
  const[view,setview] = useState("");
  
  const[Status, setstatus] = useState("");
  const[image, setimage] =useState("");
  const[tag_list, setTaglist] =useState([]);
 

  const[tag, setTag] =useState("");
  const [category, setcategory] = useState([]);

  const [subcategory, setsubcategory] = useState("");

  const fetchdata = async() =>{
      const response = await fetch(`http://${process.env.REACT_APP_URL}/category`);
      setcategory(await response.json());
        
  }
  useEffect(() => {
      fetchdata();
  }, []);
  

  const fetchtag = async() =>{
    const response = await fetch(`http://${process.env.REACT_APP_URL}/tag`);
    setTaglist(await response.json());
      
}
useEffect(() => {
    fetchtag();
}, []);
  function savepro(){
  
    console.warn({name,price,discounted_price,stock,sku,Status,view, image,tag,subcategory});
    let data= {name,price,discounted_price,stock,view,tag, image,subcategory}
    fetch(`http://${process.env.REACT_APP_URL}/admin/product`,{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': GetAuthorization()
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
              id="discounted_price"
              label="Discounted Price"
              value={discounted_price}
              onChange={(e)=>{setdiscounted(e.target.value)}}
              defaultValue="Earning"
            />
          </div>
          <div>
       
              <TextField
              required
              id="stock"
              label="Stock"
              value={stock}
              onChange={(e)=>{setstock(e.target.value)}}
              defaultValue="Enter Stock"
            />
          <TextField
                    required
                    id="sku"
                    label="SKU"
                    value={sku}
                    onChange={(e)=>{setsku(e.target.value)}}
                    defaultValue="SKU"
                  />
            <FormControl sx={{ m: 1, minWidth: 120 }} value={subcategory} onChange={(e)=>{setsubcategory(e.target.value)}} >
                      <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
                      <Select native defaultValue="" id="grouped-native-select" label="Category"  >
                        <option aria-label="None" value="" />
              {category.map( eachcategory => (
                        <optgroup label={eachcategory.name}>

                          {eachcategory.subcategory.map( (c) => (
                          <option value={c.name}  > {c.name}</option>
                          ))}
                        </optgroup>
                        ))}
                      </Select>
                  </FormControl>
           </div>
           
            <div>
                  <TextField
                    required
                    id="view"
                    label="View"
                    value={view} onChange={(e)=>{setview(e.target.value)}}
                    defaultValue="View"
                  />
                  

 <FormControl sx={{ m: 1, minWidth: 120 }}  >
  <InputLabel id="demo-simple-select-label">Tag</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={tag}
    label="Tag"
    onChange={(e)=>{setTag(e.target.value)}}
  
  >
{tag_list.map( t => (
    <MenuItem value={t.id}>{t.name}</MenuItem>
))}
  </Select>
</FormControl> 


                    
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
