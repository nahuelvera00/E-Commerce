import { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Buttom from '../Buttom';

// Css
import nav_default from './nav_default.css';

class NavDefault extends Component {
    render() {
        return (
            <div className="nav_container">
                <div className="navegation_default">
                    <Buttom >INICIO</Buttom>
                    <Buttom >CATEGORIAS</Buttom>
                </div>
                
                <div className="login_default">
                    <Buttom >LOGIN</Buttom>
                </div>
            </div>
        )
    }
}

export default NavDefault