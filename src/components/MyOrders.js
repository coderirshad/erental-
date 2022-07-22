import React ,{useEffect,useState}from 'react'
import AboutOrder from './AboutOrder';


export default function MyOrders() {

    const [productList, setproductList] = useState([]);
    const fetchdata = async() =>{
        const response = await fetch(`http://${process.env.REACT_APP_URL}/product`);
        setproductList(await response.json());
    }
    useEffect(() => {
        fetchdata();
    }, []);
  
  return (
    !productList.length ? 
    <div style={{marginLeft:"30%", marginTop:"-18%" , marginBottom : "3%" , height : "300px"}} >
        <h4>No Orders Were Placed!</h4>
    </div> : (
        <div className = "myOrder" style={{marginLeft:"30%", marginTop:"-18%" , marginBottom : "3%"}} >
            <div>
            <h2 id = 'spacing1'>MY ORDERS</h2>
            </div>
          {productList.map(( product ) => (
            <AboutOrder product = { product } />
          ))}
        </div>
      )
      );
}
