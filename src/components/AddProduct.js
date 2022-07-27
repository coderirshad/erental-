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

import MultipleSelectChip from './MultipleSelecter';
import { useNavigate, useParams } from 'react-router-dom';
import NestedMultipleSelectChip from './NestedMultipleSelecter';
export default function AddProduct( ) {
  const params = useParams();
  const id=params.id;
  const navigate=useNavigate();
  const [data,setdata]=useState({});
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
  const [tag, setTag] = React.useState([]);
  const[tagId1, setTagId1] =useState("");
  const [category, setcategory] = useState([]);
  const [subcategory,setsubcategory] = useState([]);
  const [is_hot_deal,setIsHotDeal] = useState(true);
  const [is_top_sold,setIsTopSold] = useState(true);
  const [is_new,setIsNew] = useState(true);
  const [is_enable,setIsEnable] = useState(true);
  const [is_best_deal,setIsBestDeal] = useState(true);
  const [is_featured,setIsFeatured] = useState(true);
  const fetchdata = async() =>{
      const response = await fetch(`http://${process.env.REACT_APP_URL}/category`);
      setcategory(await response.json());                      
  }
  const updateData = async ( ) =>{
    await fetch(`http://${process.env.REACT_APP_URL}/product/${params.id}`)
    .then((response)=>{ 
        return response.json();
    })
    .then((data)=>{       
      setname(data.name);
      setprice(data.price);
      setdiscounted(data.discounted_price);
      setstock(data.stock);
      setsku(data.sku);
      setview(data.view);
      // setstatus(data.status);
      setimage(data.images); 
      setTag(data.tag);
      setsubcategory(data.category);
    }
    )
     
  }
  const fetchtag = async() =>{
    const response = await fetch(`http://${process.env.REACT_APP_URL}/tag`);
    setTaglist(await response.json());  
 }
  useEffect(() =>{
      updateData();
      fetchdata();
      fetchtag();
  }, []);

  const saveProduct = async () =>{
    var images=[];
    images.push(image);
    var id=params.id;  
    let data= {id,name,price,discounted_price,stock,view,tag,images,subcategory,is_hot_deal,is_new,is_enable,is_best_deal,is_featured,is_top_sold}
    await fetch(`http://${process.env.REACT_APP_URL}/admin/product`,{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': GetAuthorization()
      },
      body:JSON.stringify(data)      
    }).then((result)=>{
      
    })
    navigate('/admin/Product')
  }
  const addProduct = () =>{
          saveProduct()
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
     <div className="container " style={{marginLeft:"30%", position:"absolute", top:"25%"}} >
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
              id="image"
              label="Image link"
              value={image}
              onChange={(e)=>{setimage(e.target.value)}}
              defaultValue="Enter image link"
            />
          <TextField
                    required
                    id="sku"
                    label="SKU"
                    value={sku}
                    onChange={(e)=>{setsku(e.target.value)}}
                    defaultValue="SKU"
                  />
            {/* <FormControl sx={{ m: 1, minWidth: 120 }} value={subcategory1.id} onChange={(e)=>{setsubcategory1(e.target.value)}} >
                      <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
                      <Select native defaultValue="" id="grouped-native-select" label="Category"  >
                        <option aria-label="None" value="" />
              {category.map( eachcategory => (
                        <optgroup label={eachcategory.name}>

                          {eachcategory.subcategory.map( (c) => (
                          <option value={c.id}  > {c.name}</option>
                          ))}
                        </optgroup>
                        ))}
                      </Select>
                  </FormControl> */}
           </div>
           
            <div>
                  <TextField
                    required
                    id="view"
                    label="View"
                    value={view} onChange={(e)=>{setview(e.target.value)}}
                    defaultValue="View"
                  />
                  
                
 <NestedMultipleSelectChip boxName={"category"} names={category} personName={subcategory} setPersonName={setsubcategory}></NestedMultipleSelectChip>
 <MultipleSelectChip boxName={"tag"} names={tag_list} personName={tag} setPersonName={setTag}></MultipleSelectChip>
 {/* <FormControl sx={{ m: 1, minWidth: 120 }}  >
  <InputLabel id="demo-simple-select-label">TagId</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={tagId1}
    label="TagId"
    onChange={(e)=>{setTagId1(e.target.value)}}
  >
{tag_list.map( t => (
    <MenuItem value={t.id}>{t.name}</MenuItem>
))}
  </Select>
</FormControl>  */}


                    
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

                        {/* <input type="file" value={image} onChange={(e)=>{setimage(e.target.value)}}id="image" class="form-control" /> */}
                        </Modal.Body>
                      </Modal>
                      </div>
                      <div className="col-3">
            <button type="button"  onClick={()=>addProduct()} className="btn btn-danger" >Save Product</button>
            </div>
            </div>
            
   </div>
    </div>
  
    </div>
  </Box>

  );
}
