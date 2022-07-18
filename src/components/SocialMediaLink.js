import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
const SocialMediaLink = ( ) =>{
    return <>
           <div className="footer">
                <div className="subcription">
                    <h5>Subscribe for top stories, new launches & expert reviews!</h5>
                    <h5 id="subafter">Subscribe for top stories!</h5>
                    <ul>
                        <li className="email"><input type="text" placeholder="Enter Your Email"/><SubscriptionsIcon style={{fontSize:"30px",marginLeft:"12px"}}></SubscriptionsIcon></li>
                        <li><a href="https://www.facebook.com/erentals.in" ><FacebookIcon></FacebookIcon></a></li>
                        <li><a href="https://www.youtube.com/channel/UC6zM6tvtMNeBqZ9yLKs36qQ" ><YouTubeIcon></YouTubeIcon></a></li>
                        <li><a href="https://www.instagram.com/erentalshnd/" ><InstagramIcon></InstagramIcon></a></li>
                        <li><a href="https://www.linkedin.com/company/erentals/" ><LinkedInIcon></LinkedInIcon></a></li>
                        <li><a href="https://wa.me/918652348165?text=" ><WhatsAppIcon></WhatsAppIcon></a></li>
                    </ul>
                </div>
                <div className="emailcontainer">
                    <li id="email"><input type="text" placeholder="Enter Email for  Notifications"/><SubscriptionsIcon style={{fontSize:"30px"}}></SubscriptionsIcon></li>
                </div>
    </div>
    </>
}
export default SocialMediaLink;