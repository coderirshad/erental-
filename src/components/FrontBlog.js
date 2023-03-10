import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';  
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

const FrontBlog = ( ) => {
     const [data, setData] = useState([]);
     const [loader, setLoader] = useState(true);
     const fetchData = ()=>{
        fetch(`http://${process.env.REACT_APP_URL}/news`).then((response)=>{
            return response.json();
        }).then((data)=>{
            setData(data)
            setLoader(false);
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

     return(
        <div className='Hotdeals'>
                <div className='Hotdeals_width'>
                    <div className='hotdeals_header FontBlog_after'>
                       <h1>Recent Services</h1>
                       <div className='hotdeals_view'>  
                       </div>
                    </div>
                    <hr></hr>
                    <div className='Hotdeals_item_box'>
                    <div className="FontBlog_item">
                            <div className="FontBlog_img">
                               <a href="" target="_blank"><img src="https://drive.google.com/uc?export=view&id=13tS9doCqrMN6FObi2nL_cZT8UsR-sh9y"  alt="BlogVideo"/></a>
                            </div>
                            <div className="fontBlog_Namedate">
                                 <div className="FontBlog_userLogo">
                                     <PersonIcon style={{fontSize:"18px"}}></PersonIcon>
                                     <div className="FontBlog_userName">John Doe</div>
                                 </div>
                                 <div className="FontBlog_date">
                                     <CalendarMonthIcon  style={{fontSize:"18px"}}></CalendarMonthIcon>
                                     <div className="FontBlog_userdate">January 29, 2023</div>
                                 </div>
                            </div>
                            <div className="FontBlog_Content">
                                <a href=""> Make a Lasting Impression at Your Next Exhibition with eRentals</a>
                            </div>
                       </div>

                       <div className="FontBlog_item">
                            <div className="FontBlog_img">
                               <a href="" target="_blank"><img src="https://drive.google.com/uc?export=view&id=13tS9doCqrMN6FObi2nL_cZT8UsR-sh9y"  alt="BlogVideo"/></a>
                            </div>
                            <div className="fontBlog_Namedate">
                                 <div className="FontBlog_userLogo">
                                     <PersonIcon style={{fontSize:"18px"}}></PersonIcon>
                                     <div className="FontBlog_userName">John Doe</div>
                                 </div>
                                 <div className="FontBlog_date">
                                     <CalendarMonthIcon  style={{fontSize:"18px"}}></CalendarMonthIcon>
                                     <div className="FontBlog_userdate">January 29, 2023</div>
                                 </div>
                            </div>
                            <div className="FontBlog_Content">
                                <a href=""> Make a Lasting Impression at Your Next Exhibition with eRentals</a>
                            </div>
                       </div>


                       <div className="FontBlog_item">
                            <div className="FontBlog_img">
                               <a href="" target="_blank"><img src="https://drive.google.com/uc?export=view&id=13tS9doCqrMN6FObi2nL_cZT8UsR-sh9y"  alt="BlogVideo"/></a>
                            </div>
                            <div className="fontBlog_Namedate">
                                 <div className="FontBlog_userLogo">
                                     <PersonIcon style={{fontSize:"18px"}}></PersonIcon>
                                     <div className="FontBlog_userName">John Doe</div>
                                 </div>
                                 <div className="FontBlog_date">
                                     <CalendarMonthIcon  style={{fontSize:"18px"}}></CalendarMonthIcon>
                                     <div className="FontBlog_userdate">January 29, 2023</div>
                                 </div>
                            </div>
                            <div className="FontBlog_Content">
                                <a href=""> Make a Lasting Impression at Your Next Exhibition with eRentals</a>
                            </div>
                       </div>

                       

                        
                        
                    </div>
                </div>
            </div>
     )
}
export default FrontBlog;



/* <section className="f-blog">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sec-title">
                        <h2 className='py-md-5' style={{color:"#144169", fontWeight:"bold"}}>RECENT SERVICES</h2>
                        </div>
                        {!loader && 
                        <OwlCarousel className="fb-slider owl-carousel"
                         items={4} 
                         nav
                         margin={30}
                         responsive={{
                            0: {
                                items: 1,
                            },
                            400: {
                                items: 2,
                            },
                            600: {
                                items: 3,
                            },
                            700: {
                                items: 4,
                            },
                            1000: {
                                items: 5,

                            }}}  
                         loop>                       
                        {data.map((data) =>{
                            return(
                            <div className="blog-item">
                                <div className="blog-img">
                                    <a href={data.video_url} target={"_blank"}><img src={data.thumbnail} alt="" className="img-fluid"/></a>
                                </div>
                                <div className="blog-content">
                                    <h5><a href={data.video_url} target={"_blank"}>{data.title}</a></h5>
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="fa fa-user-o"></i><a href="">John</a></li>
                                        <li className="list-inline-item"><i className="fa fa-calendar"></i>{data.date}</li>
                                    </ul>
                                    <p>{data.description}</p> 
                                </div>
                            </div>
                        )})}
                        </OwlCarousel>
                    }
                        
                    </div>
                </div>
            </div>
        </section> */