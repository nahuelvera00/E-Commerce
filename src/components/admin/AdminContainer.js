import react, { Component } from "react";
import styled from "styled-components";
import AdminNav from "./navbar/AdminNav";
import Main from "./main/Main"

class AdminContainer extends Component{
    render() {
        return(
            <Container>
                <AdminNav/>
                <Main/>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export default AdminContainer