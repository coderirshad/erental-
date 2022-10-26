import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import GetAuthorization from './GetAuthorization';
export default function MyAccountDashSide() {

    const [userData, setuserData] =  useState([]);
    const [scw, setScw] = useState(window.innerWidth);
    const fetchData = async() =>{
      await fetch(`http://${process.env.REACT_APP_URL}/user`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
              }  
        })
        .then((response)=>{
            return response.json();
        }).then((data)=>{
             setuserData(data)          
        })
    }

    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }

    useEffect(()=>{
        fetchData();
        InitialActiveLink();

        function handleWindowResize() {
          setScw(window.innerWidth);
        }
        
        window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
         //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) ;
    const options = ['ProfileInformation' ,'Quotes' , 'Orders' , 'Downloads' , 'PaymentMethod' , 'Adresses']
    const [state, setState] =  useState({active:""});
    
    const InitialActiveLink = ()=>{
        const url = window.location.href;
        const arr = url.split("/");
        setState({active: arr[arr.length-1]});
    }
    const handleClick = (option)=>{
        setState({ active: option });
    }
    return (
      <>
      { scw < 1024 ?
         (<nav className="navbar navbar-dark bg-dark fixed shadow p-3 my-3 container">
         <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
         <span className="navbar-toggler-icon"></span>
         </button>
         <a className="navbar-brand fw-bold fs-3">Hello {userData.user_name}</a>
     <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
       <div className="offcanvas-header">
         <h5 className="offcanvas-title fw-bold fs-3" id="offcanvasNavbarLabel">Hello {userData.user_name}</h5>
         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
       </div>
       <div className="offcanvas-body">
         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
           {
                    options.map( option  => (
                        <>
                        <li className="nav-item" style={{color:"black"}} data-bs-dismiss="offcanvas"><Link to= {`/myaccount/${option}`} className={`nav-link ${state.active === option ? "active shadow bg-dark text-light" : "text-dark"}`} onClick={()=>handleClick(option)} > <img src="images/sm.png" alt=""/>My {option === "ProfileInformation" ? "Profile" : option}</Link></li>
                        </>
                        ))} 
        </ul>
      </div>
    </div>
  </div>
</nav>):
(<div className='shadow my-2'>
  <div className='col fs-2 fw-bold my-2 border border-secondary shadow border-2' style={{minWidth:"19.3vw"}}>
    Hello {userData.user_name}
  </div>
  <div className='col text-start'>
    <ul className="navbar-nav">
            {
                      options.map( option  => (
                          <>
                          <li className="nav-item" style={{color:"black"}} data-bs-dismiss="offcanvas"><Link to= {`/myaccount/${option}`} className={`nav-link fs-5 px-3 ${state.active === option ? "active shadow bg-dark text-light" : "text-dark"}`} onClick={()=>handleClick(option)} > <img src="images/sm.png" alt=""/>My {option === "ProfileInformation" ? "Profile" : option}</Link></li>
                          </>
                          ))} 
          </ul>
  </div>

</div>)}
</>
  );
}
