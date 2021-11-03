import React from 'react'

function PricingCard(props){
    return <>
     <div className="row px-2">
                  <div className="col-md-4 px-2">
                    <div className="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                      <div className="card-header p-0 card-heading">
                        <h4 className="mb-4">Free</h4>
                      </div>
                      <div className="card-body p-0">
                        <h1 className="card-title pricing-card-title my-price-title">$0<small
                            className="text-dull">/month</small>
                        </h1>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <ul className="list-unstyled list-pricing mt-3 mb-4">
                          <li>1 Domain</li>
                          <li>10 users included</li>
                          <li>2 GB of storage</li>
                          <li>Email support</li>
                          <li>Help center access</li>
                        </ul>
                        <div className="mt-4">
                          <a href="signup.html" className="btn btn-lg btn-outline-primary btn-style border-btn">Sign up for
                            free</a>
                        </div>
                      </div>
                    </div>
        </div>

    </>
}