import React from 'react'

export default function LastFooterCopyright() {
  return (
    <section className="footer-btm">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Copyright &copy; 2020 | Designed With <i className="fa fa-heart"></i> by <a href="#" target="_blank">SnazzyTheme</a></p>
                    </div>
                    <div className="col-md-6 copyright_padding">
                        <img src="images/payment.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="back-to-top text-center">
                <img src="images/backtotop.png" alt="" className="img-fluid"/>
            </div>
    </section>
  )
}
