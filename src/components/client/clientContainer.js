import react, { Component } from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import styled from "styled-components";
// components
import NavBar from "./navbar/navbar";
import Footer from "./footer/Footer";
import Cart from "./body/cart/Cart";
import Records from "./body/records/Record";
import Product from "./body/product/Product";
import Login from "./body/login/Login";
import Register from "./body/register/Register";
import Home from "./body/home/Home";


class ClientContainer extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <NavBar />
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/client/cart' component={Cart} />
                        <Route exact path='/client/records' component={Records} />
                        <Route exact path='/client/product' component={Product} />
                    <Footer />
                </Router>
            </Container>
        )
    }
}

const Container = styled.div`
width: 100%;
height: 100%;
`

export default ClientContainer