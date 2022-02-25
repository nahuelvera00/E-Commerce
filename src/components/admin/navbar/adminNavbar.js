import react, { Component } from "react";
import { Link } from "react-router-dom";
import "./adminNavbar.css"

class AdminNavbar extends Component {
    render() {

        const list = document.querySelectorAll('.container li')
        function activeLink() {
            list.forEach((item) =>
                item.classList.remove('hovered'));
            this.classList.add('hovered');
        }
        list.forEach((item) =>
            item.addEventListener('mouseover', activeLink));

        return (
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="text">DashBoard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/events">
                            <span className="icon"><ion-icon name="time-outline"></ion-icon></span>
                            <span className="text">Eventos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/publications">
                            <span className="icon"><ion-icon name="add-outline"></ion-icon></span>
                            <span className="text">Publicaciones</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/categories">
                            <span className="icon"><ion-icon name="apps-outline"></ion-icon></span>
                            <span className="text">Categorias</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/statistics">
                            <span className="icon"><ion-icon name="stats-chart-outline"></ion-icon></span>
                            <span className="text">Estadisticas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className="text">Salir</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}


export default AdminNavbar