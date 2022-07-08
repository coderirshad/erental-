import React from "react";
import { useParams } from "react-router-dom";
import Order_Dash from "./Order_Dash";

import Product from "./Product";
import Report from "./Report";
import Withdraw from "./Withdraw";
import Dash_Review from "./Dash_Review";


const Dash_RightContent = ()=>{

    const params = useParams();
  const id=params.id;
  
     return (
        <>  
     
            {id=='Product' && <Product/>}
            {id=='Orders' && <Order_Dash/>}
            {id=='Report' && <Report/>}
            {id=='Withdraw' && <Withdraw/>}
            {id=='Review' && <Dash_Review/>}
          
          
        </>
     )
}

export default Dash_RightContent;