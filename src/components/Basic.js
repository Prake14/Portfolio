import React, { useState } from "react"
import '../CSS/Basic.css';
import me from '../Assets/me.jpeg'
import insta from'../Assets/insta.jpg'
import linked from '../Assets/linked.png'
import github from '../Assets/github.png'
import mobile from '../Assets/mobile.png'
import email2 from '../Assets/email2.png'
import location2 from'../Assets/location2.png'
import dob from '../Assets/dob.png'
import home3 from '../Assets/home3.png'
import resume from '../Assets/resume.png'
import work from '../Assets/work.png'
import contact from '../Assets/contact.png'
import cloud from'../Assets/cloud.png'
import webdeveloper from '../Assets/webdeveloper.png'
import photography from '../Assets/photography.png'
import cn from '../Assets/cn.png'
import Resume from "./Resume";
import Contact from "./Contact";
import Pworks from "./Pworks";


function Basic(){
    const [content,setcontent] = useState(true)
    const [ resumepage,  setresume] =  useState(false)
    const [ works , setworks ] = useState(false)
    const [ contactpage , setcontact] = useState(false)
    return(
        <div className="Basic">
            <img className="pics" src={me} alt="it is me "/>
            <div className="peru">
            <b><h2>PRAKASH M S</h2></b>
            <div className="jd">
                Fresher
            </div>
            <div className="logos">
            <img className="insta" alt="insta" src={insta}/>
            <img className="linked" alt="linked" src={linked}/>
            <img className="github" alt="github" src={github}/>
            </div>
            <div className="main">
                <img className="mobile" alt="mobile" src={mobile}/>
                <div className="mobiles">
                <h5>Phone number</h5></div>
                <div className="number">
                <h4><b>+91 6382927175</b></h4></div>
                <hr style={{height:"2px",backgroundColor:"black",}}/>
                <div className="email">
                    <img  className="emaillogo" alt="email" src={email2}/>
                    <div className="E">
                    <h5>Email</h5></div>
                    <div className="id">
                        <h4><b>msprakash140902@gmail.com</b></h4>
                    </div>
                </div>
                <hr style={{height:"2px",backgroundColor:"black"}}/>
                <div className="location">
                    <img className="loc" alt="location" src={location2}/>
                    <div className="place">
                        <h5>Location</h5>
                    </div>
                    <div className="hosur">
                        <h4><b>Hosur</b></h4>
                    </div>
                </div>
                <hr style={{height:"2px",backgroundColor:"black"}}/>
                <div className="birthday">
                    <img className="dob" alt="dob" src={dob}/>
                    <div className="dd">
                        <h5>Birthday</h5>
                    </div>
                    <div className="numbers">
                    <h4>14 September 2002</h4>
                    </div>
                </div>
            </div>
            </div>
            <div className="content">
                <div onClick={()=>{
                    setcontent(true)
                    setresume(false)
                    setworks(false)
                    setcontact(false)
                }}>
                <img className="home" alt="home" src={home3}/>
                <div className="homename">
                    <h4><b>Home</b></h4>
                </div>
                </div>
                <div className="resume" onClick={()=>{
                        setresume(true)
                        setcontent(false)
                        setworks(false)
                        setcontact(false)
                    }}>
                    <img className="res" alt="res" src={resume}/>
                    <div className="resname">
                        <h4>Resume</h4>
                    </div>
                </div>
                <div className="works" onClick={()=>{
                    setworks(true)
                    setcontent(false)
                    setcontact(false)
                    setresume(false)
                }}>
                    <img className="workslogo" alt="works" src={work}/>
                    <div className="workword">
                    <h4><b>Works</b></h4></div>
                </div>
                <div className="contact" onClick={()=>{
                    setcontact(true)
                    setresume(false)
                    setcontent(false)
                    setworks(false)
                }}>
                    <img className="contactimg" alt="contact" src={contact}/>
                    <div className="contactname">
                        <h4><b>Contact</b></h4>
                    </div>
                </div>
                {content?
                   <div className="aboutcontent">
                   <div className="aboutname">
                       <h1><b>About Me</b></h1>
                   </div>
                   <div className="aboutstory">
                   <h4><b>I'm a Fresher looking for an entry level job in IT Sector. I like to work in web developing and i have some knowledge in cloud. Espically i know more about the AWS services. </b></h4>
                   </div>
                   <div className="what">
                       <h1><b>What I do</b></h1>
                   </div>
                   <div className="cloud">
                       <img className="cloudlogo" alt="cloud" src={cloud}/>
                       <div className="cloudperu"><h2><b>Cloud Technologies</b></h2></div>
                       <div className="cloudstory">
                           <h4><b>Cloud computing providers store and process data in a location that’s separate from end users.</b></h4>
                       </div>
                   </div>
                   <div className="webdeveloper">
                       <img className="webdeveloperimg" alt="web" src={webdeveloper}/>
                       <div className="webdevelopername">
                           <h2><b>Frontend Developer</b></h2>
                       </div>
                       <div className="webdeveloperstory">
                           <h4><b>A front-end developer builds the front-end portion of websites and web applications—the part users see and interactions.</b></h4>
                       </div>
                   </div>
                   <div className="photography">
                       <img className="photographys" alt="photograph" src={photography}/>
                       <div className="photographyword">
                           <h2><b>Photography</b></h2>
                       </div>
                       <div className="photographystory">
                           <h4><b>Passionate task to capture memories and aesthetic things around world.</b></h4>
                       </div>
                   </div>
                   <div className="cnfull">
                       <img className="cnimg"  alt="cimg" src={cn}/>
                       <div className="cnname">
                           <h2><b>Computer Networks</b></h2>
                       </div>
                       <div className="cnstory">
                           <h4><b>Computer networking refers to interconnected computing devices that can exchange data and share resources with each other.</b></h4>
                       </div>
                   </div>
               </div>
                :resumepage?
                    <div className="align">
                    <Resume></Resume>
                    </div>
                :contactpage?
                    <div className="align">
                    <Contact></Contact>
                    </div>
                :works?
                    <div className="align">
                   <Pworks></Pworks>
                   </div>
                   :
                   <></>
                }
            </div>
        </div>
    )
}
export default Basic