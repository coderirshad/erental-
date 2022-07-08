import React , { useState } from "react";
import HotDeals from "./HotDeals";
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
import EachCategory from "./EachCategory";
import MainMenuArea2 from "./MainMenuArea2";
import Cluster from "./Cluster.js"


const Home = ()=>{

   const [productList, setProductList] = useState([]);
    
     return (
        <>  
        <Cluster></Cluster>
         <MainMenuArea2 setProductList = {setProductList}></MainMenuArea2>
         <EachCategory productList = { productList }/>
         <HotDeals></HotDeals>
         <FeatureProduct></FeatureProduct>
         <Contact></Contact>
         
        
         
         
        </>
     )
}

export default Home;

/*
<SideBar setProductList = { setProductList }/>
<HotDeals></HotDeals>
<HotOffer></HotOffer>
<FeatureProduct></FeatureProduct>
<Contact></Contact>
*/