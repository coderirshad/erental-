import HotDeals from "./HotDeals";
import ContousrolledCarel from "./ContousrolledCarel";
import FeatureProduct from "./FeatureProduct";
import FrontBlog from "./FrontBlog";
import FullBanner from "./FullBanner";
import BestOffer from "./BestOffer";
import Service from "./Service";
import CategorySlider from "./CategorySlider";


const Home = ()=>{
    
    
     return (
        <div>  
            <ContousrolledCarel></ContousrolledCarel>
            <br></br><br></br><br></br>
            <HotDeals></HotDeals>
            <Service></Service>            
            <FeatureProduct></FeatureProduct> 
            <CategorySlider></CategorySlider>
            <FullBanner></FullBanner>
            <BestOffer></BestOffer>
            <FrontBlog></FrontBlog>                 
        </div>
     )
}

export default Home;
