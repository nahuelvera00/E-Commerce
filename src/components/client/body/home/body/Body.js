import react from "react";
import { Component } from "react";
import BodyCategories from "./body_categories/BodyCategories";
import NewRevenue from './new_revenue/NewRevenue'

class Body extends Component {
    render() {
        return(
            <div >
                <NewRevenue />
                <BodyCategories />
            </div>

        )
    }
}

export default Body