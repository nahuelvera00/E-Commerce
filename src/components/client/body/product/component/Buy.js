import react, { Component } from "react";
import styled from "styled-components";

class Buy extends Component{ 
    render() {
        return(
            <Container>
                <Content>
                    <DescriptionContent>
                        <div>
                            <h1>XIAOMI Mi Band 6</h1>
                            <h2>$300</h2>
                        </div>
                        <Form>
                            <h4>Seleccione Color</h4>
                            <select name="Selecione">
                                <option value="x" selected>Selecione Color</option>
                                <option value="rojo">Rojo</option>
                                <option value="verde">Verde</option>
                                <option value="gris">Gris</option>
                                <option value="azul">Azul</option>
                            </select>
                            <h4>Seleccione Capacidad</h4>
                            <select name="Selecione">
                                <option value="x" selected>Selecione Capacidad</option>
                                <option value="16gb">16gb</option>
                                <option value="32gb">32gb</option>
                                <option value="64gb">64gb</option>
                                <option value="128gb">128gb</option>
                            </select>
                            <h4>Seleccione Version</h4>
                            <select name="Selecione">
                                <option value="x" selected>Selecione Version</option>
                                <option value="USA">USA</option>
                                <option value="LATAM">LATAM</option>
                                <option value="UK">UK</option>
                            </select><br></br>
                            <input type="button" value="Añadir al Carro"></input>
                        </Form>    
                    </DescriptionContent>
                </Content>
            </Container>
        )
    }
}

const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
`

const Content = styled.div`
display: flex;
padding-left: 10px;
width: 100%;
height: auto;
margin: 10px 10px 10px 0;
background-color: #fff;



`

const DescriptionContent = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 10% 90%;

    h1{
    display: inline-block;
    width: 100%;
    margin: 0px;
    margin: 0;
    padding: 0;
    }

    h2 {
        margin: 0;
        padding: 0;
        color: #45B39D;
    }
`

const Form = styled.div`
    padding: 20px 0 0 0;
    margin: 20px 0 0 0;

    h4 {
        margin: 15px 0 0 0;

    }

    select {
        width: 200px;
        margin-left: 10px;
    }

    input {
        margin: 20px 0 0 0;
        font-size: 20px;
        border: none;
        background-color: #45B39D;
        border-radius: 3px;

        :hover {
            color: #fff;
        }

    }
`


export default Buy