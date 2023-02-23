import React, { useState, useEffect } from 'react';
import GetAuthorization from './GetAuthorization';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MultipleSelectChip from './MultipleSelecter';
import { useNavigate, useParams } from 'react-router-dom';
import NestedMultipleSelectChip from './NestedMultipleSelecter';
export default function AddProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [event_manager_price, setevent_manager_price] = useState("");
  const [price, setprice] = useState("");
  const [discounted_price, setdiscounted] = useState("");
  const [stock, setstock] = useState("");
  const [sku, setsku] = useState("");
  const [view, setview] = useState("");
  const [description, setDiscription] = useState("");
  const [termscondition, setTermscontion] = useState("")
  const [image, setimage] = useState("");
  const [tag_list, setTaglist] = useState([]);
  const [suggestion_list, setSuggestionlist] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [tag, setTag] = React.useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [is_hot_deal, setIsHotDeal] = useState(false);
  const [is_top_sold, setIsTopSold] = useState(false);
  const [is_new, setIsNew] = useState(false);
  const [is_enable, setIsEnable] = useState(false);
  const [is_best_deal, setIsBestDeal] = useState(false);
  const [is_featured, setIsFeatured] = useState(false);
  const [is_area_based, setAreabased] = useState(false);
  const [service, setService] = useState('');
  const [price_variation, setPriceVariation] = useState('');
  const [lng, setLng] = useState(0.00);
  const [lat, setLat] = useState(0.00);
  const [length_unit, setLenght_unite] = useState("")
  const [width_unit, setWidth_unite] = useState("")

  const fetchdata = async () => {
    const response = await fetch(`http://${process.env.REACT_APP_URL}/category`,{
      method:"GET",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': GetAuthorization()
        }  
  }); 
    setcategory(await response.json());
  }
  
  const updateData = async () => {
    await fetch(`http://${process.env.REACT_APP_URL}/product/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setname(data.product_name);
        setevent_manager_price(data.event_manager_price);
        setprice(data.price);
        setdiscounted(data.discounted_price);
        setstock(data.stock);
        setsku(data.sku);
        setview(data.view);
        // setstatus(data.status);
        setimage(data.images[0]);
        setTag(data.tag);
        setIsFeatured(data.is_featured);
        setIsHotDeal(data.is_hot_deal);
        setIsNew(data.is_new);
        setIsTopSold(data.is_top_sold);
        setIsBestDeal(data.ise_best_deal);
        setIsEnable(data.is_enable);
        setService(data.service);
        setPriceVariation(data.price_variation);
        // data upadate
        setDiscription(data.description);
        setTermscontion(data.termscondition);
        setSuggestion(data.suggested_product_id);
        setsubcategory(data.category);
        setAreabased(data.is_area_based);

      }
      )
      
    }

    const fetchtag = async () => {
    const response = await fetch(`http://${process.env.REACT_APP_URL}/tag`
    ,{
      method:"GET",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': GetAuthorization()
        }  
  });
    setTaglist(await response.json());
  }
  // suggest list api call

  const SuggestList = async () => {
    const response = await fetch(`http://${process.env.REACT_APP_URL}/suggest/product`
      , {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': GetAuthorization()
        }
      }
    );

    setSuggestionlist(await response.json());
    const data = await response.json();
    console.clear()
    console.log(data)
  }

  useEffect(() => {
    updateData();
    fetchdata();
    fetchtag();
    SuggestList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveProduct = async () => {
    var images = [];
    images.push(image);
    var id = params.id;
    let data = { id, name,event_manager_price,sku, price,termscondition,description,discounted_price,service,width_unit, length_unit,stock, view, tag, suggestion,images, subcategory, is_hot_deal, is_area_based ,is_new, is_enable, is_best_deal, is_featured, is_top_sold, price_variation, lng, lat}
    await fetch(`http://${process.env.REACT_APP_URL}/admin/product`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': GetAuthorization()
      },
      body: JSON.stringify(data)
    }).then((result) => {

    })
    navigate('/admin/Product')
  }
  const addProduct = () => {
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
      <div className="container " style={{ marginLeft: "30%", position: "absolute", top: "25%" }} >
        <div className="row">
          <div className="col-8">
            <div>
              <TextField
                required
                id="product"
                label="Product Name"
                value={name}
                onChange={(e) => { setname(e.target.value) }}
                defaultValue="Name"
              />

              <TextField
                required
                id="event_manager_price"
                label="event manager price"
                value={event_manager_price}
                onChange={(e) => { setevent_manager_price(e.target.value) }}
                defaultValue="Enter Event Manager Price"
              />
              <TextField
                required
                id="price"
                label="Price"
                value={price}
                onChange={(e) => { setprice(e.target.value) }}
                defaultValue="Enter Price"
              />
              <TextField
                required
                id="discounted_price"
                label="Discounted Price"
                value={discounted_price}
                onChange={(e) => { setdiscounted(e.target.value) }}
                defaultValue="Earning"
              />
            </div>
            <div>

              <TextField
                required
                id="stock"
                label="Stock"
                value={stock}
                onChange={(e) => { setstock(e.target.value) }}
                defaultValue="Enter Stock"
              />
              <TextField
                required
                id="image"
                label="Image link"
                value={image}
                onChange={(e) => { setimage(e.target.value) }}
                defaultValue="Enter image link"
              />
              <TextField
                required
                id="sku"
                label="SKU"
                value={sku}
                onChange={(e) => { setsku(e.target.value) }}
                defaultValue="SKU"
              />
              <TextField
                required
                id="Service"
                label="Service"
                value={service}
                onChange={(e) => { setService(e.target.value) }}
                defaultValue="Service"
              />

              <TextField
                required
                id="price_variation"
                label="Price Variation"
                value={price_variation}
                onChange={(e) => { setPriceVariation(e.target.value) }}
                defaultValue="0.00"
              />
            </div>

            <div>
              <TextField
                required
                id="view"
                label="View"
                value={view} onChange={(e) => { setview(e.target.value) }}
                defaultValue="View"
              />
              {/* here i just add description */}
              <TextField
                required
                id="Discription"
                label="Discription"
                value={description} onChange={(e) => { setDiscription(e.target.value) }}
                defaultValue="Discription"
              />

              <TextField
                required
                id="Term_conditon"
                label="TermsAndCondition"
                value={termscondition} onChange={(e) => { setTermscontion(e.target.value) }}
                defaultValue="Terms and condition"
              />
             {/* here lenght and width */}
              <TextField
                required
                id="length"
                label="Length"
                value={length_unit} onChange={(e) => { setLenght_unite(e.target.value) }}
                defaultValue="Length"
              />

             <TextField
                required
                id="width"
                label="Width"
                value={width_unit} onChange={(e) => { setWidth_unite(e.target.value) }}
                defaultValue="Width"
              />

              <div style={{ display: "flex" }}>
                <NestedMultipleSelectChip boxName={"category"} names={category} personName={subcategory} setPersonName={setsubcategory}></NestedMultipleSelectChip>
                <MultipleSelectChip boxName={"tag"} names={tag_list} personName={tag} setPersonName={setTag}></MultipleSelectChip>
                <MultipleSelectChip boxName={"suggestion"} names={suggestion_list} personName={suggestion} setPersonName={setSuggestion}></MultipleSelectChip>
              </div>



            </div>
            <div className="col-md-12">
              <ul className="list-unstyled" style={{ display: "flex", alignItem: "center" }}>
                <li style={{ marginRight: "1em" }} className="form-check"><input className="form-check-input" onChange={(e) => { setIsHotDeal(e.target.checked) }} checked={is_hot_deal} type="checkbox" id="is_hot_deal" name="is_hot_deal" /><label className="form-check-label" htmlhtmlFor='is_hot_deal'>is hot deal</label></li>
                <li style={{ marginRight: "1em" }} className="form-check"><input className="form-check-input" onChange={(e) => { setIsTopSold(e.target.checked) }} checked={is_top_sold} type="checkbox" id="is_top_sold" name="is_top_sold" /><label className="form-check-label" htmlFor="is_top_sold">is top sold</label></li>
                <li style={{ marginRight: "1em" }} className="form-check"><input className="form-check-input" onChange={(e) => { setIsNew(e.target.checked) }} checked={is_new} type="checkbox" id="is_new" name="is_new" /><label className="form-check-label" htmlFor="is_new">is new</label></li>
                <li style={{ marginRight: "1em" }} className="form-check"><input className="form-check-input" onChange={(e) => { setIsEnable(e.target.checked) }} checked={is_enable} type="checkbox" id="is_enable" name="is_enable" /><label className="form-check-label" htmlFor="is_enable">is enable</label></li>
                <li style={{ marginRight: "1em" }} className="form-check"><input className="form-check-input" onChange={(e) => { setIsBestDeal(e.target.checked) }} checked={is_best_deal} type="checkbox" id="is_best_deal" name="is_best_deal" /><label className="form-check-label" htmlFor="is_best_deal">is best deal</label></li>
                <li style={{ marginRight: "1em" }} className="form-check"><input className="form-check-input" onChange={(e) => { setIsFeatured(e.target.checked) }} checked={is_featured} type="checkbox" id="is_featured" name="is_featured" /><label className="form-check-label" htmlFor="is_featured">is featured</label></li>
                <li style={{ marginRight: "1em" }} className="form-check"><input className="form-check-input" onChange={(e) => { setAreabased(e.target.checked) }} checked={is_area_based} type="checkbox" id="is_area_based" name="is_area_based" /><label className="form-check-label" htmlFor="is_area_based">is areabased</label></li>
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
                <button type="button" onClick={() => addProduct()} className="btn btn-danger" >Save Product</button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </Box>

  );
}
