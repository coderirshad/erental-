import {React,useState,useEffect} from "react";
import GetAuthorization from "./GetAuthorization";
import AdminNav from "./AdminNav";
import UserNav from "./UserNav";

const NavigationBar = ()=>{
    const [user, setuser] = useState({});
    const [role,setrole] = useState("customer");
    const [status,setstatus] = useState(200);
    const fetchData = ( ) =>{
        fetch(`http://${process.env.REACT_APP_URL}/user`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': GetAuthorization()
            }
        }).then((response)=>{
            setstatus(response.status);
            return response.json(); 
        }).then((data)=>{  
            setuser(data);   
        })
        for(var i=0;i<user.roles.length;i++){
            if(user.roles[i]=='admin'){
                setrole("admin");
            }
        }
    }
    
    useEffect(() => {
        return () => {
            fetchData();
        };
    }, [])
     return ( 
        <> 
            {(role=="customer" || status!=200)?<UserNav></UserNav>:<AdminNav></AdminNav>}
        </>
     )
}

export default NavigationBar;
