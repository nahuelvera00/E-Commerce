import { Component } from "react";
import buttom from './buttom.css'

class Buttom extends Component{
    render() {
        return(
            <button {...this.props} />
        )
    } 
}

export default Buttom