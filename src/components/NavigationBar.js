import {React,useState,useEffect} from "react";
import GetAuthorization from "./GetAuthorization";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";
import { CheckAuth } from "./CheckAuth";

const NavigationBar = ()=>{
    const [user, setuser] = useState({});
    const [role,setrole] = useState("customer");
    const [loading,setloading] = useState(true); 

    const fetchData = ( ) =>{ 
        setloading(true);
        if(CheckAuth()){              
            fetch(`http://${process.env.REACT_APP_URL}/user`,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': GetAuthorization()
                }
            }).then((response)=>{
                return response.json(); 
            }).then((data)=>{  
                setuser(data); 
                setloading(false)  
            })                    
        }
    }
    useEffect(() => {
       fetchData()
    }, [])
    useEffect(() => {
        if(user?.roles?.includes('admin')){
            setrole("admin")
        }
    }, [user])
     return ( 
        <> 
            {/* use loading State for better UI (animation while loading website) */}
            {(role=="admin")?<AdminNav></AdminNav>:<UserNav></UserNav>}
        </>
     )
}

export default NavigationBar;
