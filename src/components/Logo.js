import React from 'react'

export default function logo() {
  return (
   
        <section className="logo-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                     <a href="/"><img src="./images/logo4.png"alt="Error"/></a>
                        </div>
                    </div>
                    <div className="col-md-5 padding-fix">
                        <form action="/" className="search-bar">
                            <input type="text" name="search-bar" placeholder="I'm looking for..."/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <div className="carts-area d-flex">
                            <div className="call-box d-flex">
                                <div className="call-ico">
                                    <img src="" alt=""/>
                                </div>
                                <div className="call-content">
                                    <span>Call Us</span>
                                    <p>+1 (111) 426 6573</p>
                                </div>
                            </div>
                            <div className="cart-box ml-auto text-center">
                                <a href="" className="cart-btn">
                                    <img src="./images/cart.png" alt="cart"/>
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
