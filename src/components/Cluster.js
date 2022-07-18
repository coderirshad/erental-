import { checkboxClasses } from '@mui/material';
import React , { useState , useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom';
export default function Cluster() {
    const [tagList, settagList] = useState([]);
    const fetchdata = async() =>{
        const response = await fetch(`http://${process.env.REACT_APP_URL}/tag`);
        const now = await response.json() ;
        settagList(now);
    }
    useEffect(() => {
        fetchdata();
    }, []);

    const navigate = useNavigate();
    const handleClick = async ( tagIid ) =>{
        navigate('/tagProductList',{state:{id:  tagIid }});
    }
    return (
        <div className="cluster" id = 'child1'>
                    <div>
                        <ul className="list-unstyled list-inline">
                        {tagList.map(( tag ) => (
                            <button className = "button1" onClick= {() => handleClick( tag.id ) } >
                                <a id = 'spacing'><strong>{tag.name}</strong><i className="fa fa-angle-right"></i></a>
                            </button>
                        ))}
                        </ul>
                    </div>
        </div>
  )
}