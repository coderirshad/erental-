import React from 'react'
import Rating from '@mui/material/Rating';
import {useState, useEffect} from 'react'
import GetAuthorization from './GetAuthorization';
import {useParams } from 'react-router-dom';


function DescriptionReview() {
  const [value, setValue] = useState(0)
  const [name, setName] = useState("")
  const [review, setReview] = useState("")
  const [email, setEmail] = useState("")
  const params = useParams();
  const id = params.id;

  const fetchData = async (e) => {
    e.preventDefault();
    let data = {id,email, value, review}
    await fetch(`http://${process.env.REACT_APP_URL}/product/${id}/review`, {
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
    setValue(0)
    setReview('')
 }, [])

  return (
    <div>
        <div className="container-fluid text-left" style={{"text-align":"left",width:"78%"}}>
        <div className="row justify-content-between p-3">
           <div className="col-6">
              <h5 className="p-3 text-left" style={{"font-size":"25px","font-weight":"600"}}>REVIEW</h5>
              <p className="p-3 h4">no review yet</p>
           </div>
           <div className="col-6 p-3">
                <h5 style={{"font-size":"25px","font-weight":"600"}}>ADD A REVIEW</h5>
                <p className='mt-3 h5'>Required fields are marked <sup style={{color:"red"}}>*</sup></p>
                <p className='mt-4 h4'>Your rating <sup style={{color:"red"}}>*</sup> :  
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                  />
                </p>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1" className="mt-5 h4">Your review <sup style={{color:"red"}}>*</sup> :</label>
                  <textarea className="form-control mt-2" value={review} onChange={(e) =>setReview(e.target.value)} id="exampleFormControlTextarea1" rows="6" col="50"></textarea>
                </div>
                <form>
                    <div className="row justify-content-between  mt-5">
                      <div className="col-6">
                        
                          <div className="form-group h4">
                            <label htmlFor="formGroupExampleInput" className='mb-3'>Email<sup style={{color:"red"}}>*</sup></label>
                            <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} className="form-control p-3 mb-3" id="formGroupExampleInput" aria-describedby="emailHelp" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group h4">
                            <label htmlFor="formGroupExampleInput" className='mb-3'>Full Name<sup style={{color:"red"}}>*</sup></label>
                            <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="form-control p-3" id="formGroupExampleInput" placeholder="Full Name" />
                          </div>
                  </div>
                  <div className="row">
                    <div className="col-1 mt-4">
                      <button type="button" onClick={fetchData} className="btn btn-success btn-lg p-3">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionReview