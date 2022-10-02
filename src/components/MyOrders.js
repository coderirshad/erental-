import React ,{useEffect,useState}from 'react'
import AboutOrder from './AboutOrder';
import GetAuthorization from './GetAuthorization';


export default function MyOrders() {

    const [productList, setproductList] = useState( []);
    const fetchdata = async() =>{
        await fetch(`http://${process.env.REACT_APP_URL}/order`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }  
        })
        .then((response)=>{
            return  response.json();
        }).then((data)=>{
            setproductList( data );          
        })
        
    }
    useEffect(() => {
        fetchdata();
    }, []);

  
  return (
    !productList.length ? 
    <div style={{marginLeft:"30%", marginTop:"-26%" , marginBottom : "3%" , height : "300px"}} >
        <h4>No Orders Were Placed!</h4>
    </div> : (
        <div className = "myOrder" style={{marginLeft:"22%", marginTop:"-42%" , marginBottom : "3%"}} >
            <div>
            <h2 id = 'spacing1' className='shadow-sm text-dark p-3 mb-4'>MY ORDERS</h2>
            </div>
            <div className='shadow-sm'>
          {productList.map(( product ) => (
            <AboutOrder product = { product } />
          ))}
          </div>
        </div>
      )
      );
}