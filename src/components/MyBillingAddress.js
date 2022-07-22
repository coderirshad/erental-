import React ,{useEffect,useState}from 'react'
import GetAuthorization from './GetAuthorization';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

export default function MyBillingAddress() {
  const [showFrom, setShowFrom] = useState( false );
  const [addresses, setAddresses] = useState( [ 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.' , 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.'] );
  const handleClick = () =>{
    setShowFrom ( ! showFrom ) ;
  }
  
  const [address, setAddress] = useState( '' ) ;
  const handleSubmit = async (e) => {
        e.preventDefault();
        setAddresses (oldArray => [...oldArray, address] ) ;
        setAddress ( '' ) ; 
        setShowFrom ( false ) ;
  };

  const [userData, setuserData] =  useState([]);
    const fetchData = async() =>{
      await fetch(`http://${process.env.REACT_APP_URL}/user`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }  
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             setuserData(data)          
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
                        Address : <input className='AddressInput' value={address} onChange={ (e) => setAddress(e.target.value ) } required />
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
                <div className='address' >
                    <h5 className='spaceBetweenAddressDetails'><strong>Name : {userData.user_name}</strong></h5>
                    <p>Address : {address}</p>
                </div>
            )
            ).reverse()
        }
    </div>

    
  );
}