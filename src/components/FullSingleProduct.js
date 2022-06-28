import React from 'react'
import TopBar from './TopBar';
import LogoArea from './LogoArea';
import MainMenuArea2 from './MainMenuArea2';
import BreadCrumb from './BreadCrumb';
import SingleProductArea from './SingleProductArea';
import FooterArea from './FooterArea';
import CopyrightFooter from './CopyrightFooter';
import CartBody from './CartBody';

export default function FullSingleProduct() {
  return (
    <>
    <TopBar/>
    <LogoArea/>
    <CartBody/>
    <MainMenuArea2/>
    <BreadCrumb/>
    <SingleProductArea/>
    <FooterArea/>
    <CopyrightFooter/>
    </>
  )
}