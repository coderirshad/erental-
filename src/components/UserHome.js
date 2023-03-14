import HotDeals from "./HotDeals";
import React from "react";
import ContousrolledCarel from "./ContousrolledCarel";
import FeatureProduct from "./FeatureProduct";
import FrontBlog from "./FrontBlog";
import FullBanner from "./FullBanner";
import BestOffer from "./BestOffer";
import Service from "./Service";
import CategorySlider from "./CategorySlider";
import { CheckAuth } from "./CheckAuth";
import NewProduct from "./NewProduct";
import TopSold from "./TopSold";

const UserHome = ()=>{
    const [login,setlogin]= React.useState(CheckAuth());
    
     return (
        <div>  
            <ContousrolledCarel />
            <Service />          
            <HotDeals login={login} />
            <CategorySlider />
            <FeatureProduct login={login} /> 
            <FullBanner  />
            <NewProduct  login={login}/>
            <BestOffer login={login} />
            <TopSold login={login}/>
            <FrontBlog></FrontBlog>                 
        </div>
     )
}

export default UserHome;
