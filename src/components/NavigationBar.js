import React from "react";
import Logo from "./Logo";
import LogoArea from "./LogoArea";
import MainMenuArea2 from "./MainMenuArea2";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import Cluster from "./Cluster.js"

const NavigationBar = ()=>{
     return (
        <>
            <TopBar></TopBar>
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

export default NavigationBar;

/*

<div className = 'parent1'>
            <Cluster className = 'child1'></Cluster>
            <MainMenuArea2  className = 'child1' ></MainMenuArea2>
            </div>

            */