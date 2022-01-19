import react from "react";
import { Link } from "react-router-dom";

// Formik
import { useFormik } from "formik";
import styled from "styled-components";

// Services
import AuthServices from "../../../../services/AuthServices";

function LoginForm() {
    const formulario = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => AuthServices.Login(values).then(data => {
            console.log(data);
            if (data.error === false) alert('Logueado con exito')
        })
    })
    return (
        <Container>
            <h1>INICIAR SESION</h1><br/>
            <form onSubmit={formulario.handleSubmit}>
                
                <label>Nombre de Usuario</label><br/>
                <input 
                name='username'
                type='text'
                placeholder='Nombre de Usuario'
                onChange={formulario.handleChange}
                value={formulario.values.username}
                /><br/>

                <label>Contraseña</label><br/>
                <input 
                name='password'
                type='password'
                placeholder='Password'
                onChange={formulario.handleChange}
                value={formulario.values.password}
                /><br/>

                <button type="submit">Ingresar</button>

            </form><br/>
            <label>
                ¿No tienes cuenta aun? <Link to='/register'>Registrate aquí</Link> 
            </label>
        </Container>
    );
}

const Container = styled.div`
    display: block;
    width: 100%;
    margin: 50px 0 70px;

    h1 {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    label {
        
        a{
            border: none;
            font-weight: 600;
        }
    }


    form {
        display: block;
        width: 100%;

        input {
            display: flex;
            width: 100%;
            padding: 5px;
            border: none;
            border-bottom: 1px solid black;
            font-size: 20px;
            background-color: #f3f3f3;

            :hover {
                border-bottom: 1px solid green;
                
            }
        }

        button {
            display: flex;
            justify-content: center;
            padding: 5px 0;
            margin: 10px 0;
            width: 100%;
            border-radius: 5px;
            background-color: #f3f3f3;
            color: black;

            :hover {
                background-color: #c3c3c3;
                color: black;
            }
        }
}
`

export default LoginForm