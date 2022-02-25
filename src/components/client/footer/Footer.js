import react from "react";
import { Component } from "react";
import styled from "styled-components";
import footer from "./footer.css"

//Icons
import instagram from "./icons/instagram.png"
import facebook from "./icons/facebook.png"
import twitter from "./icons/twitter.png"
import email from "./icons/email.png"
import whatsapp from "./icons/whatsapp.png"
import ubication from "./icons/ubication.png"
import phone from "./icons/phone.png"
import mastercard from "./icons/mastercard.png"
import visa from "./icons/visa.png"
import american from "./icons/american-express.png"


class Footer extends Component{
    render() {
        return(
            <div className="footer">
                <Container>
                        <ElementContainer>
                            <Higher>
                                <Element>
                                    <p>Social</p>
                                    <ul>
                                        <li>
                                            <a href="" alt="">
                                                <img src={instagram} alt=""/>
                                                <p>Instagram</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" alt="">
                                                <img src={facebook} alt=""/>
                                                <p>Facebook</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" alt="">
                                                <img src={twitter} alt=""/>
                                                <p>Twitter</p>
                                            </a>
                                        </li>
                                    </ul>
                                </Element>
                                <Element>
                                    <p>Contacto</p>
                                    <ul>
                                        <li>
                                            <a href="" alt="">
                                                <img src={email} alt=""/>
                                                <p>admin@gmail.com</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://wa.link/kv9k4d" target="_blank" alt="">
                                                <img src={whatsapp} alt=""/>
                                                <p>2235111111</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" alt="">
                                                <img src={phone} alt=""/>
                                                <p>2235111111</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" alt="">
                                                <img src={ubication} alt=""/>
                                                <p>Mar del Plata, Argentina</p>
                                            </a>
                                        </li>
                                    </ul>

                                </Element>
                                <Element>
                                    <p>Nosotros</p>
                                    <ul>
                                        <li>
                                            <p>Somos una tienda especializada en venta de relojes</p>
                                        </li>
                                    </ul>
                                </Element>
                            </Higher>
                            <Lower>
                                <Element>
                                    <p>Medios de pago</p>
                                    <img src={mastercard} alt="" />
                                    <img src={visa} alt="" />
                                    <img src={american} alt="" />
                                </Element>
                            </Lower>
                        </ElementContainer>
                </Container>
            </div>
        )
    }
}


const Container = styled.div`
    display: inline-block;
    width: 70%;

`

const ElementContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;

`
const Higher = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 3px;
    
`

const Element = styled.div`
padding: 10px;

    p {
        font-size: 17px;
        font-weight: 600;
        text-decoration: underline;
        padding: 0px;
    }

    img {
        margin: 2px;
    }

    ul {
        padding: 0 10px;
        margin: 2px;
    }  

    li {
        margin: 0px;
        list-style: none;

        p {
            font-size: 14px;
            font-weight: 400;
            padding: 3px;
            margin: 0px;
            display: inline;
            margin-left: 5px;
            text-decoration: none;
            border: none;
        }

        a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;

            p {
                font-size: 14px;
                font-weight: 400;
                padding: 3px;
                margin: 0px;
                display: inline;
                margin-left: 5px;
                text-decoration: none;
                border: none;
            }

            img {
                margin: 1px;
            }
        }
    }

`

                                                                                                                

const Lower = styled.div`

`


export default Footer