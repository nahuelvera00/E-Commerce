import react, { Component } from "react";
import styled from "styled-components";

class Description extends Component{ 
    render() {
        return(
            <Container>
                <Content>
                    <h1>Descripcion</h1>
                    <div>
                        <p>Marca: XIAOMI <br/>
                            Modelo: Mi band 6
                        </p>
                    </div>
                </Content>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    background-color: #fff;


`

const Content = styled.div`
    display: grid;
    grid-template-rows: auto auto; 

    h1 {
        display: inline-block;
        margin: 100%;
        padding: 0px;
        margin: 5px;
        margin-left: 10px;
        border-bottom: 1px solid #c3c3c3;
        font-size: 20px;
        font-weight: 400;
    }

    p {
        margin-top: 5px;
        margin-left: 20px;
    }
`

export default Description