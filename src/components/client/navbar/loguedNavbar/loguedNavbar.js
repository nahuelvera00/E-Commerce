import { Component } from "react";
import { Link } from "react-router-dom";

class LoguedNavbar extends Component {
    render() {
        return (
            <div className="nav_container">
                <div className="navegation_client">
                    <Link className="nav-btn" to='/' >INICIO</Link>
                    <Link className="nav-btn" to='/'>COLECCION</Link>
                    <Link className="nav-btn" to='/'>CAMPAÑA</Link>

                </div>
                <div className="logout_client">
                    <Link className="nav-btn" to='/client/cart'>CARRITO</Link>
                    <Link className="nav-btn" to='/client/records'>HISTORIAL</Link>
                    <Link className="nav-btn" to='/'>LOG OUT</Link>   
                </div>
            </div>
        )
    }
}

export default LoguedNavbar