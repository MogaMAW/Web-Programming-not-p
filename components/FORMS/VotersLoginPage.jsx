//voterlogin page form
import React from "react";
import "./votersloginpage.css"


const VotersLoginPage = () => {
    return (
        <div className="voters-form">
            <div className="Header">
                Voter login
            </div>

            <form action="">   
                <div className="Username">
                <label htmlFor="text">Username</label> 
//                 taking using name
                    <input type="text" required name="text"/>                 
                </div>
    
                <div className="Password">
                <label htmlFor="Password">Password</label>
                    <input type="password" required name="Password"/>                  
                </div>

            </form>

            <div className="login">
            <input type="submit" value="login"/>
            </div>
            
        </div>
    )
}
export default VotersLoginPage;
