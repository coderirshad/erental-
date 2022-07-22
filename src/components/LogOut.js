import Cookies from 'js-cookie'
import { CheckAuth } from './CheckAuth';
export const LogOut = ()=>{
        Cookies.remove('authToken');
        Cookies.remove('refreshToken');
}