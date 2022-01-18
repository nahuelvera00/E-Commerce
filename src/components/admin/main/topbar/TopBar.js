import react, { Component } from "react";
import imgUser from "./assets/user.png"
import topBarStyle from "./topBarStyle.css"

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