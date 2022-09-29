import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function DescriptionTermCon(){
   const params = useParams();
   const [termscondition, setTermscontion] = useState("");
   const id = params.id;


   const fetchData = async () => {
    try {
        const response = await fetch(`http://${process.env.REACT_APP_URL}/product/${params.id}`);
        if (!response.ok) throw new Error('soemthing went wrong in api')
        const data = await response.json();
        setTermscontion(data.description)
       
    } catch (error) {
        alert('something went wrong');
    }

}

useEffect(() => {
    fetchData()
}, [termscondition])


  return (
    <div>
      <div className='container-fluid m-auto' style={{width:"70%"}}>
        <div className='row'>
          <div className='col-12 text-start p-2'>
            <iframe style={{overflow:"hidden"}} width={1340} height={600} src={termscondition}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionTermCon;