import React from "react";
import AboutProduct from "./AboutProduct";
import CategoryBox from "./CategoryBox";
import HotOffer from "./HotOffer";
import ProductDetails from "./ProductDetails";
import SimilarProducts from "./SimilarProducts";
import TopPanes from "./TopPanes";

export default function SingleProductArea() {
  return (
    <section className="sg-product">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <TopPanes />
              <AboutProduct />
              <ProductDetails />
              <SimilarProducts />
            </div>
          </div>
          <div className="col-md-3">
            <CategoryBox />
            <HotOffer />
            <div className="add-box">
              <a href="">
                <img src="images/s-banner1.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
