import React ,{useEffect,useState}from 'react';

export default function Product_list() {

    const [product, setProduct] =  useState([]);
    const fetchData =()=>{
        fetch("http://localhost:8080/product")
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             console.log(data);
         
          
            setProduct(data)

          
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="table-responsive" >
    <table className="table ">
  
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">SKU</th>
      <th scope="col">Stock</th>
      <th scope="col">Price</th>
      <th scope="col">Earning</th>
      <th scope="col">Type</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
  {
                    product.map(data => (
                     
    <tr>
   
      <td scope="row"><img src="images/sbar-6.png" alt=""/></td>
      <td>{data.name}</td>
      <td>{data.Status}</td>
      <td>{data.SKU}</td>
      <th >{data.Stock}</th>
      <td>{data.price}</td>
      <td>{data.Earning}</td>
      <td>{data.Type}</td>
      <td>{data.view}</td>
    
    </tr>
                    ))}
  </tbody>  
</table>
</div>
  );
}
