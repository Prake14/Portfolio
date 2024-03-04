import React from "react";
import resume from '../CSS/Resume.css'

function Resume(){
    return(
        <div className="Resumecontent">
            <div className="Educationname">
                <h2><b>Education</b></h2>
            </div>
            <div className="collegebox">
                <div className="clgyear">
                    <h4><b>2020 to 2024</b></h4>
                </div>
                <div className="clgname">
                    <h2><b>Adhiyamaan College of Engineering</b></h2>
                </div>
                <div className="ug">
                    <h4><b>Under Graduate</b></h4>
                </div>
            </div>
            <div className="hsbox">
                <div className="hsyear">
                    <h4><b>2019 to 2020</b></h4>
                </div>
                <div className="hsschoolname">
                    <h2><b>Wisdom Matriculation Higher Secondary School</b></h2>
                </div>
                <div className="highschool">
                    <h4><b>High School</b></h4>
                </div>
            </div>
            <div className="sslcbox">
            <div className="sslcyear">
                    <h4><b>2017 to 2018</b></h4>
                </div> 
                <div className="sslcschoolname">
                    <h2><b>Wisdom Matriculation Higher Secondary School</b></h2>
                </div>
                <div className="sslcschool">
                    <h4><b>Secondary Schooling</b></h4>
                </div>
            </div>
            <div className="skillname">
                <h2><b>Skills</b></h2>
            </div>
            <div className="Skillslist">
                <div className="AWS">
                    <h4><b>AWS Services</b></h4>
                </div>
                <div className="progressbaraws">
                    <div className="progressaws">
                    </div>
                </div>
                <div className="cn">
                    <h4><b>Computer Networks</b></h4>
                    <div className="progressbarcn">
                        <div className="progresscn">
                        </div>
                    </div>
                </div>
                <div className="web">
                    <h4><b>Web Developing</b></h4>
                    <div className="progressbarweb">
                        <div className="progressweb">
                        </div>
                    </div>
                </div>
                <div className="cloudk">
                    <h4><b>Cloud Computing</b></h4>
                    <div className="progressbarcloud">
                        <div className="progresscloud">

                        </div>
                    </div>
                </div>
                <div className="mysql">
                    <h4><b>Mysql</b></h4>
                    <div className="progressbarsql">
                        <div className="progresssql">
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Resume;