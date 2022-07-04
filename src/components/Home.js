import React from "react";
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

const Home = ()=>{
     return (
        <>           
            <SideBar></SideBar>
            <ContousrolledCarel></ContousrolledCarel>
            <HotDeals></HotDeals>
            <FeatureProduct></FeatureProduct> 
            <FullBanner></FullBanner>
            <BestOffer></BestOffer>
            <New></New>           
            {/* <HotOffer></HotOffer> */} 
            <FrontBlog></FrontBlog>           
            <Contact></Contact>
        </>
     )
}

export default Home;