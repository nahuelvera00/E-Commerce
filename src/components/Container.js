import react, { Component } from "react";
import AdminContainer from "./admin/AdminContainer";
import UserContainer from "./user/UserContainer"
import NotRegisterContainer from "./notuser/NotRegisterContainer"
import styled from "styled-components";



class Container extends Component{
    render() {

        const userType = 3

        if(userType == 1){
            return(
                <Body>
                    <AdminContainer/>
                </Body>
            )
        }
        if(userType == 2 || 3){
            return(
                <Body>
                    <UserContainer/>
                </Body>
            )
        }
        if(userType == 3){
            return(
                <Body>
                    <NotRegisterContainer/>
                </Body>
            )
        }
    }
}

const Body = styled.div`
    min-height: 100vh;
    overflow-x: hidden;
`


export default Container