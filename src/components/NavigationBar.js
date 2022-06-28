import React from "react";
import MainMenuArea2 from "./MainMenuArea2";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";

const NavigationBar = ()=>{
     return (
        <>
            <TopBar></TopBar>
            <MainMenuArea2></MainMenuArea2>
            {/* <MobileMenu></MobileMenu> */}
        </>
     )
}

export default NavigationBar;