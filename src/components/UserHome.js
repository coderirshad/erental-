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
            <ContousrolledCarel></ContousrolledCarel>
            <Service></Service>            
            <HotDeals login={login}></HotDeals>
            <CategorySlider></CategorySlider>
            <FeatureProduct login={login}></FeatureProduct> 
            <FullBanner></FullBanner>
            <NewProduct />
            <BestOffer></BestOffer>
            <TopSold />
            <FrontBlog></FrontBlog>                 
        </div>
     )
}

export default UserHome;
