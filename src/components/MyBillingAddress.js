import React ,{useEffect,useState}from 'react'
import GetAuthorization from './GetAuthorization';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export default function MyBillingAddress() {
  const [addresses, setAddresses] = useState( [ {
    "name":"Anuj",
    "phone_number":"7987766022",
    "locality":"Near Toll plaza Stand",
    "city":"Damoh",
    "pincode":"470775"
    } , 
    {
    "name":"Anuj",
    "phone_number":"7987766022",
    "locality":"Near Toll plaza Stand",
    "city":"Damoh",
    "pincode":"470775"
    }
  ] );

    const fetchData = async() =>{
      await fetch(`http://${process.env.REACT_APP_URL}/address`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }  
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            for ( let i = 0 ; i < data.lengh ; i ++ ) {
                setAddresses (oldArray => [...oldArray, data[i] ] ) ;
            }      
        })
    }
    useEffect(()=>{
        fetchData();
    },[]) ;

  return (
    <div style={{marginLeft:"30%", marginTop:"-18%" , marginBottom : "3%"}} >
        <div className='heading'>
        <h4 id = 'spacing1'><strong>MY ADDRESS</strong></h4>
        </div>
        {   
            addresses.map ( ( address ) => (
                <div className='address' >
                    <p>Locality : {address.locality}</p>
                    <p>City : {address.city}</p>
                    <p>pincode : {address.pincode}</p>
                    <p>Contact Number : {address.phone_number}</p>
                </div>
            )
            ).reverse()
        }
    </div>

    
  );
}

