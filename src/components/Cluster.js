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
            <div className='cluster_nav'> 
                <ul className=" d-flex justify-conter-between align-item-center">
                    {tagList.map(( tag, index ) => (
                        <li key={index} onClick= {() => handleClick( tag.id ) } >
                            <Link>{tag.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
  )
}