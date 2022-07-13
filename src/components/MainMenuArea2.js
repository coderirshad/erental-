import React , { useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
export default function MainMenuArea2() {
    const [categoryList, setcategoryList] = useState([]);
    const fetchdata = async() =>{
        const response = await fetch('http://140.238.230.250:4545/category');
        setcategoryList(await response.json());
          
    }
    useEffect(() => {
        fetchdata();
    }, []);

    const navigate = useNavigate();
    const handleClick = async ( categoryId ) =>{
        console.log ( categoryId ) ;
        navigate('/productList',{state:{id: categoryId }});
    }
    return (
    <section className="menu-area2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-0">
                        <div className="dashBoard"><Link to={'/admin'}><h4>DASHBOARD</h4></Link></div>
                        <div className="sidemenu">
                            
                            <p>All Categories <i className="fa fa-bars"></i></p>
                            <ul className="list-unstyled gt-menu" id = "try1">
                                {categoryList.map(( category ) => (
                                <li>
                                    <a><img src="images/m-cloth.png" alt=""/>{category.name}<i className="fa fa-angle-right"></i></a>
                                    <div className="mega-menu" id = "try" >
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="smartphone">
                                                         <li>
                                                            <button className = "button">
                                                            <h4>{category.name}</h4>
                                                            </button>
                                                        </li>
                                                    {   
                                                        category.subcategory.map ( (subcategory) => (
                                                        <li>
                                                            <button className = "button" onClick= {() => handleClick( subcategory.id ) } >
                                                            <a>{subcategory.name}<i className="fa fa-angle-right"></i></a>
                                                            </button>
                                                        </li>
                                                        )
                                                        )
                                                    }
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
