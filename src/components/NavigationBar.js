import React from "react";
import Logo from "./Logo";
import LogoArea from "./LogoArea";
import Dash_Topbar from "./Dash_Topbar";
import Dash_menuarea from "./Dash_menuarea";
import Dash_Hero from "./Dash_Hero"
import MainMenuArea2 from "./MainMenuArea2";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import Dash_side from "./Dash_side";
import AddProduct from "./AddProduct";

const NavigationBar = ()=>{
     return (
        <>
           <Dash_Topbar></Dash_Topbar>
            <LogoArea></LogoArea>
            <Dash_menuarea></Dash_menuarea>
            <Dash_Hero></Dash_Hero>
            <Dash_side/>

        
            {/* <MobileMenu></MobileMenu> */}
        </>
     )
}

export default NavigationBar;