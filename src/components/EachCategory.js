import React from 'react';
import { useLocation } from "react-router-dom" ;
import AboutProduct from './AboutProduct.js' ;
const EachCategory = ( { productList } ) =>  {

    return (
      !productList.length ? <h1></h1> : (
        <div className = "parent">
          {productList.map(( product ) => (
            <AboutProduct product = { product } />
          ))}
        </div>
      )
      );
}

export default EachCategory;

/*

import React from 'react';
import { useLocation } from "react-router-dom" ;
import AboutProduct from './AboutProduct.js' ;
const EachCategory = ( { productList } ) =>  {

    const handleClick = () => {
      console.log ( "clicked" ) ;
    }
    return (
      !productList.length ? <h1></h1> : (
        <div class="productContainer">
          {productList.map(( product ) => (
            <AboutProduct product = { product } />
          ))}
        </div>
      )
      );
}

export default EachCategory;

*/