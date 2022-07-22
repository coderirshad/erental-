import React from "react";

import Dash_Topbar from "./Dash_Topbar";
import Dash_menuarea from "./Dash_menuarea";
import Dash_Hero from "./Dash_Hero";
import Dash_side from "./Dash_side";

import LogoArea from "./LogoArea";

import Invoice from "./Invoice";

const AdminNav = ({login,setlogin}) => {
  return (
    <>

      <Dash_Topbar></Dash_Topbar>
      <LogoArea role={"admin"} login={login} setlogin={setlogin}></LogoArea>
      <Dash_menuarea></Dash_menuarea>
          <Dash_side></Dash_side>

   <Invoice></Invoice>

    </>
     )
}

export default AdminNav;
