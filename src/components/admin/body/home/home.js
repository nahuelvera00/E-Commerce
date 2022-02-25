import react, { Component } from "react";
import "./home.css"

class Home extends Component {
    render() {
        return (
            <div className="firstContainer">
                <div className="cardBox">
                    <div className="firstCard">

                        <div className="card">
                            <div>
                                <div className="number">12</div>
                                <div className="cardName">Ventas totales del mes</div>
                            </div>
                            <div className="iconCard">
                                <ion-icon name="reader-sharp"></ion-icon>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className="number">5</div>
                                <div className="cardName">Envios Pendientes</div>
                            </div>
                            <div className="iconCard">
                                <ion-icon name="car-sharp"></ion-icon>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className="number">123</div>
                                <div className="cardName">Ingresos</div>
                            </div>
                            <div className="iconCard">
                                <ion-icon name="cash-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className="number">$4500</div>
                                <div className="cardName">Ingresos</div>
                            </div>
                            <div className="iconCard">
                                <ion-icon name="logo-usd"></ion-icon>
                            </div>
                        </div>

                    </div>

                    <div className="secondCard">
                        <div className="recentOrders">
                            <div className="cardHeader">
                                <h2>Ordenes Recientes</h2>
                                <a href="#" class="btn"> Ver todas </a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>ARTICULO</td>
                                        <td>PRECIO</td>
                                        <td>PAGO</td>
                                        <td>ESTADO</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Articulo 1</td>
                                        <td>$12.000</td>
                                        <td>Abonado</td>
                                        <td><span class="status delivered">En Camino</span></td>
                                    </tr>
                                    <tr>
                                        <td>Articulo 1</td>
                                        <td>$12.000</td>
                                        <td>Abonado</td>
                                        <td><span class="status delivered">En Camino</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home