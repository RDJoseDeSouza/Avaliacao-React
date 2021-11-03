import React from 'react';
function Card(props) {
    return <>
        <div className="col-sm-6 pr-sm-2 statistics-grid">

            <div className="card card_border border-primary-top p-4">
                <i className={"lnr " + props.imgCss}> </i>
                <h3 className={"number " + props.classNumber}>{props.numberText}</h3>
                <p className="stat-text">{props.startText}</p>
            </div>
        </div>

    </>

}
export default Card