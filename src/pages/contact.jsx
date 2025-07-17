import React from "react";
function Contact(){
    return(
        <>
        <h2>This is Contact Page 📞</h2>
        <p>Share your Contact Details</p>
        <input placeholder="Enter Your Name" type="text" id="name" required/><br></br>
        <input placeholder="Phone Number" type="number" id="tel" required/><br></br>
        <input placeholder="Enter your e-mail" type="email" id="email" required/><br></br>
        <br></br>
        <input type="submit" value="Submit ✅" />
        </>
    )
}
export default Contact;