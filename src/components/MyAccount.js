import React,{useEffect,useState} from 'react';
import MyAccountDashSide from './MyAccountDashSide';
import ShowAccountDetails from './ShowAccountDetails';
export default function MyAccount() {

    return (
        <>
    <MyAccountDashSide/>
    <ShowAccountDetails/>     
    </>     
  );
}
