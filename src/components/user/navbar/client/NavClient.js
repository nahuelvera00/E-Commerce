import { Component } from "react";
import { Link } from "react-router-dom";

import Buttom from '../Buttom'

import nav_client from './nav_client.css'

class NavClient extends Component {
    render() {
        return (
            <div className="nav_container">
                <div className="navegation_client">
                    <Buttom >INICIO</Buttom>
                    <Buttom >COLECCION</Buttom>
                    <Buttom >CAMPAÑA</Buttom>

                </div>
                <div className="logout_client">
                    <Buttom >CARRITO</Buttom>
                    <Buttom >HISTORIAL</Buttom>
                    <Buttom >LOG OUT</Buttom>   
                </div>
            </div>
        )
    }
}

export default NavClient