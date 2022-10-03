import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div className="container-sm"  style={{marginLeft:"30%", position:"absolute", top:"80%"}} >
  <div className="row">
    <div className="col">
    <div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Sales <br></br>₹0.00</li>
    <li className="list-group-item">Earning <br></br>₹0.00</li>
    <li className="list-group-item">Pageview <br></br>₹0.00</li>
    <li className="list-group-item">Order<br></br>₹0.00</li>
  </ul>
</div>
<div className="card">
  <div className="card-header">
   <h5>ORDERS</h5>
  </div>
  <ul>
    <li>TOTAL </li>
    <li >COMPLETED  </li>
    <li >PENDING</li>
    <li >REFUND</li>
    <li >PROCESSING</li>
    <li >HOLD</li>
  </ul>
</div>
<div className="card">
  <div className="card-header">
  <h5>REVIEWS</h5>
  </div>
  <ul>
    <li>All<span>0</span></li>
    <li>Pending<span>0</span></li>
    <li >Spam<span>0</span></li>
    <li >Trash<span>0</span></li>
  </ul>
</div>
<div className="card">
  <div className="card-header">
  <h6>PRODUCT+ADD NEW PRODUCT</h6>
  </div>
  <ul >
    <li>Total</li>
    <li>Live</li>
    <li>Offline</li>
    <li>Pending Review</li>
  </ul>
</div>
    </div>
    <div className="col">
    <div className="card">
  <div className="card-header">
<h5>Latest Annoucement</h5>
  </div>
  <div className="card-body">
    <h5 className="card-title">No Annoucement Found</h5>
  </div>
</div>
    </div>
  </div>
</div>
  </div>
  )
}
