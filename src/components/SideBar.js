import React,{useEffect,useState} from 'react';
 function SideBar( { setProductList } ) {

    const handleClick = async ( categoryId ) =>{
        const response = await fetch(`http://140.238.230.250:4545/category/${categoryId}/product`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            
             setProductList (data) ;
        })
    }

    const [category, setcategory] = useState([]);
    const fetchdata = async() =>{
        const response = await fetch('http://140.238.230.250:4545/category');
        setcategory(await response.json());
          
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
                        category.map( eachCategory => (
                            <li>
                                <button onClick= {() => handleClick( eachCategory.id ) } >
                                {eachCategory.name}
                                </button>
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
export default SideBar ;