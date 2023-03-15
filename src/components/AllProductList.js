import React , {useState , useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import AboutProduct from './AboutProduct';
const AllProductList = () => {

  const location = useLocation();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async() =>{
    const List = await location.state.list ;
    for ( let i = 0 ; i < List.length ; i ++ ) {
        const response = await fetch(`http://${process.env.REACT_APP_URL}/category/${List[i]}/product`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            for ( let j = 0 ; j < data.length ; j ++ ) {
                setProductList(oldArray => [...oldArray, data[j] ] ) ; 
            }
        })
    }
  }
    return (
      !productList.length ? <h1>hello</h1> : (
        <div className = "parent">
          {productList.map(( product ) => (
            <AboutProduct product = { product } />
          ))}
        </div>
      )
      );
  
};

export default AllProductList ;