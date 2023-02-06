import React from "react";
import SimpleMap from "./SimpleMap";

const Locations = () =>{
   return(
    <div className="bg-light container-fluid">
        <div className="container bg-white pb-5 ">
            <h5 className="pb-5 pt-4 formatcolor" style={{fontWeight:"700"}}>
                OUR LOCATIONS
            </h5>
           <div className="row px-md-5 px-2">
             <div className="col-md-3 border pb-3">
                <div style={{textAlign:"left"}} className="pt-3">
                  <div>
                  <a style={{textDecoration:'none'}} href="https://www.google.com/maps/search/234,+2nd+floor,+City+center+mall,+Goregaon+West,+Mumbai-+400104/@19.162403,72.8433589,17z/data=!3m1!4b1" target="_blank"><span className="formatcolor" style={{fontSize:"15px",fontWeight:"600"}}><i className="fa fa-map-marker formatcolor px-2 pb-1" style={{fontSize:"17px"}}></i>Location 1</span></a>
                    <p className="px-5 py-1">
                      234, 2nd floor, City center mall, Goregaon West, Mumbai- 400104, Maharashtra India 
                    </p>
                  </div>
                </div>
                <div style={{textAlign:"left"}}>
                  <div className="pt-4">
                    <i className="fa fa-map-marker formatcolor px-2 pb-1" style={{fontSize:"17px"}}></i>
                    <a style={{textDecoration:'none'}} href="https://www.google.com/maps/place/Indian+Institute+of+Technology+Bombay/@19.1334302,72.909148,17z/data=!4m10!1m2!2m1!1s328,+3rd+floor,+Transit+Building,+IIT+Bombay,+Powai,+Mumbai-400076!3m6!1s0x3be7c7f189efc039:0x68fdcea4c5c5894e!8m2!3d19.1334302!4d72.9132679!15sCkIzMjgsIDNyZCBmbG9vciwgVHJhbnNpdCBCdWlsZGluZywgSUlUIEJvbWJheSwgUG93YWksIE11bWJhaS00MDAwNzYiA4gBAVo_Ij0zMjggM3JkIGZsb29yIHRyYW5zaXQgYnVpbGRpbmcgaWl0IGJvbWJheSBwb3dhaSBtdW1iYWkgNDAwMDc2kgEHY29sbGVnZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSMWMzUTJUSFpuUlJBQrABAOABAA!16zL20vMDE2Yzlo" target="_blank"><span className="formatcolor" style={{fontSize:"15px",fontWeight:"600"}}>Location 2</span></a>
                    <p className="px-5 py-1">
                       328, 3rd floor, Transit Building, IIT Bombay, Powai, Mumbai-400076, Maharashtra India
                    </p>
                  </div>
                </div>
                <div style={{textAlign:"left"}}>
                  <div className="pt-4">
                    <i className="fa fa-map-marker formatcolor px-2 pb-1" style={{fontSize:"17px"}}></i>
                    <a style={{textDecoration:'none'}} href="https://www.google.com/maps/search/Khan+Compund,+Mumbra+Kausa,+Shilphata,+Thane,+Maharashtra+421204,+India/@19.159199,73.0235712,15z" target="_blank"><span className="formatcolor" style={{fontSize:"15px",fontWeight:"600"}}>Location 3</span></a>
                    <p className="px-5 py-1">
                      Khan Compund, Mumbra Kausa, Shilphata, Thane, Maharashtra 421204, India
                    </p>
                  </div>
                </div>
             </div>
             <div className="col-md-9">
                <SimpleMap />
             </div>
           </div>
        </div>
    </div>
   )
}

export default Locations;