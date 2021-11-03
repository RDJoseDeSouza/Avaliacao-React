import React from 'react'

function Charts(props) {
    return <>
        <div className="col-lg-6 pr-lg-2 chart-grid">

            <div className="card text-center card_border">
                <div className="card-header chart-grid__header">
                    {props.typeChartText}
                </div>
                <div className="card-body">
                    {/* <!-- type chart --> */}
                    <div id="container">
                        <canvas id={props.chartType}></canvas>
                    </div>
                    {/* <!-- //type chart --> */}
                </div>
                <div className="card-footer text-muted chart-grid__footer">
                    {props.updateText}
                </div>
            </div>
        </div>
    </>
}
export default Charts