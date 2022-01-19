import react, { Component } from "react";
import styled from "styled-components";
import NavBar from "./navbar/Navbar"
import Body from "./body/Body"
import Footer from "./footer/Footer"


class UserContainer extends Component{
    render() {
        return(
            <Container>
                <NavBar/>
                <Body/>
                <Footer/>
            </Container>
        )
    }
}

const Container = styled.div`
width: 100%;
height: 100%;
`

export default UserContainer