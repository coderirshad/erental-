import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutProduct from "./AboutProduct";
const ProductSearch = () => {
  const location = useLocation();
  console.clear();
  console.log(location)

  const [productSerach, setproductSearch] = useState([]);
  console.log("location state is", location);
  useEffect(() => {
    fetchdata();
  }, []);
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
    <div className="parent">
      {productSerach.map((product) => (
        <AboutProduct product={product} />
      ))}
    </div>
  );
};

export default ProductSearch;
