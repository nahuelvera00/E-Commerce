import { render } from "@testing-library/react";
import react from "react";
import { Component } from "react";
import styled from "styled-components";
import camion from './camion.png';
import tarjeta from './tarjeta.png';
import banco from './banco.png';

class Span extends Component {
    render(){
        return(
            <Container>
                <UtilityContainer>
                    <SpanElement>
                        <Image>
                            <img src={camion} alt=""/>
                        </Image>
                        <Text>
                            <p>Envios a todo el pais</p>
                        </Text>
                    </SpanElement>
                    <SpanElement>
                        <Image>
                            <img src={tarjeta} alt=""/>
                        </Image>
                        <Text>
                            <p>6 cuotas sin interes con T. de credito</p>
                        </Text>
                    </SpanElement>
                    <SpanElement>
                        <Image>
                            <img src={banco} alt=""/>
                        </Image>
                        <Text>
                            <p>10% OFF en tranferencia bancaria</p>  
                        </Text>    
                    </SpanElement>
                </UtilityContainer>
            </Container>

        )
    }
}

const Container = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`
const UtilityContainer = styled.div`
display: grid;
width: 70%;
grid-template-columns: 33% 33% 33%;
`

const SpanElement = styled.div`
display: grid;
grid-template-columns: 25% 75%;

`

const Image = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100%;
img {
    width: 70%;
}

`

const Text = styled.div` 
    display: flex;
    position: relative;
    margin: 2px;
    align-items: center;
    width: 80%;
    height: 100%;

    p {
        font-size: 15px;
    }
`

export default Span