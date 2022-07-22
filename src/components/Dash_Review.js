
import React from 'react'

export default function Dash_Review() {
  return (
    <div class="container" style={{marginLeft:"30%", position:"absolute", top:"25%"}}>
<div class="section-title"style={{marginRight:"80%"}} >
          <h2><strong>Reviews</strong></h2>
         
        </div>
<ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Approved</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Pending</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Spam</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Trash</a>
  </li>
</ul>
    <div className="table-responsive" >
    <table className="table ">
  
  <thead>
    <tr>
      <th scope="col">Author</th>
      <th scope="col">Comment</th>
      <th scope="col">Link to</th>
      <th scope="col">Rating</th>
    </tr>
  </thead>
  {/* <tbody>
  {
                    product.map(data => (
                     
    <tr>
   
      <td scope="row"><img src="images/sbar-6.png" alt=""/></td>
      <td>{data.name}</td>
      <td>{data.Status}</td>
      <td>{data.SKU}</td>
      <th >{data.Stock}</th>
      <td>{data.price}</td>
      <td>{data.Earning}</td>
      <td>{data.Type}</td>
      <td>{data.view}</td>
    
    </tr>
                    ))}
  </tbody>   */}
</table>
</div>


<div className="col-3 ">
    <select className="form-select" aria-label="Default select example">
  <option selected>Select a category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div className="col-3">
    <button type="button" className="btn btn-danger">Filter</button>
    </div>
</div>

  )
}

