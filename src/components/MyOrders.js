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
    <div className='d-flex justify-content-center overflow-auto' style={{minHeight:"60vh"}}>
    {!productList.length ? 
    <div className='align-self-center'>
        <h4>No Orders Were Placed!</h4>
    </div> : (
        <div>
            <div>
            <h2 id = 'spacing1' className='shadow-sm text-dark p-3 mb-4'>MY ORDERS</h2>
            </div>
            <div className='d-flex flex-column' style={{minHeight: "40vh", overflow:"auto"}}>
            <div className='shadow-sm'>
          {productList.map(( product ) => (
            <AboutOrder product = { product } />
          ))}
          </div>
          </div>
        </div>
      )}
      </div>
      );
}