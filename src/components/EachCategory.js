import React from 'react';
import { useLocation } from "react-router-dom" ;
import AboutProduct from './SingalProduct.js' ;
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

