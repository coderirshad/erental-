import HotDeals from "./HotDeals";
import ContousrolledCarel from "./ContousrolledCarel";
import FeatureProduct from "./FeatureProduct";
import FrontBlog from "./FrontBlog";
import FullBanner from "./FullBanner";
import BestOffer from "./BestOffer";
import Service from "./Service";
import CategorySlider from "./CategorySlider";


const UserHome = ()=>{
    
    
     return (
        <div>  
            <ContousrolledCarel></ContousrolledCarel>
            <Service></Service>            
            <HotDeals></HotDeals>
            <CategorySlider></CategorySlider>
            <FeatureProduct></FeatureProduct> 
            <FullBanner></FullBanner>
            <BestOffer></BestOffer>
            <FrontBlog></FrontBlog>                 
        </div>
     )
}

export default UserHome;
