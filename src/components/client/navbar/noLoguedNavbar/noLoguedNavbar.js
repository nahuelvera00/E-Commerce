import { Component } from "react";
import { Link } from "react-router-dom";

class NoLoguedNavbar extends Component {
    render() {
        return (
            <div className="nav_container">
                <div className="navegation_default">
                    <Link className="nav-btn" to='/'>INICIO</Link>
                    <Link className="nav-btn" to='/'>CATEGORIAS</Link>
                </div>
                
                <div className="login_default">
                    <Link className="nav-btn" to='/login'>LOGIN</Link>
                </div>
            </div>
        )
    }
}

export default NoLoguedNavbar