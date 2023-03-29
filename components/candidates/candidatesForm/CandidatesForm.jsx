import React from "react";
import "./candidatesform.css"

export const CandidatesForm = () => {
    return (
        <div className="candidates-form">
        
         
            <form action="">
                <p>
                    ADD NEW CANDIDATE
                </p>
                
                <label htmlFor="FirstName">First Name</label>
                <input type="text" required name="FirstName"/>

                <label htmlFor="LastName">Last Name</label>
                <input type="text" required name="LastName"/>

                <label htmlFor="Position">Position</label>
                <input type="text" required name="Position"/>

                <input type="submit" value="Cancel"/>
                <input type="submit" value="Save"/>
            </form>
        </div>
    )
}