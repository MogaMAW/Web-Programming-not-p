//chief login's page
import React from "react";
import "./chiefloginpage.css"


export const ChiefLoginPage = () => {
    return (
        <div className="chief-form">
            <div className="Header">
                Chief login
            </div>

            <form action="">   
                <div className="chiefid">
                <label htmlFor="text">Chiefid</label>
                    <input type="text" required name="text"/>                 
                </div>
    
                <div className="chiefname">
                <label htmlFor="text">Chief name</label>
                    <input type="text" required name="text"/>                  
                </div>

            </form>

            <div className="login">
            <input type="submit" value="login"/>
            </div>
            
        </div>
    )
}
export default ChiefLoginPage;
