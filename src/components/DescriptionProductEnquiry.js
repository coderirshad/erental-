import React from 'react'
import {useState, useEffect} from 'react'
import GetAuthorization from './GetAuthorization';
import {useParams } from 'react-router-dom';



function DescriptionProductEnquiry() {
  const params = useParams();
  const id = params.id;
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [enquiry, setEnquiry] = useState("")
  const fetchData = async () => {
    let data = {id,email,name, enquiry}
    await fetch(`http://${process.env.REACT_APP_URL}/product/${id}/enquiry`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': GetAuthorization()
      },
      body: JSON.stringify(data)
    })
  }

  useEffect(() =>{
     fetchData()
     setName("")
     setEmail("")
     setEnquiry("")
  }, [])

  return (
    <div>
        <div className="container-fluid" style={{"text-align":"left",width:"60%"}}>
        <div className="row justify-content-between p-3">
           <div className="col-12 p-3">
                <h5 style={{"font-size":"25px","font-weight":"600"}}>Product Enquiry</h5>
                <div className="row justify-content-between  mt-5">
                  <div className="col-6">
                      <div className="form-group h4">
                        <label htmlFor="formGroupExampleInput" className='mb-3'>Email<sup style={{color:"red"}}>*</sup></label>
                        <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} className="form-control p-3 mb-3" id="formGroupExampleInput" aria-describedby="emailHelp" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group h4">
                        <label htmlFor="formGroupExampleInput" className='mb-3'>Name<sup style={{color:"red"}}>*</sup></label>
                        <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="form-control p-3" id="formGroupExampleInput" placeholder="Full Name" />
                      </div>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1" className="mt-3 h4">Your Enquiry <sup style={{color:"red"}}>*</sup> :</label>
                  <textarea className="form-control mt-2" value={enquiry} onChange={(e) =>setEnquiry(e.target.value)} id="exampleFormControlTextarea1" rows="10" col="50"></textarea>
                </div>
              <div className="row">
                <div className="col mt-4">
                  <button type="button" onClick={fetchData} className="btn-success btn-lg p-3">Submit Enquiry</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionProductEnquiry