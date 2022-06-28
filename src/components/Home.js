import React from "react";
import HotDeals from "./BestDeals";
import BreadCrumb from "./BreadCrumb";
import CategoryBox from "./CategoryBox";
import Contact from "./Contact";
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

const Home = ()=>{
     return (
        <>  
         
            <SideBar></SideBar>
            <HotDeals></HotDeals>
            <HotOffer></HotOffer>
            <FeatureProduct></FeatureProduct>
            <Contact></Contact>
        </>
     )
}

export default Home;