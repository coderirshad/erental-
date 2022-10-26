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
        <div className='py-sm-2 py-md-2 overflowHidden'>
            <div>
                <ul className="list-unstyled list-inline d-flex justify-conter-between align-item-center">
                    {tagList.map(( tag ) => (
                        <li className = "py-3 px-2" onClick= {() => handleClick( tag.id ) } >
                            <a id = 'spacing'><strong>{tag.name}</strong></a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}