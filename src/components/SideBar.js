import React,{useEffect,useState} from 'react';

 function Side() {
    const [product, setProduct] = useState([]);
         
    const fetchdata = async() =>{
        const response = await fetch('http://140.238.230.250:4545/category');
        setProduct(await response.json());
          
    }
    useEffect(() => {
        fetchdata();
    }, []);
    return(
    
    <section className="slider-area">
    <div className="container">
   
        <div className="row">

         
            <div className="col-lg-3 col-md-0">
                <div className="menu-widget">
                    <p><i className="fa fa-bars"></i>All Categories</p>
                    <ul className="list-unstyled">
                    {
                    product.map(data => (
       
                        <li><a href={data.id}><img src="images/m-cloth.png" alt=""/>{data.name}<i className="fa fa-angle-right"></i></a>
                            <div className="mega-menu">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="smartphone">
                                            <h6>{data.subcategory.name}</h6>
                                            {data.subcategory.product_category.map((c) => (
                                            <a href="">- {c}</a>
                                           
                                            ))}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </li>
                      
                        ))} 
                    </ul>
                </div>
            </div>
      
        </div>
        
    </div>


</section>
    )
}

export default Side