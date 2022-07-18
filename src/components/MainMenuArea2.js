import React , { useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
export default function MainMenuArea2() {
    const [categoryList, setcategoryList] = useState([]);
    const fetchdata = async() =>{
        const response = await fetch(`http://${process.env.REACT_APP_URL}/category`);
        setcategoryList(await response.json());
    }
    useEffect(() => {
        fetchdata();
    }, []);

    const navigate = useNavigate();
    const handleClick = async ( subcategoryId ) =>{
        navigate('/productList',{state:{id: subcategoryId }});
    }
    const List = [] ;
    const handleClick1 = async ( category ) =>{
        category.subcategory.map ( (subcategory) => (
            List.push ( subcategory.id )
        ) ) ;
        navigate('/allProductList',{state:{ list : List }});
    }
    return (
    <section className="menu-area2" id = "categoryShift">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-0">
                        {/* <div className="dashBoard"><Link to={'/admin'}><h4>DASHBOARD</h4></Link></div> */}
                        <div className="sidemenu">
                            <h4 className='row2'>All Categories <i className="fa fa-bars"></i></h4>
                            <ul className="list-unstyled gt-menu" id = "try1">
                                {categoryList.map(( category ) => (
                                <li>
                                    <a><img src="images/m-cloth.png" alt=""/>
                                        <button className = "button" onClick= {() => handleClick1( category ) } >
                                            {category.name}
                                        </button>
                                    <i className="fa fa-angle-right"></i></a>
                                    <div className="mega-menu" id = "try" >
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="smartphone">
                                                         <li>
                                                            <strong><h4>{category.name}</h4></strong>
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
