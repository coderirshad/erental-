import React from 'react';
import MyAccountDashSide from './MyAccountDashSide';
import ShowAccountDetails from './ShowAccountDetails';
export default function MyAccount() {

    return (
      <div className='container d-flex min-vh-40 mb-5 mt-3' id='myaccount'>
    <MyAccountDashSide/>
    <ShowAccountDetails/>     
    </div>     
  );
}
