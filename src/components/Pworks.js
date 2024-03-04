import React from "react";
import work from '../CSS/work.css'
import sr from '../Assets/sr.png'
import ss from '../Assets/ss.png'
import port from'../Assets/port.png'
function Pworks(){
    return(
        <div className="workslist">
            <div className="workname">
                <h2><b>Works</b></h2>
            </div>
            <div className="workbox">
            <div className="srbox">
                <div className="srpic">
                    <img className="srpics"  alt="srpi" src={sr}/>
                    <img className="srpics" alt="srpics" src={ss}/>
                    <div className="ml">
                        <h4>Machine Learning</h4>
                    </div>
                    <div className="mlname">
                        <h3><b>Song Recommendation Using Facial Expression</b></h3>
                    </div>
                </div>
            </div>
            <div className="portfoliobox">
                <div className="portpic">
                    <img className="portimg" alt="port" src={port}/>
                    <div className="portname">
                        <h4>Web development</h4>
                    </div>
                    <div className="portfolio">
                        <h3><b>Portfolio</b></h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Pworks