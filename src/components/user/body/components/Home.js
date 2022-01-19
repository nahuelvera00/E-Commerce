import { Component } from "react";
import styled from "styled-components";
import home from "./home.css"
import SlideShow from "./banner/SlideShow"
import Span from './span/Span'
import Body from './home_components/Body'


class Home extends Component{
    render() {
        return (
            <div>
                <div className="banner">
                    <SlideShow />
                </div>
                <div className="span">
                    <Span />
                </div>
                <div className="body">
                    <Body />
                </div>
            </div>
        )
    }
}

export default Home