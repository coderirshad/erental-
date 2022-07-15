import {React,useState,useEffect} from "react";
import LogoArea from "./LogoArea";
import MainMenuArea2 from "./MainMenuArea2";
import TopBar from "./TopBar";
import Cluster from "./Cluster.js"

const UserNav = ()=>{
     return ( 
        <> 
            <LogoArea></LogoArea>
            <div className = 'parent1'>
            <div id = 'child1' >
                <Cluster></Cluster>
            </div>
            <div id = 'child1' >
                <MainMenuArea2></MainMenuArea2>
            </div>
            </div>
        </>
     )
}

export default UserNav;