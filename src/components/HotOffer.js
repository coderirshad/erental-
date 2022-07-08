import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function HotOffer() {
  return (
    <div className="ht-offer">
      <div className="sec-title">
        <h6>Hot Offer</h6>
      </div>
      <OwlCarousel   className="ht-body owl-carousel"items={1}  nav   loop  >
        <div className="ht-item">
          <div className="ht-img">
            <a href="#">
              <img src="images/tab-15.png" alt="" className="img-fluid" />
            </a>
            <span>- 59%</span>
            <ul className="list-unstyled list-inline counter-box">
              <li className="list-inline-item">
                185 <p>Days</p>
              </li>
              <li className="list-inline-item">
                11 <p>Hrs</p>
              </li>
              <li className="list-inline-item">
                39 <p>Mins</p>
              </li>
              <li className="list-inline-item">
                51 <p>Sec</p>
              </li>
            </ul>
          </div>
          <div className="ht-content">
            <p>
              <a href="">Items Title Name Enter Here</a>
            </p>
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
        </div>
        <div className="ht-item">
          <div className="ht-img">
            <a href="#">
              <img src="images/tab-14.png" alt="" className="img-fluid" />
            </a>
            <span>- 59%</span>
            <ul className="list-unstyled list-inline counter-box">
              <li className="list-inline-item">
                185 <p>Days</p>
              </li>
              <li className="list-inline-item">
                11 <p>Hrs</p>
              </li>
              <li className="list-inline-item">
                39 <p>Mins</p>
              </li>
              <li className="list-inline-item">
                51 <p>Sec</p>
              </li>
            </ul>
          </div>
          <div className="ht-content">
            <p>
              <a href="">Items Title Name Enter Here</a>
            </p>
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
        </div>
      
      </OwlCarousel>
    </div>
  );
}
