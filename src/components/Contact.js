import React from "react";
import contact from'../CSS/contact.css'

function Contact(){
    return(
        <div className="contactform">
            <div className="conname">
            <h4>Contacts</h4></div>
            <div className="conbox">
                <div className="concon">
                <h2><b>I'm always ready to contact and valuable conversations. Leave your comments here!</b></h2></div>
                <div className="messbox">
                <form action="submit.php" method="post">
                 <div className="nameword">   
                <label htmlFor="name">Name:</label><br/></div>
                <div className="namebox">
                <input type="text" id="name"  placeholder="Enter the name" name="name" required /><br /><br /></div>
                <div className="emailname">
                <label htmlFor="email">Email:</label><br /></div>
                <div className="emailbox">
                <input type="email" id="email"placeholder="Enter your email id" name="email" required /><br /><br /></div>
                <div className="messageword">
                <label htmlFor="message">Message:</label><br /></div>
                <div className="messagebox">
                <textarea id="message" name="message"  placeholder="Type your message" rows="8" cols="58" required></textarea><br /><br /></div>
                <div className="submitbutton">
                <input type="submit" className="buttonbox" value="Submit" /></div>
            </form>
        </div>
                </div>
            </div>
    )
}

export default Contact;