import react from "react";
import { Component } from "react";
import styled from "styled-components";
import seiko from './seiko.png'
import rolex from './rolex.png'
import citizen from './citizen.png'

class BodyCategories extends Component {
    render() {
        return(
            <Container>
                <p>CATEGORIAS</p>
                <ElementContainer>
                    <Element>
                        <a href="https://www.seikowatches.com/global-en">
                            <img src={seiko} alt=""/>
                        </a>
                    </Element>
                    <Element>
                        <a href="https://www.rolex.com/es">
                            <img src={rolex} alt=""/>
                        </a>
                    </Element>
                    <Element>
                        <a href="https://citizenwatch.com.ar/">
                            <img src={citizen} alt=""/>
                        </a>
                    </Element>
                    <Element>
                        <a href="">
                            <img src={rolex} alt=""/>
                        </a>
                    </Element>
                    <Element>
                        <a href="">
                            <img src={citizen} alt=""/>
                        </a>
                    </Element>
                    <Element>
                        <a href="">
                            <img src={seiko} alt=""/>
                        </a>
                    </Element>
                </ElementContainer>
            </Container>
        )
    }
}

const Container = styled.div`
margin-bottom: 40px;

p {
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline;
    padding: 0px;
    margin: 3px;
}

`

const ElementContainer = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-gap: 3px;

    @media (max-width:1024px) {
        grid-template-columns: 50% 50%;
    }
    @media (max-width:750px) {
        grid-template-columns: 100%;
    }

`

const Element = styled.div`
border: 1px solid black;
cursor: pointer;

a {
    display: flex;
    width: 100%;
    height: auto;
    
    img{
        display: flex;
        width: 100%;
        height: 250px;
        object-fit: cover;
        scale: auto;
    }
}

`

export default BodyCategories