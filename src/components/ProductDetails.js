import React from "react";

export default function ProductDetails() {
  return (
    <div className="col-md-12">
      <div className="sg-tab">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#pro-det">
              Product Details
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#rev">
              Reviews (03)
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pro-det"
            role="tabpanel"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              consequatur, expedita, autem labore eos, totam rem quo similique
              est et qui quaerat cumque sed ab quae assumenda. Non, quas, nihil!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
              necessitatibus, dicta iusto in, similique quas
              <br />
              <br /> accusamus debitis illum distinctio nemo numquam obcaecati
              at itaque odio ducimus cupiditate minima labore libero! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              consequatur, expedita, autem labore eos, totam rem quo similique
              est et qui quaerat cumque sed ab quae assumenda. <br />
              <br />
              Non, quas, nihil! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Fugiat, necessitatibus, dicta iusto in,
              similique quas accusamus debitis illum distinctio nemo numquam
              obcaecati at itaque odio ducimus cupiditate.
            </p>
          </div>
          <div className="tab-pane fade" id="rev" role="tabpanel">
            <div className="review-box d-flex">
              <div className="rv-img">
                <img src="images/testimonial-1.jpg" alt="" />
              </div>
              <div className="rv-content">
                <h6>
                  Michel Kolins <span>(Feb 10, 2020)</span>
                </h6>
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
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos a deleniti dolorem architecto quae eligendi
                  voluptatem omnis beatae at aut eveniet repellendus voluptas.
                </p>
              </div>
            </div>
            <div className="review-box d-flex">
              <div className="rv-img">
                <img src="images/testimonial-2.jpg" alt="" />
              </div>
              <div className="rv-content">
                <h6>
                  Jenus Doe <span>(Feb 10, 2020)</span>
                </h6>
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
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
                <p>
                  Consectetur adipisicing elit. Dignissimos a deleniti dolorem
                  architecto quae eligendi voluptatem omnis beatae at aut
                  eveniet repellendus voluptas.
                </p>
              </div>
            </div>
            <div className="review-form">
              <h6>Add Your Review</h6>
              <form action="#">
                <div className="row">
                  <div className="col-md-12">
                    <div className="star-rating">
                      <label>Your Rating*</label>
                      <span className="fa fa-star-o" data-rating="1"></span>
                      <span className="fa fa-star-o" data-rating="2"></span>
                      <span className="fa fa-star-o" data-rating="3"></span>
                      <span className="fa fa-star-o" data-rating="4"></span>
                      <span className="fa fa-star-o" data-rating="5"></span>
                      <input
                        type="hidden"
                        name="whatever1"
                        className="rating-value"
                        value="0"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label>Your Name*</label>
                    <input type="text" name="name" required="" />
                  </div>
                  <div className="col-md-6">
                    <label>Your Email*</label>
                    <input type="text" name="email" required="" />
                  </div>
                  <div className="col-md-12">
                    <label>Your Review*</label>
                    <textarea required=""></textarea>
                    <button type="submit">Add Review</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
