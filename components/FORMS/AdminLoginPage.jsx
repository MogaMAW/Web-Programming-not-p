//admin login page 
import React from "react";
import "./Adminloginpage.css"


export const AdminLoginPage = () => {
    return (
        <div className="Admin-form">
            <div className="Header">
                Admin login
            </div>

            <form action="">   
                <div className="adminid">
                <label htmlFor="text">Adminid</label> //takes in admin id
                    <input type="text" required name="text"/>                 
                </div>
    
                <div className="adminname">
                <label htmlFor="text">Admin name</label> // and admin name 
                    <input type="text" required name="text"/>                  
                </div>

            </form>

            <div className="login">
            <input type="submit" value="login"/>
            </div>
            
        </div>
    )
}
export default AdminLoginPage;
