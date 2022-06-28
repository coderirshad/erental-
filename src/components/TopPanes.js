import React from "react";

export default function TopPanes() {
  return (
    <div className="col-md-5">
      <div className="sg-img">
        {/* <!-- Tab panes --> */}
        <div className="tab-content">
          <div className="tab-pane fade show active" id="sg1" role="tabpanel">
            <img src="images/tab-1.png" alt="" className="img-fluid" />
          </div>
          <div className="tab-pane" id="sg2" role="tabpanel">
            <img src="images/tab-2.png" alt="" className="img-fluid" />
          </div>
          <div className="tab-pane" id="sg3" role="tabpanel">
            <img src="images/tab-3.png" alt="" className="img-fluid" />
          </div>
          <div className="tab-pane" id="sg4" role="tabpanel">
            <img src="images/tab-4.png" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="nav d-flex justify-content-between">
          <a className="nav-item nav-link active" data-toggle="tab" href="#sg1">
            <img src="images/tab-1.png" alt="" />
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#sg2">
            <img src="images/tab-2.png" alt="" />
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#sg3">
            <img src="images/tab-3.png" alt="" />
          </a>
          <a className="nav-item nav-link" data-toggle="tab" href="#sg4">
            <img src="images/tab-4.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
