import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function SimilarProducts() {
  return (
    <div className="col-md-12">
      <div className="sim-pro">
        <div className="sec-title">
          <h5>Similar Product</h5>
        </div>
        <OwlCarousel   className="sim-slider owl-carousel"items={4}  nav   loop  >
          <div className="sim-item">
            <div className="sim-img">
              <img
                className="main-img img-fluid"
                src="images/tab-5.png"
                alt=""
              />
              <img
                className="sec-img img-fluid"
                src="images/tab-16.png"
                alt=""
              />
              <div className="layer-box">
                <a
                  href=""
                  className="it-comp"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Compare"
                >
                  <img src="images/it-comp.png" alt="" />
                </a>
                <a
                  href=""
                  className="it-fav"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Favourite"
                >
                  <img src="images/it-fav.png" alt="" />
                </a>
              </div>
            </div>
            <div className="sim-heading">
              <p>
                <a href="">Item Title Here</a>
              </p>
            </div>
            <div className="img-content d-flex justify-content-between">
              <div>
                <ul className="list-unstyled list-inline fav">
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star-o"></i>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline price">
                  <li className="list-inline-item">$120.00</li>
                  <li className="list-inline-item">$150.00</li>
                </ul>
              </div>
              <div>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to Cart"
                >
                  <img src="images/it-cart.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="sim-item">
            <div className="sim-img">
              <img
                className="main-img img-fluid"
                src="images/tab-11.png"
                alt=""
              />
              <img
                className="sec-img img-fluid"
                src="images/tab-16.png"
                alt=""
              />
              <div className="layer-box">
                <a
                  href=""
                  className="it-comp"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Compare"
                >
                  <img src="images/it-comp.png" alt="" />
                </a>
                <a
                  href=""
                  className="it-fav"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Favourite"
                >
                  <img src="images/it-fav.png" alt="" />
                </a>
              </div>
            </div>
            <div className="sim-heading">
              <p>
                <a href="">Item Title Here</a>
              </p>
            </div>
            <div className="img-content d-flex justify-content-between">
              <div>
                <ul className="list-unstyled list-inline fav">
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star-o"></i>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline price">
                  <li className="list-inline-item">$120.00</li>
                  <li className="list-inline-item">$150.00</li>
                </ul>
              </div>
              <div>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to Cart"
                >
                  <img src="images/it-cart.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="sim-item">
            <div className="sim-img">
              <img
                className="main-img img-fluid"
                src="images/tab-7.png"
                alt=""
              />
              <img
                className="sec-img img-fluid"
                src="images/tab-16.png"
                alt=""
              />
              <div className="layer-box">
                <a
                  href=""
                  className="it-comp"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Compare"
                >
                  <img src="images/it-comp.png" alt="" />
                </a>
                <a
                  href=""
                  className="it-fav"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Favourite"
                >
                  <img src="images/it-fav.png" alt="" />
                </a>
              </div>
            </div>
            <div className="sim-heading">
              <p>
                <a href="">Item Title Here</a>
              </p>
            </div>
            <div className="img-content d-flex justify-content-between">
              <div>
                <ul className="list-unstyled list-inline fav">
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star-o"></i>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline price">
                  <li className="list-inline-item">$120.00</li>
                  <li className="list-inline-item">$150.00</li>
                </ul>
              </div>
              <div>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to Cart"
                >
                  <img src="images/it-cart.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="sim-item">
            <div className="sim-img">
              <img
                className="main-img img-fluid"
                src="images/tab-9.png"
                alt=""
              />
              <img
                className="sec-img img-fluid"
                src="images/tab-16.png"
                alt=""
              />
              <div className="layer-box">
                <a
                  href=""
                  className="it-comp"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Compare"
                >
                  <img src="images/it-comp.png" alt="" />
                </a>
                <a
                  href=""
                  className="it-fav"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Favourite"
                >
                  <img src="images/it-fav.png" alt="" />
                </a>
              </div>
            </div>
            <div className="sim-heading">
              <p>
                <a href="">Item Title Here</a>
              </p>
            </div>
            <div className="img-content d-flex justify-content-between">
              <div>
                <ul className="list-unstyled list-inline fav">
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star-o"></i>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline price">
                  <li className="list-inline-item">$120.00</li>
                  <li className="list-inline-item">$150.00</li>
                </ul>
              </div>
              <div>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to Cart"
                >
                  <img src="images/it-cart.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="sim-item">
            <div className="sim-img">
              <img
                className="main-img img-fluid"
                src="images/tab-13.png"
                alt=""
              />
              <img
                className="sec-img img-fluid"
                src="images/tab-16.png"
                alt=""
              />
              <div className="layer-box">
                <a
                  href=""
                  className="it-comp"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Compare"
                >
                  <img src="images/it-comp.png" alt="" />
                </a>
                <a
                  href=""
                  className="it-fav"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Favourite"
                >
                  <img src="images/it-fav.png" alt="" />
                </a>
              </div>
            </div>
            <div className="sim-heading">
              <p>
                <a href="">Item Title Here</a>
              </p>
            </div>
            <div className="img-content d-flex justify-content-between">
              <div>
                <ul className="list-unstyled list-inline fav">
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star-o"></i>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline price">
                  <li className="list-inline-item">$120.00</li>
                  <li className="list-inline-item">$150.00</li>
                </ul>
              </div>
              <div>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to Cart"
                >
                  <img src="images/it-cart.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        
        </OwlCarousel>
      </div>
    </div>
  );
}
