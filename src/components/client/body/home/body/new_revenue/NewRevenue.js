import react from "react";
import { Component } from "react";
import styled from "styled-components";
import reloj1 from './reloj1.jpg';
import reloj2 from './reloj2.jpg';
import reloj3 from './reloj3.jpg';

class NewRevenue extends Component {
    render() {
        return(
            <Container>
                <p>NUEVOS INGRESOS</p>
                <ElementContainer>
                        <Element>
                            <a  href="https://www.youtube.com/watch?v=rYlXlkp1180&ab_channel=EmiliaMusicVEVO" alt=" ">
                                <Image>
                                    <img src={reloj2} alt=""/>
                                </Image>
                                <Text>
                                    <h2>Reloj 1</h2>
                                    <p>$500</p>                                
                                </Text>
                            </a>
                        </Element>
                        <Element>
                            <a  href="https://www.youtube.com/watch?v=rYlXlkp1180&ab_channel=EmiliaMusicVEVO" alt=" ">
                                <Image>
                                    <img src={reloj2} alt=""/>
                                </Image>
                                <Text>
                                    <h2>Reloj 2</h2>
                                    <p>$200</p>                                
                                </Text>
                            </a>
                        </Element>
                        <Element>
                            <a  href="https://www.youtube.com/watch?v=rYlXlkp1180&ab_channel=EmiliaMusicVEVO" alt=" ">
                                <Image>
                                    <img src={reloj3} alt=""/>
                                </Image>
                                <Text>
                                    <h2>Reloj 3</h2>
                                    <p>$400</p>                                
                                </Text>
                            </a>
                            
                        </Element>
                        <Element>
                            <a href="https://www.youtube.com/watch?v=rYlXlkp1180&ab_channel=EmiliaMusicVEVO" alt=" ">
                                <Image>
                                    <img src={reloj2} alt=""/>
                                </Image>
                                <Text>
                                    <h2>Reloj 4</h2>
                                    <p>$300</p>
                                </Text>
                            </a>
                           
                        </Element>
                </ElementContainer>
            </Container>
        )
    }
}

const Container = styled.div`
padding: 1px 10px;
margin-bottom: 30px;

p {
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline;
    padding: 0px;
}

`

const ElementContainer = styled.div`
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: auto;
    grid-gap: 15px;
    padding: 0px;
    margin: 0px;
    width: 100%;
`

const Element = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 90% 10%;

    a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
    }

`

const Image = styled.div` 
    display: flex;
    padding: 10px;
    

    img{
        display: inline-block;
        object-fit: cover;
        width: 100%;
        max-width: 300px;
    }

`

const Text = styled.div`
    display: block;
    align-items: center;
    padding: 0 10px;

    h2 {
        text-decoration: none;
        font-weight: 400;
        font-size: 14px;
        margin: 0px;
    }

    p {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        margin: 0px;
        color: green;
        
    }

`

export default NewRevenue