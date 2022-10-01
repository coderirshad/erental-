import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import GetAuthorization from './GetAuthorization';

function DescriptionData(){
   const params = useParams();
   const [description, setDescription] = useState("");
   const id = params.id;


   const fetchData = () => {
        fetch(`http://${process.env.REACT_APP_URL}/product/${id}`,{
          method:"GET",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': GetAuthorization() 
    }
        }).then((response) =>{
          return response.json();
        }).then((data) =>{
           setDescription(data.description);
        })

}

useEffect(() => {
    fetchData()
}, [])


  return (
    <div>
      <div className='container-fluid m-auto' style={{width:"70%"}}>
        <div className='row'>
          <div className='col-12 text-start p-2'>
            <iframe width={1340} height={600} src={description}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionData