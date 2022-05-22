import React from 'react';

export default function Checkout() {
  return (

 

    <section className="checkout">
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <form action="#">
                    <h5>Billing Information</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <label>First Name*</label>
                            <input type="text" name="name" value="" placeholder="Your first name"/>
                        </div>
                        <div className="col-md-6">
                            <label>Last Name*</label>
                            <input type="text" name="name" value="" placeholder="Your last name"/>
                        </div>
                        <div className="col-md-6">
                            <label>Email Address*</label>
                            <input type="text" name="name" value="" placeholder="Your email address"/>
                        </div>
                        <div className="col-md-6">
                            <label>Phone*</label>
                            <input type="text" name="name" value="" placeholder="Your phone number"/>
                        </div>
                        <div className="col-md-12">
                            <label>Company Name</label>
                            <input type="text" name="name" value="" placeholder="Your company name (optional)"/>
                        </div>
                        <div className="col-md-12">
                            <label>Address*</label>
                            <input type="text" name="name" value="" placeholder="Address line 1"/>
                            <input type="text" name="name" value="" placeholder="Address line 2"/>
                        </div>
                        <div className="col-md-6 contry">
                            <label>Country*</label>
                            <select className="country">
                                <option>United State</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label>Town/City*</label>
                            <input type="text" name="name" value="" placeholder="Your town or city name"/>
                        </div>
                        <div className="col-md-6">
                            <label>State/Province*</label>
                            <input type="text" name="name" value="" placeholder="Your state or province"/>
                        </div>
                        <div className="col-md-6">
                            <label>Postal/Zip Code*</label>
                            <input type="text" name="name" value="" placeholder="Your postal or zip code"/>
                        </div>
                        <div className="col-md-12">
                            <ul className="list-unstyled">
                                <li><input type="checkbox" id="samsung" name="name"/><label for="samsng">Create An Account?</label></li>
                                <li><input type="checkbox" id="apple" name="name"/><label for="apple">Ship To Same Address?</label></li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <label>Order Note</label>
                            <textarea name="note" placeholder="Note for your order (optional). Example- special notes for delivery"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</section>
  );
}
