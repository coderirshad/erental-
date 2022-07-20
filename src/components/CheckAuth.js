import { getCookie } from 'react-use-cookie';
export const CheckAuth= ()=>{
     if(getCookie('authToken')) return true;
     else return false;
}