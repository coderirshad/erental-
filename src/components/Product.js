import React from 'react'

export default function Product() {

//   useEffect(() => {

//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React Hooks POST Request Example' })
//     };
//     fetch('http://144.24.99.210:4545/product', requestOptions)
//         .then(response => response.json())
//         .then(data => setPostId(data.id));


// }, []);
  return (
    <div className="container ">
      <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">All</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Online</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Instock</a>
  </li>
 
</ul>
  <div className="row justify-content ">
    <div className="col-2">
    <select className="form-select" aria-label="Default select example">
  <option selected>All Dates</option>
  <option value="1">January 2022</option>
  <option value="2">February 2022</option>
  <option value="3">March 2022</option>
</select>

    </div>

    <div className="col-3 ">
    <select className="form-select" aria-label="Default select example">
  <option selected>Select a category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>

    <div className="col-4 ">
    <form className="d-flex ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" className="btn btn-danger">Search</button>
      </form>
    </div>
  </div>
<br>
</br>


  <div className="col-3">
    <div className="d-flex">
    <select className="form-select me-2 " aria-label="Default select example">
  <option selected>Product Type</option>
  <option value="1">January 2022</option>
  <option value="2">February 2022</option>
  <option value="3">March 2022</option>
</select>

<button type="button" className="btn btn-danger">Filter</button>
</div>
    </div>
    <br>
</br>
    <div className="col-3 ">
    <div className="d-flex">
    <select className="form-select me-2" aria-label="Default select example">
  <option selected>Bulk Action</option>
  <option value="1">January 2022</option>
  <option value="2">February 2022</option>
  <option value="3">March 2022</option>
</select>
<button type="button" className="btn btn-danger">Apply</button>
</div>
    </div>

<br></br>
    {/* <div className="table-responsive" >
    <table className="table ">
  
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">SKU</th>
      <th scope="col">Stock</th>
      <th scope="col">Price</th>
      <th scope="col">Earning</th>
      <th scope="col">Type</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="images/sbar-6.png" alt=""/></th>
      <td>Exhibition Hall</td>
      <td>Online</td>
      <td>-</td>
      <th >Instock</th>
      <td>12000</td>
      <td>11000</td>
      <td>-</td>
      <td>19</td>
    </tr>
   
  </tbody>
</table>
</div> */}
</div>
  )
}
