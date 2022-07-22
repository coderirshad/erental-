import React from "react";


const MyPaymentMethods = ()=>{
  
     return (
        <div style={{marginLeft:"30%", marginTop:"-18%" , marginBottom : "3%" , height : "300px" , borderStyle: "ridge" , borderWidth: "1.5px" }} >
          <div className = "aboutProduct" style={{ textAlign : "left" , margin : "15px" , marginBottom : "60px"}}>
                <h4><strong>TOTAL ONLINE PAYMENTS</strong> : ₹ 29868 </h4>
          </div>
          <div className = "aboutProduct" style={{ textAlign : "left" , margin : "15px"}}>
                <h4><strong>OTHER PAYMENTS MODE'S</strong> : ₹ 15286 </h4>
          </div>
        </div>

     )
}

export default MyPaymentMethods;