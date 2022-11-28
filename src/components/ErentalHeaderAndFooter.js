import React, { useEffect, useState } from 'react'

const ErentalHeaderAndFooter = (props) => {
    const {image} = props;
    const InvoiceHeader = "/images/Erental Invoice Header.png"
    const QuotationHeader = "/images/Erental Quotation Header.png"
    const Footer = "/images/Erental Footer.png"
    
  return (
    <div>
      <img src={`/images/${image}.png`} width={"100%"}></img>
    </div>
  )
}

export default ErentalHeaderAndFooter;
