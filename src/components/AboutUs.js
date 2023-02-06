import React from 'react';
export default function AboutUs() {
    
  return (
    <div>
        <div className='container-fluid img-fluid' style={{height : "60vh", padding:'0'}}>
          <img src="https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt="..." style={{width:"100%", height:"100%"}} />
        </div>
        <div className='container-fluid bg-light'>
             <div className='container p-4 border bg-white'>
                 <h5 style={{fontWeight:"700", color:"#144169"}}>ABOUT US</h5>
                 <div className='px-5 py-3 mt-5' style={{textAlign:'justify'}}>
                   <h3 className='px-3 py-2 formatcolor' style={{textDecoration:"none",fontSize:"16px"}}>Who We Are</h3>
                      <p className='px-5 py-2'>
                        eRentals HND PVT LTD  is a technology based e-commerce IIT Bombay startup founded by a PhD research scholar in 2022 with a hightech modern innovative idea to formalize and properly  organize the rental sector. Its mission is to establish a systematic, ordered and an efficient digital platform in the Indian rental marketplace through resolving the existing problems in the rental segment.
                      </p>
                      <p className='px-5 py-2'>
                         eRentals has a strong potential to lead the rental market place of the country with a vision to maximize the utility & value of each product by promoting synergetic consumption and encouraging circular utilization, thus contributing to create a more sustainable future. We provide value added propositions to both our vendors and as well as our customers.
                      </p>
                    <h3 className='px-3 py-2 formatcolor' style={{textDecoration:"none",fontSize:"16px"}}>Products & Services</h3>
                      <p className='px-5 py-2'>
                         eRentals target all the event related rental customers including corporate events,    institutional events, conferences & exhibitions organizers, production houses and individuals or family functions.
                      </p>
                      <p className='px-5 py-2'>
                      eRentals provide a wide variety of products ranging from furniture, electronics, electrical appliances, light & sound devices, special effect gadgets, production houses items, decorations, octonorm stalls, cold storage devices, tents and a lot more……
                      </p>
                    <h3 className='px-3 py-2 formatcolor' style={{textDecoration:"none",fontSize:"16px"}}>What We Do</h3>
                      <p className='px-5 py-2'>
                        eRentals provide a well organized unique digital platform to onboard different types of vendors connected with rental sectors and enable them to upload their rental products on the website easily through providing a separate dashboard for them. Similarly customers will also be able to register through different channels on the website to get discounts and seasonal offers and product details as well. Customers can easily select any item available on our website and easily book it through paying the rent using the available mode. eRentals always prioritize the customer's needs and try to provide the best quality & timely service.  eRentals make your events more easy, happy, precious and amazing.
                      </p>
                 </div>
             </div>
             <h4 className='formatcolor py-5' style={{fontWeight:"700"}}>MEET OUR TEAM</h4>
             <div className='container pb-5 img-fluid' style={{height : "80vh", padding:'0'}}>
                <img src="https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" alt="..." style={{width:"100%", height:"100%"}} />
             </div>
        </div>
    </div>
  )
}