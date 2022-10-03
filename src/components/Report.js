import React from 'react';

export default function Report() {
  return (


    <div className="container" style={{marginLeft:"30%", position:"absolute", top:"25%"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Overview</a>
        <a className="nav-link" href="#">Salse by day</a>
        <a className="nav-link" href="#">Top selleing</a>
        <a className="nav-link" href="#">Top Earning</a>
        <a className="nav-link" href="#">Statement</a>
        
      </div>
    </div>
  </div>
</nav>

    <div className="row">
      <div className="col-3">
      <div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">₹0.00 <br></br>
sales in this period</li>
    <li className="list-group-item">₹0.00 <br></br>
average daily sales</li>
    <li className="list-group-item">0
    <br></br>
orders placed</li>
<li className="list-group-item">0
    <br></br>
orders placed</li>
<li className="list-group-item">₹0.00 <br></br>
charged for shipping</li>
<li className="list-group-item">₹0.00 <br></br>
worth of coupons used</li>

  </ul>
</div>
      </div>
      <div className="col-4">
    <h1>This months sales</h1>
    <div className="card">
  <div className="card-body">
    

    <p className="card-text">Sales Total</p>
    <p className="card-text">Number of orders</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
      </div>
    
    </div>
  </div>
  );
}

