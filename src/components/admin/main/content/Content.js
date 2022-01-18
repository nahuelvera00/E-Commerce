import react, { Component } from "react";

//Styles
import content from "./content.css"

//Import Home
import Home from "./components/Home"

//Import Pubications
import Publication from "./components/Publications"

//Import Categories
import Categories from "./components/Categories"

//Import Statictis
import Statictis from "./components/Statictis"

//Import Events
import Events from "./components/Events"

class Content extends Component{
    render(){

        const typeSelect = 1
        if(typeSelect == 1){
            return(
                <div className="content">
                    <Home/>
                </div>
            )
        }
        if(typeSelect == 2){
            return(
                <div className="content">
                    <p>Events</p>
                </div>
            )
        }
        if(typeSelect == 3){
            return(
                <div className="content">
                    <p>Publications</p>
                </div>
            )
        }
        if(typeSelect == 4){
            return(
                <div className="content">
                    <p>Categories</p>
                </div>
            )
        }
        if(typeSelect == 5){
            return(
                <div className="content">
                    <p>Statictis</p>
                </div>
            )
        }
    }
}


export default Content