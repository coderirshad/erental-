import {React,useState,useEffect} from "react";
import LogoArea from "./LogoArea";
import MainMenuArea2 from "./MainMenuArea2";
import Cluster from "./Cluster.js";

const UserNav = ({login,setlogin})=>{
     return ( 
        <div id="navbar"> 
            <LogoArea role={"customer"} login={login} setlogin={setlogin}></LogoArea>
            <div className="container-fluid border shadow-sm d-flex align-item-center">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-3 mainmenu-dispaly">
                            <MainMenuArea2 />
                        </div>
                        <div className="col-lg-9 col-12">
                            <Cluster />
                        </div>   
                    </div>
                </div>
            </div>
        </div>
     )
}

export default UserNav;