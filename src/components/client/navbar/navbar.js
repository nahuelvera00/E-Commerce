import { Component } from "react";
import NoLoguedNavbar from "./noLoguedNavbar/noLoguedNavbar";
import LoguedNavbar from "./loguedNavbar/loguedNavbar";
import styled from "styled-components";
import "./navbar.css"


class NavBar extends Component {
    render() {

        const tipeNav = 2

        if (tipeNav === 2) return (
            <Nav className="navdefault">
                <NoLoguedNavbar/>
            </Nav>)
        else return (
            <Nav className="navclient">
                <LoguedNavbar />
            </Nav>)

    }
}

const Nav = styled.nav`
    position: sticky;
    top: 0;
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: black;
    z-index: 2000;
`

export default NavBar