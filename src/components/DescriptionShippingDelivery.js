import React from 'react'

function DescriptionShippingDelivery() {
  return (
    <div>
        <div className='container-fluid my-5' style={{"text-align":"left",width:"75%"}}>
           <div className='row'>
             <div className='col-6'>
                 <div className='row justify-content-between'>
                    <div className='col-6 mt-3' style={{height:"55vh"}}>
                        <img src='https://www.erentals.in/wp-content/uploads/2021/01/wood-ship-3.jpg' alt='' className='img-fluid w-100 h-100' />
                    </div>
                    <div className='col-6 mt-3' style={{height:"55vh"}}>
                        <img src='https://www.erentals.in/wp-content/uploads/2021/01/wood-ship-1.jpg' alt='' className='img-fluid w-100 h-100' />
                    </div>
                 </div>
             </div>
             <div className='col-5' style={{"margin-left" :"2rem"}}>
                  <h5 class="p-3 text-left" style={{"font-size":"25px","font-weight":"600"}}>MAECENAS IACULIS</h5>
                  <p className='p-3 text-left h4'>Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.</p>
                  <h5 class="p-3 text-left" style={{"font-size":"25px","font-weight":"600"}}>ADIPISCING CONVALLIS BULUM</h5>
                  <ul>
                        <li className='px-3 text-left h5' style={{"list-style" :"none"}}>Vestibulum penatibus nunc dui adipiscing convallis bulum parturient suspendisse.</li>
                        <li className='px-3 text-left h5' style={{"list-style" :"none"}}>Abitur parturient praesent lectus quam a natoque adipiscing a vestibulum hendre.</li>
                        <li className='px-3 text-left h5' style={{"list-style" :"none"}}>Diam parturient dictumst parturient scelerisque nibh lectus.</li>
                  </ul>
                  <p className='p-3 text-left h4'>Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.</p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default DescriptionShippingDelivery