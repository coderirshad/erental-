import React from "react";

import Dash_Topbar from "./Dash_Topbar";
import Dash_menuarea from "./Dash_menuarea";
import Dash_Hero from "./Dash_Hero"
import Dash_side from "./Dash_side";

import LogoArea from "./LogoArea";



const AdminNav = ()=>{
     return (
        <>  
        
          <Dash_Topbar></Dash_Topbar>
          <LogoArea></LogoArea>
          <Dash_menuarea></Dash_menuarea>
          <Dash_Hero></Dash_Hero> 
          <Dash_side></Dash_side>
   
   
          
        </>
     )
}

export default AdminNav;