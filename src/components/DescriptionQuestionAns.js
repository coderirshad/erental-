import React from 'react'

function DescriptionQuestionAns() {
  return (
    <div>
         <div class="container-fluid" style={{"text-align":"left",width:"70%"}}>
        <div class="row justify-content-between p-2">
           <div class="col-12 ">
            <h4 class="pb-5" style={{"font-size":"25px","font-weight":"600"}}>Mostly asked Question</h4>
                  <div class="accordion" id="accordionExample">
                  <div class="shadow mb-3 bg-body rounded">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button py-4" style={{"font-size" : "25px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How you can order this product ?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body h4">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="shadow mb-3 bg-body rounded">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed py-4" style={{"font-size" : "25px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How much is the deposit?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body h4">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  
                  <div class="shadow mb-3 bg-body rounded">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed py-4" style={{"font-size" : "25px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Who lives next door?
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body h4">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
              </div>
           </div>
           
          </div>
        </div>
      </div>
  )
}

export default DescriptionQuestionAns