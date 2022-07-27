import Cookies from 'js-cookie'
import { CheckAuth } from './CheckAuth';
export const LogOut = ()=>{
        localStorage.clear();
        Cookies.remove('authToken');
        Cookies.remove('refreshToken');
}