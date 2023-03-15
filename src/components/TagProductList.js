import React , {useState , useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import AboutProduct from './AboutProduct';
import HotDealBox from './HotDealBox';

const TagProductList = () => {
  const [tagproductList, settagProductList] = useState([]);
  const [price, setPrice] = useState([250]);
  const [Categoryoption, setCategoryoption] = useState(false);

  const location = useLocation();

  const priceHandleChange = (e, newprice) =>{
    setPrice(e.target.value)
  } 

  const handleCheckboxChange = (e) =>{
     setCategoryoption(e.target.checked)
  }

  useEffect(() => {
    fetchdata();
  }, [location.state.id]);
    const fetchdata = async() =>{
    const response = await fetch(`http://${process.env.REACT_APP_URL}/product/tag/${location.state.id}`)
    const data = await response.json();
    settagProductList(data)
    console.clear()
    console.log("ello",data);
        // .then((response)=>{
        //     return response.json();
        // }).then((data)=>{
        //     settagProductList (data) ;
        // })
  }
    return (
          <div className='container'>
             <div className='mx-1 row'>
              {/*  for filer code here */}
              <div className='col-md-3 py-4' style={{textAlign:"left"}}>
                <h5 className='h5 text-dark' style={{fontWeight: "600"}}>Filter</h5>
                    <div className='mt-4'>
                        <label class="form-label text-dark mb-2 font-weight-bold h6" for="customRange1" style={{fontWeight: "600"}}>Price Range</label>
                        <div>{price}</div>
                        <div class="range">
                          <input type="range" 
                          class="form-range" 
                          id="customRange1" 
                          value={price}
                          onChange={priceHandleChange}
                          min={250} max={10000} />
                        </div>
                    </div>
                    <h5 class="form-label text-dark mt-2 mb-2 font-weight-bold h6" for="customRange1" style={{fontWeight: "600"}}>Category</h5>
                    <div className='d-flex mt-3 justify-content-between align-itmes-center'>
                          <div className='d-flex justify-content-center align-items-center'>
                              <input
                                  type="checkbox"
                                  value={Categoryoption}
                                  onChange={handleCheckboxChange}
                                  id="subscribe"
                                  name="subscribe"
                                />  
                              <label htmlFor="subscribe"className="mx-2">
                                Subscribe
                              </label>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                              <input
                                  type="checkbox"
                                  value={Categoryoption}
                                  onChange={handleCheckboxChange}
                                  id="subscribe"
                                  name="subscribe"
                                />  
                              <label htmlFor="subscribe"className="mx-2">
                                Subscribe
                              </label>
                            </div>
                    </div>
                    <div className='d-flex mt-2 justify-content-between align-itmes-center'>
                          <div className='d-flex justify-content-center align-items-center'>
                              <input
                                  type="checkbox"
                                  value={Categoryoption}
                                  onChange={handleCheckboxChange}
                                  id="subscribe"
                                  name="subscribe"
                                />  
                              <label htmlFor="subscribe"className="mx-2">
                                Subscribe
                              </label>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                              <input
                                  type="checkbox"
                                  value={Categoryoption}
                                  onChange={handleCheckboxChange}
                                  id="subscribe"
                                  name="subscribe"
                                />  
                              <label htmlFor="subscribe"className="mx-2">
                                Subscribe
                              </label>
                            </div>
                    </div>
                    {/* tag */}
                    <h5 class="form-label text-dark mt-3 mb-2 font-weight-bold h6" for="customRange1" style={{fontWeight: "600"}}>Tag</h5>
                    <div className='d-flex mt-3 justify-content-between align-itmes-center'>
                          <div className='d-flex justify-content-center align-items-center'>
                              <input
                                  type="checkbox"
                                  value={Categoryoption}
                                  onChange={handleCheckboxChange}
                                  id="subscribe"
                                  name="subscribe"
                                />  
                              <label htmlFor="subscribe"className="mx-2">
                                Subscribe
                              </label>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                              <input
                                  type="checkbox"
                                  value={Categoryoption}
                                  onChange={handleCheckboxChange}
                                  id="subscribe"
                                  name="subscribe"
                                />  
                              <label htmlFor="subscribe"className="mx-2">
                                Subscribe
                              </label>
                            </div>
                    </div>
                    <div className='d-flex mt-2 justify-content-between align-itmes-center'>
                          <div className='d-flex justify-content-center align-items-center'>
                              <input
                                  type="checkbox"
                                  value={Categoryoption}
                                  onChange={handleCheckboxChange}
                                  id="subscribe"
                                  name="subscribe"
                                />  
                              <label htmlFor="subscribe"className="mx-2">
                                Subscribe
                              </label>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                              <input
                                  type="checkbox"
                                  value={Categoryoption}
                                  onChange={handleCheckboxChange}
                                  id="subscribe"
                                  name="subscribe"
                                />  
                              <label htmlFor="subscribe"className="mx-2">
                                Subscribe
                              </label>
                            </div>
                    </div>
               </div>
               <div className='col-md-9 font-weight-bold'>
                 {/*  for prodcut details code here */}
                  <div>
                    {!tagproductList.length ? <h1></h1> : (
                        <div className = "parent" style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
                          {tagproductList.map(( product ) => (
                            <HotDealBox data={product} />
                          ))}
                        </div>
                      )}
                  </div>
               </div>
             </div>
          </div>
      );
  
};

export default TagProductList ;