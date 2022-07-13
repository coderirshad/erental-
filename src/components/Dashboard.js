import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div class="container-sm"  style={{marginLeft:"30%", position:"absolute", top:"80%"}} >
  <div class="row">
    <div class="col">
    <div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Sales <br></br>₹0.00</li>
    <li className="list-group-item">Earning <br></br>₹0.00</li>
    <li className="list-group-item">Pageview <br></br>₹0.00</li>
    <li className="list-group-item">Order<br></br>₹0.00</li>
  </ul>
</div>
<div class="card">
  <div class="card-header">
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
<div class="card">
  <div class="card-header">
  <h5>REVIEWS</h5>
  </div>
  <ul>
    <li>All<span>0</span></li>
    <li>Pending<span>0</span></li>
    <li >Spam<span>0</span></li>
    <li >Trash<span>0</span></li>
  </ul>
</div>
<div class="card">
  <div class="card-header">
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
    <div class="col">
    <div class="card">
  <div class="card-header">
<h5>Latest Annoucement</h5>
  </div>
  <div class="card-body">
    <h5 class="card-title">No Annoucement Found</h5>
  </div>
</div>
    </div>
  </div>
</div>
  </div>
  )
}
