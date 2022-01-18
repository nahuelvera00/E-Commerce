import react, { Component } from "react";
import styled from "styled-components";
import TopBar from "./topbar/TopBar"
import Content from "./content/Content";


class Main extends Component{
    render() {
        return(
            <Container>
                <TopBar/>
                <Content/>
            </Container>
        )
    }
}

const Container = styled.div`
    position: absolute;
    width: calc(100% - 80px);
    left: 80px;
    min-height: 100vh;
    background: white;
    transition: 0.5s;
` 

export default Main