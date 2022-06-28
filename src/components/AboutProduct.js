import React from "react";

export default function AboutProduct() {
  return (
    <div className="col-md-7">
      <div className="sg-content">
        <div className="pro-tag">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a href="">Home Appliance ,</a>
            </li>
            <li className="list-inline-item">
              <a href="">Smart Led Tv</a>
            </li>
          </ul>
        </div>
        <div className="pro-name">
          <p>Samsung Smart Led Tv With Speaker</p>
        </div>
        <div className="pro-rating">
          <ul className="list-unstyled list-inline">
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
            <li className="list-inline-item">
              <a href="">( 09 Review )</a>
            </li>
          </ul>
        </div>
        <div className="pro-price">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">$129.00</li>
            <li className="list-inline-item">$199.00</li>
          </ul>
          <p>
            Availability : <span>In Stock</span> <label>(13 Available)</label>
          </p>
        </div>
        <div className="colo-siz">
          <div className="color">
            <ul className="list-unstyled list-inline">
              <li>Color :</li>
              <li className="list-inline-item">
                <input type="radio" id="color-1" name="color" value="color-1" />
                <label for="color-1">
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                </label>
              </li>
              <li className="list-inline-item">
                <input type="radio" id="color-2" name="color" value="color-2" />
                <label for="color-2">
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                </label>
              </li>
              <li className="list-inline-item">
                <input type="radio" id="color-3" name="color" value="color-3" />
                <label for="color-3">
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                </label>
              </li>
              <li className="list-inline-item">
                <input type="radio" id="color-4" name="color" value="color-4" />
                <label for="color-4">
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                </label>
              </li>
              <li className="list-inline-item">
                <input type="radio" id="color-5" name="color" value="color-5" />
                <label for="color-5">
                  <span>
                    <i className="fa fa-check"></i>
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <div className="size">
            <ul className="list-unstyled list-inline">
              <li>Size :</li>
              <li className="list-inline-item">
                <input type="radio" id="size-1" name="size" value="size-1" />
                <label for="size-1">S</label>
              </li>
              <li className="list-inline-item">
                <input type="radio" id="size-2" name="size" value="size-2" />
                <label for="size-2">M</label>
              </li>
              <li className="list-inline-item">
                <input type="radio" id="size-3" name="size" value="size-3" />
                <label for="size-3">L</label>
              </li>
            </ul>
          </div>
          <div className="qty-box">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">Qty :</li>
              <li className="list-inline-item quantity buttons_added">
                <input type="button" value="-" className="minus" />
                <input
                  type="number"
                  step="1"
                  min="1"
                  max="10"
                  value="1"
                  className="qty text"
                  size="4"
                  readonly
                />
                <input type="button" value="+" className="plus" />
              </li>
            </ul>
          </div>
          <div className="pro-btns">
            <a href="" className="cart">
              Add To Cart
            </a>
            <a
              href=""
              className="fav-com"
              data-toggle="tooltip"
              data-placement="top"
              title="Wishlist"
            >
              <img src="images/it-fav.png" alt="" />
            </a>
            <a
              href=""
              className="fav-com"
              data-toggle="tooltip"
              data-placement="top"
              title="Compare"
            >
              <img src="images/it-comp.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}