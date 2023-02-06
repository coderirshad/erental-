import React ,{useEffect,useState,useRef}from 'react'
import GetAuthorization from './GetAuthorization';

export default function MyBillingAddress() {
  const [addresses, setAddresses] = useState( [] );
  const [address , setAddress] = useState( { name : '', phone_number : '', locality : '', city : '' , pincode : '', gstn: '', ship_date:'', street_add:'' } );

  const ref = useRef(null);
  const refClose = useRef(null);
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

    const handleClick = (e)=>{
      e.preventDefault();
      setData(address);
      setAddress ( { name : '', phone_number : '', locality : '', city : '' , pincode : '', gstn:'', ship_date:'', street_add:'' } );
    }

    const onChange = (e) => {
      setAddress({ ...address, [e.target.name]: e.target.value });
    };

  return (
    <div className='container mx-3' style={{minHeight:"55vh"}}>
        <div className=''>
        <h4 id = 'spacing1' style={{color:"black"}}><strong>MY ADDRESSES</strong></h4>
        </div>
        <button type="button" class="btn btn-primary mx-auto my-4" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
          Add a New Address
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <form className="container">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    onChange={(e)=>onChange(e)}
                    value={address.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="street_add"
                    name="street_add"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={address.street_add}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Landmark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="locality"
                    name="locality"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={address.locality}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={address.city}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Pincode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={address.pincode}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone_number"
                    name="phone_number"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={address.phone_number}
                  />
                  </div>
                  <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    GST Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="gstn"
                    name="gstn"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={address.gstn}
                  />
                  <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="ship_date"
                    name="ship_date"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={address.ship_date}
                  />
                  </div>
                </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" onClick={(e)=>handleClick(e)} data-bs-dismiss="modal">Add Address</button>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex address-card justify-content-center'>
        {   
            addresses.map ( ( address ) => (          
                <div className="card p-2" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Name : {address.name}</h5>
                  <p className="card-text">Address : {address.street_add}</p>
                  <p className="card-text">Landmark : {address.locality}</p>
                  <p className="card-text">City : {address.city}</p>
                  <p className="card-text">Pincode : {address.pincode}</p>
                  <p className="card-text">Phone Number : {address.phone_number}</p>
                  <p className="card-text">GST Number : {address.gstn}</p>
                  <p className="card-text">Shipping Date : {address.ship_date}</p>
                </div>
              </div>
            )
            ).reverse()
          }
          </div>
    </div>

    
  );
}
