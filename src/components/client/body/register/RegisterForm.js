import react from "react";
import { Link } from "react-router-dom";

// Formik
import { Formik, useFormik } from "formik";
import styled from "styled-components";


const validate = (values) => {
    const errors = {}

        //VALIDACION USERNAME
        if(!values.username) {
            errors.username = 'Requerido'
        } else if(values.username.length < 4) {
            errors.username = 'El Nombre de usuario es muy corto'
        }
    
        //VALIDACION EMAIL
        if(!values.email) {
            errors.email = 'Requerido'
        }

        //VALIDACION PASSWORD
        if(!values.password) {
            errors.password = 'Requerido'
        } else if(values.password.length < 8) {
            errors.password = 'La contraseña debe tener minimo 8 caracteres'
        }

        //VALIDACION CONFIRMPASSWORD
        if(!values.confirmPassword) {
            errors.confirmPassword = 'Requerido'
        } else if(values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Las contraseñas no coinciden'
        }

    return errors
}

//ESTADOS DEL FORMULARIO
function RegisterForm() {
    const registerForm = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: values => console.log(values)
    })
    return (
        <Container>
            <h1>CREAR CUENTA</h1><br/>
            <form onSubmit={registerForm.handleSubmit}>

                <label>Nombre de Usuario</label><br/>
                <input 
                name='username'
                type='text'
                placeholder='User name'
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
                value={registerForm.values.username}
                />
                {registerForm.touched.username && registerForm.errors.username ?
                 <div>{registerForm.errors.username}</div> : null}
                <br/>

                <label>Direccion de correo electronico</label><br/>
                <input 
                name='email'
                type='email'
                placeholder='Email'
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
                value={registerForm.values.email}
                />
                {registerForm.touched.email && registerForm.errors.email ?
                 <div>{registerForm.errors.email}</div> : null}
                <br/>

                <label>Contraseña</label><br/>
                <input 
                name='password'
                type='password'
                placeholder='Password'
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
                value={registerForm.values.password}
                />
                {registerForm.touched.password && registerForm.errors.password ?
                 <div>{registerForm.errors.password}</div> : null}
                <br/>

                <label>Confirme la contraseña</label><br/>
                <input 
                name='confirmPassword'
                type='password'
                placeholder='Confirm password'
                onChange={registerForm.handleChange}
                onBlur={registerForm.handleBlur}
                value={registerForm.values.confirmPassword}
                />
                {registerForm.touched.confirmPassword && registerForm.errors.confirmPassword ?
                 <div>{registerForm.errors.confirmPassword}</div> : null}
                <br/>

                <button type="submit">Crear</button>

            </form><br/>
            <label>
                ¿Ya tienes cuenta? <Link to='/login'>Ingrese aqui</Link>
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

        div {
            padding: 3px 0 0 0;
            color: red;
            font-size: 12px;
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

export default RegisterForm