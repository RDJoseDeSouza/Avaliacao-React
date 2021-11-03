import React from 'react'

function PricingCard(props) {
    return <>

        <div className="col-md-4 px-2">
            <div className="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                <div className="card-header p-0 card-heading">
                    <h4 className="mb-4">{props.type} {props.span? <span className="label label-popular">Popular</span>:<span></span> }</h4>
                </div>
                <div className="card-body p-0">
                    <h1 className="card-title pricing-card-title my-price-title">${props.value}<small
                        className="text-dull">/month</small>
                    </h1>
                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                    <ul className="list-unstyled list-pricing mt-3 mb-4">
                        <li>{props.domain} Domain</li>
                        <li>{props.user} users included</li>
                        <li>{props.storage} GB of storage</li>
                        <li>{props.support}</li>
                        <li>Help center access</li>
                    </ul>
                    <div className="mt-4">
                        <a href="#" className={"btn btn-lg "+props.class}>{props.btn}</a>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default PricingCard