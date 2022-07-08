import React,{useEffect,useState} from 'react';

 function Contact() {

    // const [cont, setcont] =  useState([]);
    // const fetchData =()=>{
    //     fetch("http://144.24.99.210:4545/contact").then((response)=>{
    //         return response.json();
    //     }).then((data)=>{
    //          console.log(data);
          
          
    //     })
    // }
    // useEffect(()=>{
    //     fetchData();
    // },[cont])
    const[name, setname]=useState(" ");
    const[email, setemail]=useState(" ");
    const[subject, setsubject]=useState(" ");
    const[message, setmessage]=useState(" ");
    function saveUsers(){
      // console.warn(name,email,subject,message);
let data={name,email,subject,message}
      fetch("http://144.24.99.210:4545/contact",{
method:'POST',
headers:{
  'Accept':'application/json',
  'Content-Type':'application/json'
},
body:JSON.stringify(data)
      }).then((result)=>{
        console.warn("result",result);
        result.json().then((resp)=>{
          console.warn("resp");
        })
      })
    }
  return (
     
    <div><section className="contact-area">
    <div id="map"></div>
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-5">
                <div className="contact-box-tp">
                    <h4>Contact Info</h4>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-box d-flex">
                            <div className="contact-icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="contact-content">
                                <h6>Our Location</h6>
                                <p>795 South Park Avenue, Long Island, Newyork, NY 94107.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact-box d-flex">
                            <div className="contact-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="contact-content">
                                <h6>Email Address</h6>
                                <p>enquery@domain.com <br/>help@yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact-box d-flex">
                            <div className="contact-icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="contact-content">
                                <h6>Phone Number</h6>
                                <p>+1 908 875 7678 <br/>+1 908 875 7637</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-link">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="fa fa-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="fa fa-youtube"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                    <h4>Get In Touch</h4>
                    <form action="/">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Full Name:-<input type="text" id="name" value={name} onchange={(e)=>{setname(e.target.value)}} name="name" placeholder="Full Name" required=""/></p>
                             </div>
                            <div className="col-md-6">
                                <p>Email:-<input type="text" id="email" value={email} onchange={(e)=>{setemail(e.target.value)}} name="email" placeholder="Email" required=""/></p>
                            </div>
                            <div className="col-md-12">
                                <p>Subject:-<input type="text" id="subject" value={subject} onchange={(e)=>{setsubject(e.target.value)}} name="subject" placeholder="Subject"/></p>
                            </div>
                            <div className="col-md-12">
                                <p>Message:-<textarea name="message" id="message" value={message} onchange={(e)=>{setmessage(e.target.value)}} placeholder="Message" required=""/></p>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" onClick={saveUsers}>Send Message</button>
                            </div>
                        </div>
                        <div id="form-messages"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  );
}
export default Contact;