import React from 'react'

export default function LogoArea() {
  return (
    <section className="logo-area2">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="logo">
                        <a href=""><img src="images/logo.png" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-7 padding-fix">
                    <form action="#" className="search-bar d-flex">
                        <input type="text" name="search-bar" placeholder="I'm looking for..."/>
                        <div className="search-cat">
                            <select className="form-control scat-id">
                                <option>All Categories</option>
                                <option>Category One</option>
                                <option>Category Two</option>
                                <option>Category Three</option>
                                <option>Category Four</option>
                                <option>Category Five</option>
                                <option>Category Six</option>
                                <option>Category Seven</option>
                            </select>
                        </div>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="col-lg-3 col-md-2">
                    <div className="carts-area d-flex">
                        <div className="wsh-box ml-auto modified_wishlist">
                            <a href="" data-toggle="tooltip" data-placement="top" title="Wishlist">
                                <img src="images/heart.png" alt="favorite"/>
                                <span>0</span>
                            </a>
                        </div>
                        <div className="cart-box ml-4 modified_cart">
                            <a href="" data-toggle="tooltip" data-placement="top" title="Shopping Cart" className="cart-btn ">
                                <img src="images/cart.png" alt="cart"/>
                                <span>2</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
