import { Component } from "react";
import NavDefault from './not_authenticated/NavDefault'
import NavClient from './client/NavClient'
import styled from "styled-components";


class NavBar extends Component {
    render() {
        const tipeNav = 3

        if ( tipeNav === 2 ) {
            return(
                <Nav className="navdefault">
                    <NavDefault/>    
                </Nav>
            )
        }
        if ( tipeNav === 3 ) {
            return(
                <Nav className="navclient">
                    <NavClient/>
                </Nav>
            )
        }
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