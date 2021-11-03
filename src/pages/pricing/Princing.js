import React from 'react'
import BreadCrumb from '../../components/macro/breadCrumb/BreadCrumb'
import PricingCard from '../../components/macro/pricingCard/PricingCard'

function Pricing(){
    
    return <>
        {/* <!-- main content start --> */}
    <div className="main-content">

      {/* <!-- content --> */}
      <div className="container-fluid content-top-gap">

        {/* <!-- breadcrumbs --> */}
        <BreadCrumb current="Pricing"/>
        {/* <!-- //breadcrumbs -->

        <!-- pricing --> */}
        <section className="pricing">
          <section className="card card_border mb-5">
            <div className="cards__heading">
              <h3>Pricing Tables -<span> Version 1</span></h3>
            </div>
            <div className="card-body">
              {/* <!-- pricing version 1 -->

              <!--//BLOCK ROW END--> */}

              <div className="w3l-pricing1">
                <div className="row px-2">
                    <PricingCard domain="1" user="10" storage="2" support="Email Support" class="btn-outline-primary btn-style border-btn" value={0} btn="Sign up for free"/>
               
                    <PricingCard domain="10" user="20" type="Regular" storage="10" support="Priority email support" class="btn-primary btn-style" value={49} btn="Get started" span/>
          
                  <PricingCard domain="30" user="30" type="Premium" storage="15" support="Phone and email support" class="btn-primary btn-style" value={200} btn="Contact us" />

                </div>
            </div>
        </div>
        </section>


        {/* 
        <!--BLOCK ROW START-->

        <!-- //pricing version 1 -->

        <!-- pricing version 2 --> */}
        <div className="pricing-version-2">
          <div className="card card_border mb-5">
            <div className="cards__heading">
              <h3>Pricing Tables -<span> Version 2</span></h3>
            </div>
            <div className="card-body">
              <div className="row px-2">

                {/* <!-- Table #1  --> */}
                <div className="col-lg-4 col-md-6 px-2 mb-4">
                  <div className="card text-center card__hover">
                    <div className="card-header">
                      <h3 className="display-4"><span className="currency">$</span>19<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Basic Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">1 Domain</li>
                        <li className="list-group-item">Ultimate Features</li>
                        <li className="list-group-item">Responsive Ready</li>
                        <li className="list-group-item">Editor Ready Builder</li>
                        <li className="list-group-item">Limited UI Blocks</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </div>
                  </div>
                </div>

                {/* <!-- Table #2  --> */}
                <div className="col-lg-4 col-md-6 px-2 mb-4">
                  <div className="card text-center card__hover">
                    <div className="card-header">
                      <h3 className="display-4"><span className="currency">$</span>29<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Regular Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">10 Domain</li>
                        <li className="list-group-item">Ultimate Features</li>
                        <li className="list-group-item">Responsive Ready</li>
                        <li className="list-group-item">Editor Ready Builder</li>
                        <li className="list-group-item">Unlimited UI Blocks</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </div>
                  </div>
                </div>

                {/* <!-- Table #3  --> */}
                <div className="col-lg-4 col-md-6 px-2 mb-4">
                  <div className="card text-center card__hover">
                    <div className="card-header">
                      <h3 className="display-4"><span className="currency">$</span>39<span className="period">/month</span></h3>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">
                        Premium Plan
                      </h4>
                      <ul className="list-group">
                        <li className="list-group-item">15 Domain</li>
                        <li className="list-group-item">Ultimate Features</li>
                        <li className="list-group-item">Responsive Ready</li>
                        <li className="list-group-item">Editor Ready Builder</li>
                        <li className="list-group-item">Unlimited UI Blocks</li>
                        <li className="list-group-item">24/7 Support System</li>
                      </ul>
                      <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* <!-- //pricing version 2 --> */}
  </section>
  {/* <!-- //pricing --> */}
  

  </div>
  {/* <!-- //content --> */}

  </div>
  {/* <!-- main content end--> */}
        
    </>
}
export default Pricing