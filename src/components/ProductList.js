import React , {useState , useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import AboutProduct from './AboutProduct';
const ProductList = () => {

  const location = useLocation();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [location.state.id]);
  const fetchdata = async() =>{
    const response = await fetch(`http://${process.env.REACT_APP_URL}/category/${location.state.id}/product`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             setProductList (data) ;
        })
  }
    return (
      !productList.length ? <h1></h1> : (
        <div className = "parent">
          {productList.map(( product ) => (
            <AboutProduct product = { product } />
          ))}
        </div>
      )
      );
  
};

export default ProductList ;