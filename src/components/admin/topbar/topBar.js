import react, { Component } from "react";
import imgUser from "./img/user.png"
import "./topbar.css"
class TopBar extends Component{
    render(){
        return(
            <div className="topbar">
                <div className="userImage">
                    <img src={imgUser}/>
                </div>
            </div>
        )
    }
}

export default TopBar