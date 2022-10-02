import React ,{useEffect,useState}from 'react'
import GetAuthorization from './GetAuthorization';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export default function MyBillingAddress() {
  const [addresses, setAddresses] = useState( [] );
  const [address , setAddress] = useState( { name : '', phone_number : '', locality : '', city : '' , pincode : '' } );

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
          setAddresses ( data ) ;   
        })
    }

    const setData = async ( address ) => {
      console.log ( address ) ;
      await fetch(`http://${process.env.REACT_APP_URL}/address`, {
            method: "POST",
            headers: {
                'Accept':'application/json',  
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              },
            body: JSON.stringify( address )
        });
        fetchData();
    }
    useEffect(()=>{
        fetchData();
    },[]) ;

    const [showFrom, setShowFrom] = useState( false );

    const handleClick = () =>{
      setShowFrom ( ! showFrom ) ;
      if ( ! showFrom ) setAddress ( { name : '', phone_number : '', locality : '', city : '' , pincode : '' } ) ; 
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setData ( address ) ;
      setAddress ( { name : '', phone_number : '', locality : '', city : '' , pincode : '' } ) ; 
      setShowFrom ( false ) ;
    };

  return (
    <div style={{marginLeft:"23%", marginTop:"-42%" , marginBottom : "10%" }} >
        <div className='heading'>
        <h4 id = 'spacing1' className='shadow-sm text-dark p-3 mb-4'><strong>MY ADDRESSES</strong></h4>
        </div>
        <button className = "AddressButton"onClick= {() => handleClick() } >
        { ( showFrom == true ) ? <CloseIcon></CloseIcon> : 
        <div>
            ADD A NEW ADDRESS <AddIcon></AddIcon>
        </div>
        }
        </button>
        { ( showFrom == true ) ? 
                <form className='address' onSubmit={handleSubmit} >
                    <label >
                        Name     : <input className='AddressInput' value={address.name} onChange={ (e) => setAddress ({ ...address , name : e.target.value })} required />
                    </label>
                    <label >
                        Locality : <input className='AddressInput' value={address.locality} onChange={ (e) => setAddress ({ ...address , locality : e.target.value })} required />
                    </label>
                    <label >
                        City : <input className='AddressInput' value={address.city} onChange={ (e) => setAddress ({ ...address , city : e.target.value })} required />
                    </label>
                    <label >
                      Pincode : <input className='AddressInput' value={address.pincode} onChange={ (e) => setAddress ({ ...address , pincode : e.target.value })} required />
                    </label>
                    <label >
                      Phone Number : <input className='AddressInput' value={address.phone_number} onChange={ (e) => setAddress ({ ...address , phone_number : e.target.value })} required />
                    </label>
                    <div >
                    <button style={{ border : "none" }} className = " addressAddButton" onClick= {() => handleSubmit } >Add</button>
                    </div>
                </form>
            : 
        <></>
        }
        {   
            addresses.map ( ( address ) => (
                <div className='address mb-2' >
                    <h5 className='spaceBetweenAddressDetails'><strong>Name : {address.name}</strong></h5>
                    <p>Locality : {address.locality}</p>
                    <p>City : {address.city}</p>
                    <p>Pincode : {address.pincode}</p>
                    <p>Phone Number : {address.phone_number}</p>
                </div>
            )
            ).reverse()
        }
    </div>

    
  );
}
