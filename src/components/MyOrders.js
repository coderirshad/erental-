import React ,{useEffect,useState}from 'react'
import AboutOrder from './AboutOrder';


export default function MyOrders() {

    const [productList, setproductList] = useState( [
      {
          "Order_id": "58ceec95-fc5c-469f-89a4-a1795b12b535",
          "Shipping_tax": 24,
          "subtotal": 123,
          "grandtotal": 147,
          "Cart_item": [
              {
                  "cart_item_id": "04ce9d38-5a4b-4491-b927-ed7667f94cfb",
                  "name": "Product 1",
                  "attribute": [
                      {
                          "name": "color",
                          "value": "red"
                      },
                      {
                          "name": "size",
                          "value": "L"
                      }
                  ],
                  "total": 123,
                  "quantity": 1,
                  "price": 123,
                  "image": "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  "day": 0
              }
          ],
          "billing_address": {
              "address_id": "ee159066-6d96-4b28-9e48-4f59935cb71c",
              "name": "Anuj",
              "phone_number": "7987766022",
              "locality": "Near Toll plaza Stand",
              "city": "Damoh",
              "pincode": "470775"
          },
          "shipping_address": {
              "address_id": "ee159066-6d96-4b28-9e48-4f59935cb71c",
              "name": "Anuj",
              "phone_number": "7987766022",
              "locality": "Near Toll plaza Stand",
              "city": "Damoh",
              "pincode": "470775"
          }
      },
      {
          "Order_id": "f404d5e3-b13a-407f-a8d0-ef480890871f",
          "Shipping_tax": 48,
          "subtotal": 246,
          "grandtotal": 294,
          "Cart_item": [
              {
                  "cart_item_id": "04ce9d38-5a4b-4491-b927-ed7667f94cfb",
                  "name": "Product 1",
                  "attribute": [
                      {
                          "name": "color",
                          "value": "red"
                      },
                      {
                          "name": "size",
                          "value": "L"
                      }
                  ],
                  "total": 246,
                  "quantity": 2,
                  "price": 123,
                  "image": "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  "day": 0
              }
          ],
          "billing_address": {
              "address_id": "ee159066-6d96-4b28-9e48-4f59935cb71c",
              "name": "Anuj",
              "phone_number": "7987766022",
              "locality": "Near Toll plaza Stand",
              "city": "Damoh",
              "pincode": "470775"
          },
          "shipping_address": {
              "address_id": "ee159066-6d96-4b28-9e48-4f59935cb71c",
              "name": "Anuj",
              "phone_number": "7987766022",
              "locality": "Near Toll plaza Stand",
              "city": "Damoh",
              "pincode": "470775"
          }
      }
  ]);
    const fetchdata = async() =>{
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
