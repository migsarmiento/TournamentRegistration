import React, { Component } from 'react';
import Home from './home';
import Header from "./header";
import MenuBar from "./menu-bar";
import Footer from "./footer";
import FencersList from "./fencers-list";

import '../styles/fonts.css';
import '../styles/standardize.css';
import '../styles/home-logged-in.css';
import '../styles/home-logged-in-grid.css';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showHomePage: true,
            showFencersList: false,
        };
    }

    render() {
        let content = null;

        if(this.state.showHomePage) {
            content = <Home/>
        } else if(this.state.showFencersList) {
            content = <FencersList/>
        }

        return (
            <div>
                <Header />
                <MenuBar />
                {content}
                <Footer/>
            </div>
        );
    }
}