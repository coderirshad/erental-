import React,{useEffect,useState} from 'react';
import GetAuthorization from './GetAuthorization';
export default function ProfileInformation() {

    const [userData, setuserData] =  useState([]);
    const fetchData = async() =>{
      await fetch(`http://${process.env.REACT_APP_URL}/user`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }  
        })
        .then((response)=>{
            return  response.json();
        }).then((data)=>{
            setuserData(data)          
        })
    }
    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) ;
  return (

    <div>  
          <div className='container-fluid shadow text-start m-2'>
               <div className='d-flex flex-row shadow-sm mb-5 p-2'>
                  <div className='text-left me-auto'>
                       <h5 className='h'>Name : {userData.user_name}</h5>
                       <p className='h-p'>E-Mail : {userData.email}</p>
                  </div>
                  <div className=''>
                       <p className='h ms-auto text-right'>Contact No : {userData.mobile}</p>
                  </div>
               </div>
               <div className='row pb-3 shadow-sm px-5'>
                  <h3 className="profile" style={{color:"tomato"}}>Profile Verification</h3>
                  <p className='px-3 pt-2'>here you can add the request and you can edit  your profile</p>
               </div>
               <div>
               <div className='row shadow-sm px-5 py-5'>
                    <div className='d-flex justify-content-between align-item-center'>
                    <div className='d-flex justify-content-between align-item-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m23.95 42-14.5-7.95v-12L2 18 23.95 6 46 18v15.85h-3v-14.1l-4.55 2.3v12Zm0-15.4L39.7 18 23.95 9.55 8.3 18Zm0 12 11.5-6.35v-8.4L23.95 30l-11.5-6.25v8.5Zm.05-12Zm-.05 3.7Zm0 0Z"/></svg>
                        <h3 className='h4 position-relative m-2'>Student</h3>
                    </div>
                    <div>
                        <button className='btn btn-lg btn-primary'>Edit</button>
                    </div>
                  </div>
               </div>
               <div className='row shadow-sm pt-3'>
                        <div className="accordion" id="accordionExample" style={{width:"100%"}}>
                                <div className="mb-3 bg-body rounded px-4 py-2">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" style={{fontSize:"20px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M29.95 25.3q1.5 0 2.575-1.075Q33.6 23.15 33.6 21.65q0-1.5-1.075-2.575Q31.45 18 29.95 18q-1.5 0-2.575 1.075Q26.3 20.15 26.3 21.65q0 1.5 1.075 2.575Q28.45 25.3 29.95 25.3Zm-8 8.7h16v-.95q0-2.1-2.125-3.25t-5.875-1.15q-3.75 0-5.875 1.15t-2.125 3.25Zm-14.9 6q-1.2 0-2.1-.925-.9-.925-.9-2.075V11q0-1.15.9-2.075Q5.85 8 7.05 8h14l3 3h17q1.15 0 2.075.925.925.925.925 2.075v23q0 1.15-.925 2.075Q42.2 40 41.05 40Zm0-29v26h34V14H22.8l-3-3H7.05Zm0 0v26Z"/></svg>
                                    <h3 className='h4 position-relative' style={{top:"8px", marginLeft:"20px"}}>Government ID</h3>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body h4">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                                </div>
                                <hr style={{border:"1px solid silver"}}></hr>
                                <div className="mb-3 bg-body rounded px-4">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed py-4 " style={{fontSize:"20px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M36.6 15.8h3V9.4H46v-3h-6.4V0h-3v6.4h-6.4v3h6.4ZM24 23.5q1.45 0 2.475-1.025Q27.5 21.45 27.5 20q0-1.45-1.025-2.475Q25.45 16.5 24 16.5q-1.45 0-2.475 1.025Q20.5 18.55 20.5 20q0 1.45 1.025 2.475Q22.55 23.5 24 23.5ZM24 44q-8.05-6.85-12.025-12.725Q8 25.4 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q.85 0 1.625.075T27.2 4.3v3.1q-.75-.2-1.55-.3Q24.85 7 24 7q-5.45 0-9.225 3.75Q11 14.5 11 20.4q0 3.75 3.25 8.675Q17.5 34 24 40.05q6.65-6.05 9.825-10.975Q37 24.15 37 20.4q0-.4-.025-.8t-.075-.8h3.05q.05.4.05.8v.8q0 5-3.975 10.875T24 44Zm0-24.7Z"/></svg>
                                    <h3 className='h4 position-relative' style={{top:"8px", marginLeft:"20px"}}>Address proof</h3>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body h4">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                                </div>
                                <hr style={{border:"1px solid silver"}}></hr>
                                <div className="mb-3 bg-body rounded px-4">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed py-4" style={{fontSize:"20px"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d="m23.95 42-14.5-7.95v-12L2 18 23.95 6 46 18v15.85h-3v-14.1l-4.55 2.3v12Zm0-15.4L39.7 18 23.95 9.55 8.3 18Zm0 12 11.5-6.35v-8.4L23.95 30l-11.5-6.25v8.5Zm.05-12Zm-.05 3.7Zm0 0Z"/></svg>
                                    <h3 className='h4 position-relative' style={{top:"8px", marginLeft:"20px"}}>Secondary contact</h3>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body h4">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                        </div>
                    </div>
               </div>
          </div>
    </div>
    </div>       
  );
}
