import React from 'react';
import {Link} from 'react-router-dom'
function BreadCrumb(props){
    return <>
    {/* <!-- breadcrumbs --> */}
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb my-breadcrumb">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">{props.current}</li>
          </ol>
        </nav>
        {/* <!-- //breadcrumbs --> */}
    </>

}
export default BreadCrumb;