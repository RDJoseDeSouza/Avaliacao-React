import React from 'react'
import BreadCrumb from '../../components/macro/breadCrumb/BreadCrumb';
import Card from '../../components/macro/cards/Card'
import Charts from '../../components/macro/charts/Chart';

function Home() {
    return <>
        <div className="main-content">

            {/* <!-- content --> */}
            <div className="container-fluid content-top-gap">

               <BreadCrumb current="Dashboard"/>
                <div className="welcome-msg pt-3 pb-4">
                    <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
                    <p>Very detailed {'&'} featured admin.</p>
                </div>

                {/* <!-- statistics data --> */}
                <div className="statistics">
                    <div className="row">
                        <div className="col-xl-6 pr-xl-2">
                            <div className="row">

                                <Card imgCss="lnr-users" classNumber="text-primary" startText="Total Users" numberText="20000" />



                                <Card imgCss="lnr-eye" classNumber="text-secondary" startText="Daily Visitors" numberText="100k" />


                            </div>
                        </div>
                        <div className="col-xl-6 pl-xl-2">
                            <div className="row">
                                <Card imgCss="lnr-cloud-download" classNumber="text-success" startText="Downloads" numberText="166.89 M"/>

                             
                                <Card imgCss="lnr-cart" classNumber="text-danger" startText="Purchased" numberText="1,250k"/>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- //statistics data --> */}

                {/* <!-- charts --> */}
                <div className="chart">
                    <div className="row">
                 
                        <Charts updateText=" Updated 2 hours ago" typeChartText="Bar Chart"  chartType="barchart"/>

                 
                        <Charts updateText=" Updated just now" typeChartText="Line hart"  chartType="linechart"/>
                    </div>
                </div>
                {/* <!-- //charts --> */}

            </div>
            {/* <!-- //content --> */}
        </div>
    </>
}
export default Home;