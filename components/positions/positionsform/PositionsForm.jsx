import React from "react";
import "./positionsform.css"

export const PositionsForm = () => {
    return (
        <div className="positions-form">
        
         
            <form action="">
                <p>
                    ADD NEW POSITION
                </p>
                
                <label htmlFor="Position">Position</label>
                <input type="text" required name="Position"/>

                <label htmlFor="VoteLimit">Vote Limit</label>
                <input type="text" required name="VoteLimit"/>

                <input type="submit" value="Cancel"/>
                <input type="submit" value="Save"/>
            </form>
        </div>
    )
}