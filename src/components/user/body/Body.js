import { Component } from "react";
import {Route} from 'react-router-dom';
import Home from './components/Home'

// CLient component
import Cart from './client_component/cart/Cart'
import Records from './client_component/records/Record'
import Product from './components/products/Product'

//Default Component
import Login from "./components/form/Login"
import Register from "./components/form/Register"

class Body extends Component{
    render(){
        const typeUser = 2

        // client
        if (typeUser === 1) {
            return (
                <div>
                    <Route exact path ='/client' component={Home} />
                    <Route exact path ='/client/cart' component={Cart} />
                    <Route exact path ='/client/records' component={Records} />
                    <Route exact path='/client/product' component={Product} />
                </div>

            )
        }
        if (typeUser === 2) {
            return (
                <div>
                    <Route exact path ='/' component={Home} />
                    <Route exact path ='/login' component={Login} />
                    <Route exact path ='/register' component={Register} />
                </div>
                
            )
        }
    }
}

export default Body