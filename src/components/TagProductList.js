import React , {useState , useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import AboutProduct from './AboutProduct';

const TagProductList = () => {

  const location = useLocation();
  console.log("location",location)

  const [tagproductList, settagProductList] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [location.state.id]);
  const fetchdata = async() =>{
    const response = await fetch(`http://${process.env.REACT_APP_URL}/product/tag/${location.state.id}`)
    const data = await response.json();
    settagProductList(data)
        // .then((response)=>{
        //     return response.json();
        // }).then((data)=>{
        //     settagProductList (data) ;
        // })
  }
    return (
      !tagproductList.length ? <h1></h1> : (
        <div className = "parent">
          {tagproductList.map(( product ) => (
            <AboutProduct product = { product } />
          ))}
        </div>
      )
      );
  
};

export default TagProductList ;