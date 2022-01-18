import react, { Component } from "react";
import styled from "styled-components";
import StyleAdminNav from "./StyleAdminNav.css"

const AdminNav = () => {

        
        const list = document.querySelectorAll('.container li')

        function activeLink(){
            list.forEach((item) =>
            item.classList.remove('hovered'));
            this.classList.add('hovered');
            }
            list.forEach((item) =>
            item.addEventListener('mouseover',activeLink));
        

        return(
            <div className="container">
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="text">DashBoard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><ion-icon name="time-outline"></ion-icon></span>
                            <span className="text">Eventos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><ion-icon name="add-outline"></ion-icon></span>
                            <span className="text">Publicaciones</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><ion-icon name="apps-outline"></ion-icon></span>
                            <span className="text">Categorias</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><ion-icon name="stats-chart-outline"></ion-icon></span>
                            <span className="text">Estadisticas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                            <span className="text">Salir</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }


export default AdminNav