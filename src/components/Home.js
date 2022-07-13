import HotDeals from "./HotDeals";
import ContousrolledCarel from "./ContousrolledCarel";
import FeatureProduct from "./FeatureProduct";
import FrontBlog from "./FrontBlog";
import FullBanner from "./FullBanner";
import BestOffer from "./BestOffer";
import Service from "./Service";


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
