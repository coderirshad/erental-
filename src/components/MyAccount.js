import React from 'react';
import MyAccountDashSide from './MyAccountDashSide';
import ShowAccountDetails from './ShowAccountDetails';
export default function MyAccount() {

    return (
      <div className='container d-flex flex-column min-vh-40 my-5' >
    <MyAccountDashSide/>
    <ShowAccountDetails/>     
    </div>     
  );
}
