import react from "react";
import { Component } from "react";
import Buy from "./component/Buy";
import Description from "./component/Description"
import styled from "styled-components";
import Img from "./component/img/Img"

class Product extends Component {
    render() {
        return(
            <Container>
                <ContainerElement>
                    <FirstElement>
                        <Cont>
                            <Imagen>
                                <Img />
                            </Imagen>
                            <Description />
                        </Cont>
                    </FirstElement>
                    <SecondElement>
                        <Buy />
                    </SecondElement>
                </ContainerElement>
            </Container>
            
        )
    }
}

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 15px 0px;
    justify-content: center;
`

const ContainerElement = styled.div`
    display: grid;
    width: 60%;
    grid-template-columns: 65% 35%;
    grid-template-rows: auto;
    background-color: #f3f3f3;
`

const FirstElement = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
        
`
const Cont = styled.div`
    margin: 10px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 100%;
    overflow: hidden;

`

const Imagen = styled.div`
    display: flex;
    width: auto;
    height: auto;
`

const SecondElement = styled.div`
    width: 100%;
    height: auto;

`

export default Product