import React from "react";
import { getCookie } from 'react-use-cookie';
const GetAuthorization = ( ) =>{
     return 'Bearer '+getCookie('authToken');
}
export default GetAuthorization;