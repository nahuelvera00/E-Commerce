import react, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
// components
import AdminNavbar from "./navbar/adminNavbar";
import Home from "./body/home/home";
import Events from "./body/events/events";
import Categories from "./body/categories/categories"
import Publications from "./body/publications/publications"
import Statistic from "./body/statictis/statictis"

class AdminContainer extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <AdminNavbar />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/admin/events' component={Events} />
                    <Route exact path='/admin/categories' component={Categories} />
                    <Route exact path='/admin/publications' component={Publications} />
                    <Route exact path='/admin/statistics' component={Statistic} />
                </Router>

            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export default AdminContainer