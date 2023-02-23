import React from 'react'
import "../StaticHome.css"
import Service from './Service'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Locations from './Locations'
import FooterArea from './FooterArea'
import Staticrowsel from './Staticrowsel'

 function StaticHome() {

  // const saveFile = () => {
  //   fileSaver.saveAs(
  //     process.env.REACT_APP_CLIENT_URL + "./qoute/Resume-Sarf raj shekh (15)",
  //     "MyCV.pdf"
  //   );
  // }
  return (
    <div>
        <header className='container-fluid' id='header'>
            <nav className='container-fluid py-1 flexitem sticky' id='home' >
                <div>
                   <img src="images/logo3.png" alt="" className="img-logo" />
                </div>
                <div>
                   <ul className='d-flex justify-content-center align-items-center ulstyle'>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#service'>Services</a></li>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                        {/* <li><Link><button className='btn'>Call</button></Link></li>
                        <li><Link><button className='btn'>View catalogue</button></Link></li> */}
                   </ul>
                </div>
            </nav>
        </header>

        {/* carousel */}
      <div id='home' ></div>
       <Staticrowsel />
      <div className='bg-light pt-4 h2' id='service' style={{color:"#073b4c", fontWeight:"700"}}>Our Service</div>
       <Service />
       <div className='bg-light pt-5 pb-5 h2' style={{color:"#073b4c", fontWeight:"700"}}>ABOUT US</div>
       <div id="about"><AboutUs /></div>
       <Locations />
       <div id="contact"><Contact /></div>
       <FooterArea />
    </div>
  )
}


export default StaticHome;