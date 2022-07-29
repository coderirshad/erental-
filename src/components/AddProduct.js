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
  const navigate=useNavigate();
  const[name,setname] = useState("");
  const[eventManagersPrice,seteventManagersPrice] = useState("");
  const[price,setprice] = useState("");
  const[discounted_price,setdiscounted] = useState("");
  const[stock,setstock] = useState("");
  const[sku,setsku] = useState("");
  const[view,setview] = useState("");
  const[image, setimage] =useState("");
  const[tag_list, setTaglist] =useState([]);
  const[suggestion_list,setSuggestionlist] =useState([]);
  const[suggestion,setSuggestion] =useState([]);
  const [tag, setTag] = React.useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory,setsubcategory] = useState([]);
  const [is_hot_deal,setIsHotDeal] = useState(false);
  const [is_top_sold,setIsTopSold] = useState(false);
  const [is_new,setIsNew] = useState(false);
  const [is_enable,setIsEnable] = useState(false);
  const [is_best_deal,setIsBestDeal] = useState(false);
  const [is_featured,setIsFeatured] = useState(false);
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
      setimage(data.images[0]); 
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
                          id="eventManagersPrice"
                          label="eventManagersPrice"
                          value={eventManagersPrice}
                          onChange={(e)=>{seteventManagersPrice(e.target.value)}}
                          defaultValue="Enter eventManagersPrice"
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
                    </div>
                    
                    <div>
                          <TextField
                            required
                            id="view"
                            label="View"
                            value={view} onChange={(e)=>{setview(e.target.value)}}
                            defaultValue="View"
                          />
                          
                        <div style={{display:"flex"}}>
                          <NestedMultipleSelectChip boxName={"category"} names={category} personName={subcategory} setPersonName={setsubcategory}></NestedMultipleSelectChip>
                          <MultipleSelectChip boxName={"tag"} names={tag_list} personName={tag} setPersonName={setTag}></MultipleSelectChip>
                          <MultipleSelectChip boxName={"suggestion"} names={suggestion_list} personName={suggestion} setPersonName={setSuggestion}></MultipleSelectChip>
                        </div>
                         

                            
                    </div>
                    <div class="col-md-12">
                            <ul class="list-unstyled" style={{display:"flex",alignItem:"center"}}>
                                <li style={{marginRight:"15px"}}><input onChange={(e)=>{setIsHotDeal(is_hot_deal?false:true)}}  type="checkbox" id="is_hot_deal" name="is_hot_deal"/><label for="is_hot_deal">is hot deal</label></li>
                                <li style={{marginRight:"15px"}}><input onChange={(e)=>{setIsTopSold(is_top_sold?false:true)}} type="checkbox" id="is_top_sold" name="is_top_sold"/><label for="is_top_sold">is top sold</label></li>
                                <li style={{marginRight:"15px"}}><input onChange={(e)=>{setIsNew(is_new?false:true)}} type="checkbox" id="is_new" name="is_new"/><label for="is_new">is new</label></li>
                                <li style={{marginRight:"15px"}}><input onChange={(e)=>{setIsEnable(is_enable?false:true)}} type="checkbox" id="is_enable" name="is_enable"/><label for="is_enable">is enable</label></li>
                                <li style={{marginRight:"15px"}}><input onChange={(e)=>{setIsBestDeal(is_best_deal?false:true)}} type="checkbox" id="is_best_deal" name="is_best_deal"/><label for="is_best_deal">is best deal</label></li>
                                <li style={{marginRight:"15px"}}><input onChange={(e)=>{setIsFeatured(is_featured?false:true)}} type="checkbox" id="is_featured" name="is_featured"/><label for="is_featured">is featured</label></li>
                            </ul>
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
