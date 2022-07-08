import React from 'react';

export default function Report() {
  return (


    <div class="container" style={{marginLeft:"30%", position:"absolute", top:"80%"}}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Overview</a>
        <a class="nav-link" href="#">Salse by day</a>
        <a class="nav-link" href="#">Top selleing</a>
        <a class="nav-link" href="#">Top Earning</a>
        <a class="nav-link" href="#">Statement</a>
        
      </div>
    </div>
  </div>
</nav>

    <div class="row">
      <div class="col-3">
      <div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">₹0.00 <br></br>
sales in this period</li>
    <li class="list-group-item">₹0.00 <br></br>
average daily sales</li>
    <li class="list-group-item">0
    <br></br>
orders placed</li>
<li class="list-group-item">0
    <br></br>
orders placed</li>
<li class="list-group-item">₹0.00 <br></br>
charged for shipping</li>
<li class="list-group-item">₹0.00 <br></br>
worth of coupons used</li>

  </ul>
</div>
      </div>
      <div class="col-4">
    <h1>This months sales</h1>
    <div class="card">
  <div class="card-body">
    

    <p class="card-text">Sales Total</p>
    <p class="card-text">Number of orders</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
      </div>
    
    </div>
  </div>
  );
}

