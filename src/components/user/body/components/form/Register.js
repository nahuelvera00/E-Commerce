import react, { Component } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import Formulario from './RegisterForm'

class Register extends Component{
    render() {
        return(
            <Container>
                <Form>
                    <Formulario/>
                </Form>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Form = styled.div`
    display: flex;
    width: 50%;
`

export default Register