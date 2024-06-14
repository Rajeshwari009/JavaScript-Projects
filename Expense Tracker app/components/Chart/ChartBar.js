import React from "react";
import './ChartBar.css';

 //barFillheight is used for making the css for adjustinig the height of area(data) filled.
//we are deciding how much area should be filled.

const ChartBar= (props)=>{
    let barFillheight= '0%'; 

    if(props.maxValue>0){
        barFillheight= Math.round((props.value/props.maxValue)*100) + '%'

    }
   

    return (
        <div className="Chart-bar">
            <div className="chart-bar__inner">
            <div className="chart-bar__fill"  style={{height:barFillheight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>


    )
}

export default ChartBar;