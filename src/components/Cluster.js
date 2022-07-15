import { checkboxClasses } from '@mui/material';
import React , { useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
export default function Cluster() {
    const [categoryList, setcategoryList] = useState([]);
    const fetchdata = async() =>{
        const response = await fetch('http://140.238.230.250:4545/category');
        const now = await response.json() ;
        for ( let i = 0 ; i < 5 ; i ++ ){
            let newElement = now[i] ;
            setcategoryList(oldArray => [...oldArray, newElement]);
        }
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
        <div className = "cluster" id = 'child1'>
            {categoryList.map(( category ) => (
                    <div className = "ech" style={{width :"140px"}}>
                                <section className="menu-area2" id = 'help'>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-0">
                                            <div className="sidemenu">
                                            <h5 className='tag'><strong>{category.name}</strong><i className="fa fa-bars"></i></h5>
                                                <ul className="list-unstyled gt-menu" id = "try1">
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
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    </div>
                ))}
        </div>
  )
}
/*
<div className = "cluster">
            {categoryList.map(( category ) => (
                    <div className = "ech">
                                <section className="menu-area2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-0">
                                            <div className="sidemenu">
                                            <h5 className='tag'> <strong>{category.name}</strong><i className="fa fa-bars"></i></h5>
                                                <ul className="list-unstyled gt-menu" id = "try1">
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
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    </div>
                ))}
        </div>
        */