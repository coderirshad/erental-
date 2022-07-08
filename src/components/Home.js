import {ReactChild, useState} from "react";
import HotDeals from "./HotDeals";
import BreadCrumb from "./BreadCrumb";
import CategoryBox from "./CategoryBox";
import Contact from "./Contact";
import ContousrolledCarel from "./ContousrolledCarel";
import LastFooterCopyright from "./CopyrightFooter";
import Coupon from "./Coupon";
import Dash_side from "./Dash_side";
import FeatureProduct from "./FeatureProduct";
import FooterArea from "./FooterArea";
import HotOffer from "./HotOffer";
import NavigationBar from "./NavigationBar";
import Product_list from "./Product_list";
import SideBar from "./SideBar";
import StickyMenu from "./StickyMenu";
import TopBar from "./TopBar";
import TopPanes from "./TopPanes";
import New from "./New";
import FrontBlog from "./FrontBlog";
import FullBanner from "./FullBanner";
import BestOffer from "./BestOffer";
import Service from "./Service";
import EachCategory from "./EachCategory";
import MainMenuArea2 from "./MainMenuArea2";
import Cluster from "./Cluster.js"


const Home = ()=>{

    
     return (
        <>  
            <ContousrolledCarel></ContousrolledCarel>
            <br></br><br></br><br></br>
            <HotDeals></HotDeals>
            <Service></Service>            
            <FeatureProduct></FeatureProduct> 
            <FullBanner></FullBanner>
            <BestOffer></BestOffer>
            <FrontBlog></FrontBlog>                 
         
        </>
     )
}

export default Home;
