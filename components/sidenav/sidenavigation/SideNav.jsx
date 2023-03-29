import React from "react";
import SidebarData from "./SidebarData";
import "./sidenav.css"



export const SideNav = () => {
    return (
        <div className="navbar">
            <ul className="sidebarList">
                {SidebarData.map((val,key) =>{
                    return(
                        <li 
                            key ={key} 
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick= {()=>{
                            window.location.pathname = val.link
                            }}
                        > 
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}

            </ul>
        </div>
    );
} 
export default SideNav;  

