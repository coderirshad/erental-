import React from "react";
import Dash_side from "./Dash_side";
import LogoArea from "./LogoArea";
import Invoice from "./Invoice";
import Cluster from "./Cluster";
import MainMenuArea2 from "./MainMenuArea2";

const AdminNav = ({login,setlogin}) => {
  return (
    <>
      <LogoArea role={"admin"} login={login} setlogin={setlogin}></LogoArea>
      <div className = 'parent1'>
            <div id = 'child1' >
                <Cluster></Cluster>
            </div>
            <div id = 'child1' >
                <MainMenuArea2></MainMenuArea2>
            </div>
      </div>
      <Dash_side></Dash_side>
      <Invoice></Invoice>
    </>
     )
}

export default AdminNav;
