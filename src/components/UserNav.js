import {React,useState,useEffect} from "react";
import LogoArea from "./LogoArea";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MainMenuArea2 from "./MainMenuArea2";
import Cluster from "./Cluster.js";

const UserNav = ({login,setlogin})=>{
     return (
        <div className="usernav"> 
            <LogoArea role={"customer"} login={login} setlogin={setlogin}></LogoArea>
            <hr></hr>
            <div className="usernav_bottom">
                <div className="usernav_container">
                    <div className="usernav_start">
                        <div className="usernav_display">
                            {/* <MainMenuArea2 /> */}
                            <h3>CATEGORIES</h3><KeyboardArrowDownIcon style={{fontSize:"20px"}}></KeyboardArrowDownIcon>
                        </div>
                        <div>
                            <Cluster />
                        </div>   
                    </div>
                </div>
            </div>
            <hr style={{position:"relative", top:"1px"}}></hr>
        </div>    
     )
}

export default UserNav;