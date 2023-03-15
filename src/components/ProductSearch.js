import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutProduct from "./AboutProduct";
import HotDealBox from "./HotDealBox";
const ProductSearch = () => {
  const location = useLocation();
  console.clear();
  console.log(location)

  const [productSerach, setproductSearch] = useState([]);
  console.log("location state is", location);
  useEffect(() => {
    fetchdata();
  }, [location]);
  const fetchdata = async () => {
    const response = await fetch(
      `http://${process.env.REACT_APP_URL}/search${location.search}`
    )
      .then((response) => {
        console.log("response is", response);
        return response.json();
      })
      .then((data) => {
        setproductSearch(data);
      });
  };
  console.log("product search data is", productSerach);
  return !productSerach.length ? (
    <h1></h1>
  ) : (
    <div className="parent" style={{width:"112rem", margin:"auto", display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
      {productSerach.map((product) => (
        <HotDealBox data={product} />
      ))}
    </div>
  );
};

export default ProductSearch;
